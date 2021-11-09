#! /usr/bin/env node

const https = require('https');
const { stdout } = require('process');

(async () => {
  const url = process.argv[2];

  if (!url) return;

  const certificateChain = await getCertificateChain(url);

  let output = '';

  for (let i = 0; i < certificateChain.length; i++) {
    const certificate = certificateChain[i];

    let heading;

    if (i === 0) {
      heading = '# Root Certificate';
    } else if (i === certificateChain.length - 1) {
      heading = '# End-user Certificate';
    } else {
      heading = '# Intermediate Certificate ' + i;
    }
    output += `${heading}\n\n`;

    output += `${pemEncode(certificate)}\n\n`;

    output += `Common Name: ${certificate.subject.CN || ''}\n`;
    output += `Organization: ${certificate.subject.O || ''}\n`;
    output += `Valid From: ${certificate.valid_from || ''}\n`;
    output += `Valid To: ${certificate.valid_to || ''}\n`;
    output += `Issuer: ${certificate.issuer.CN || ''}, ${certificate.issuer.O || ''}\n`;
    output += `Serial Number: ${certificate.serialNumber || ''}\n`;

    if (i !== certificateChain.length - 1) output += '\n\n\n';
  }

  stdout.write(output + '\n');
})();

function getCertificateChain(url) {
  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) url = `https://${url}`;

    const host = 'https://' + new URL(url).host; // Includes port if set

    https.get(host, { agent: https.Agent({ maxCachedSessions: 0 }) }, (res) => {
      let certificate = res.socket.getPeerCertificate(true);

      const certificateChain = [];

      certificateChain.push(certificate);

      while (certificate !== certificate.issuerCertificate) {
        certificate = certificate.issuerCertificate;
        certificateChain.push(certificate);
      }

      resolve(certificateChain.reverse());
    });
  });
}

function pemEncode(certificate) {
  const certRaw = certificate.raw.toString('base64');

  const chunks = [];

  const certRawLength = certRaw.length;
  while (chunks.length * 64 < certRawLength) {
    const i = chunks.length * 64;

    const chunk = certRaw.slice(i, i + 64);
    chunks.push(chunk);
  }

  return (
    '-----BEGIN CERTIFICATE-----\n' +
    chunks.join('\n') +
    '\n-----END CERTIFICATE-----'
  );
}
