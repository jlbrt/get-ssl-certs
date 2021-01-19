#! /usr/bin/env node

const https = require("https");
const chalk = require("chalk");
const packageJSON = require("./package.json");
const { program } = require("commander");

program
  .version(packageJSON.version)
  .arguments("<url>")
  .action(async (url) => {
    if (url) {
      const certificateChain = await getCertificateChain(url);

      for (let i = 0; i < certificateChain.length; i++) {
        const certificate = certificateChain[i];

        let heading;

        if (i === 0) {
          heading = "# Root Certificate";
        } else if (i === certificateChain.length - 1) {
          heading = "# End-user Certificate";
        } else {
          heading = "# Intermediate Certificate " + i;
        }
        console.log(heading + "\n");

        console.log(pemEncode(certificate) + "\n");

        console.log(
          chalk.bold("Common Name: ") + (certificate.subject.CN || "")
        );
        console.log(
          chalk.bold("Organization: ") + (certificate.subject.O || "")
        );
        console.log(
          chalk.bold("Valid From: ") + (certificate.valid_from || "")
        );
        console.log(chalk.bold("Valid To: ") + (certificate.valid_to || ""));
        console.log(
          chalk.bold("Issuer: ") +
            (certificate.issuer.CN || "") +
            ", " +
            (certificate.issuer.O || "")
        );
        console.log(
          chalk.bold("Serial Number: ") + (certificate.serialNumber || "")
        );

        if (i !== certificateChain.length - 1) console.log("\n\n");
      }
    }
  });

program.parse();

function getCertificateChain(url) {
  return new Promise((resolve, reject) => {
    if (!url.startsWith("http")) url = `https://${url}`;

    const host = "https://" + new URL(url).host; // Includes port if set

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
  const str = certificate.raw.toString("base64");

  const ret = [];

  for (let i = 1; i <= str.length; i++) {
    ret.push(str[i - 1]);
    const mod = i % 64;

    if (mod === 0 && i < str.length) {
      ret.push("\n");
    }
  }

  const returnString = `-----BEGIN CERTIFICATE-----\n${ret.join(
    ""
  )}\n-----END CERTIFICATE-----`;

  return returnString;
}
