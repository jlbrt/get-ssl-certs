# Get SSL Certs

A CLI tool that fetches SSL Certificates of a given URL.

## Usage

`npx get-ssl-certs duckduckgo.com`

Example Output:

```
# Root Certificate

-----BEGIN CERTIFICATE-----
MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD
QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT
MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j
b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB
CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97
nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt
43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P
T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4
gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO
BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR
TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw
DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr
hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg
06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF
PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls
YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk
CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=
-----END CERTIFICATE-----

Common Name: DigiCert Global Root CA
Organization: DigiCert Inc
Valid From: Nov 10 00:00:00 2006 GMT
Valid To: Nov 10 00:00:00 2031 GMT
Issuer: DigiCert Global Root CA, DigiCert Inc
Serial Number: 083BE056904246B1A1756AC95991C74A



# Intermediate Certificate 1

-----BEGIN CERTIFICATE-----
MIIElDCCA3ygAwIBAgIQAf2j627KdciIQ4tyS8+8kTANBgkqhkiG9w0BAQsFADBh
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD
QTAeFw0xMzAzMDgxMjAwMDBaFw0yMzAzMDgxMjAwMDBaME0xCzAJBgNVBAYTAlVT
MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxJzAlBgNVBAMTHkRpZ2lDZXJ0IFNIQTIg
U2VjdXJlIFNlcnZlciBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
ANyuWJBNwcQwFZA1W248ghX1LFy949v/cUP6ZCWA1O4Yok3wZtAKc24RmDYXZK83
nf36QYSvx6+M/hpzTc8zl5CilodTgyu5pnVILR1WN3vaMTIa16yrBvSqXUu3R0bd
KpPDkC55gIDvEwRqFDu1m5K+wgdlTvza/P96rtxcflUxDOg5B6TXvi/TC2rSsd9f
/ld0Uzs1gN2ujkSYs58O09rg1/RrKatEp0tYhG2SS4HD2nOLEpdIkARFdRrdNzGX
kujNVA075ME/OV4uuPNcfhCOhkEAjUVmR7ChZc6gqikJTvOX6+guqw9ypzAO+sf0
/RR3w6RbKFfCs/mC/bdFWJsCAwEAAaOCAVowggFWMBIGA1UdEwEB/wQIMAYBAf8C
AQAwDgYDVR0PAQH/BAQDAgGGMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYY
aHR0cDovL29jc3AuZGlnaWNlcnQuY29tMHsGA1UdHwR0MHIwN6A1oDOGMWh0dHA6
Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwN6A1
oDOGMWh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RD
QS5jcmwwPQYDVR0gBDYwNDAyBgRVHSAAMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8v
d3d3LmRpZ2ljZXJ0LmNvbS9DUFMwHQYDVR0OBBYEFA+AYRyCMWHVLyjnjUY4tCzh
xtniMB8GA1UdIwQYMBaAFAPeUDVW0Uy7ZvCj4hsbw5eyPdFVMA0GCSqGSIb3DQEB
CwUAA4IBAQAjPt9L0jFCpbZ+QlwaRMxp0Wi0XUvgBCFsS+JtzLHgl4+mUwnNqipl
5TlPHoOlblyYoiQm5vuh7ZPHLgLGTUq/sELfeNqzqPlt/yGFUzZgTHbO7Djc1lGA
8MXW5dRNJ2Srm8c+cftIl7gzbckTB+6WohsYFfZcTEDts8Ls/3HB40f/1LkAtDdC
2iDJ6m6K7hQGrn2iWZiIqBtvLfTyyRRfJs8sjX7tN8Cp1Tm5gr8ZDOo0rwAhaPit
c+LJMto4JQtV05od8GiG7S5BNO98pVAdvzr508EIDObtHopYJeS4d60tbvVS3bR0
j6tJLp07kzQoH3jOlOrHvdPJbRzeXDLz
-----END CERTIFICATE-----

Common Name: DigiCert SHA2 Secure Server CA
Organization: DigiCert Inc
Valid From: Mar  8 12:00:00 2013 GMT
Valid To: Mar  8 12:00:00 2023 GMT
Issuer: DigiCert Global Root CA, DigiCert Inc
Serial Number: 01FDA3EB6ECA75C888438B724BCFBC91



# End-user Certificate

-----BEGIN CERTIFICATE-----
MIIGNDCCBRygAwIBAgIQCyGRH0tQ5EYvK8SFwKOrejANBgkqhkiG9w0BAQsFADBN
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMScwJQYDVQQDEx5E
aWdpQ2VydCBTSEEyIFNlY3VyZSBTZXJ2ZXIgQ0EwHhcNMjAxMDA5MDAwMDAwWhcN
MjExMTEwMDAwMDAwWjBsMQswCQYDVQQGEwJVUzEVMBMGA1UECBMMUGVubnN5bHZh
bmlhMQ4wDAYDVQQHEwVQYW9saTEbMBkGA1UEChMSRHVjayBEdWNrIEdvLCBJbmMu
MRkwFwYDVQQDDBAqLmR1Y2tkdWNrZ28uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEAriX48ii0YZNNQap1XyNvF2xcET9b8xyDC75sws3I1Lsqv70c
gpxba7Uf7QZDdI/Tuc4NUpXQYcigi2jAzhDCxC20RaTLyeWgqVsBlR8SDXjXJuIL
+POmpTjDYfBYv8FKxFGVPnhAwVrNKsNcnPWyROwnE5j3f0iwAiOVkxvWrCGiWq1k
L+lI7/ySgRaxPwo/7sjUfsEMX88GgAmadrbkhZ8XQN2NO9F8NIXQQtTH6sXuqSgT
ibxM9Legs7JXRtR1ZXRTmhsAx+XkwRVH2Tfab3bqe/IJnXo7+Ugi6NtCZjLL3kId
G/N9uNbAW/t5mqQEqqIPZiCddg6Oo/XS2kiPGwIDAQABo4IC7zCCAuswHwYDVR0j
BBgwFoAUD4BhHIIxYdUvKOeNRji0LOHG2eIwHQYDVR0OBBYEFBhWnjl/xGxse6Ql
SyJTbfR2CNg6MCsGA1UdEQQkMCKCECouZHVja2R1Y2tnby5jb22CDmR1Y2tkdWNr
Z28uY29tMA4GA1UdDwEB/wQEAwIFoDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYB
BQUHAwIwawYDVR0fBGQwYjAvoC2gK4YpaHR0cDovL2NybDMuZGlnaWNlcnQuY29t
L3NzY2Etc2hhMi1nNy5jcmwwL6AtoCuGKWh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNv
bS9zc2NhLXNoYTItZzcuY3JsMEwGA1UdIARFMEMwNwYJYIZIAYb9bAEBMCowKAYI
KwYBBQUHAgEWHGh0dHBzOi8vd3d3LmRpZ2ljZXJ0LmNvbS9DUFMwCAYGZ4EMAQIC
MHwGCCsGAQUFBwEBBHAwbjAkBggrBgEFBQcwAYYYaHR0cDovL29jc3AuZGlnaWNl
cnQuY29tMEYGCCsGAQUFBzAChjpodHRwOi8vY2FjZXJ0cy5kaWdpY2VydC5jb20v
RGlnaUNlcnRTSEEyU2VjdXJlU2VydmVyQ0EuY3J0MAwGA1UdEwEB/wQCMAAwggEE
BgorBgEEAdZ5AgQCBIH1BIHyAPAAdgD2XJQv0XcwIhRUGAgwlFaO400TGTO/3wwv
IAvMTvFk4wAAAXUN56bbAAAEAwBHMEUCIDRdbtL7+06qIRvQGLQ7xqdOVMzFD6bu
sK2JLhOnGMXxAiEA9r9JNr6U7qfcScFBJgjHS7+yegk8nYbXZFDgqb2SeK4AdgBc
3EOS/uarRUSxXprUVuYQN/vV+kfcoXOUsl7m9scOygAAAXUN56cqAAAEAwBHMEUC
ICm3BPQf0TuBFz/8cbPumqFNQm78WLh5lA/bQUjQ3hmKAiEAq1ctTcCJhP72zTuP
WYKKWQ4a0JYG1ubqRnouHUIe0qAwDQYJKoZIhvcNAQELBQADggEBAH0n//gW4Awn
/TV2AboAxr5cM2XjLj6qEwCZZCXV279SSAEbaeRlXmIzqfc2Sf0VBjynwkmbr+73
mnQTFflEVzjt1lBl3SACqIreyMPJIP1TxXeHXqoQyI66nIf283P7LpNnVS6s3zU9
tD3PlyGoK6zQcixdQUQaCNXClmL1dbpW8DcNc0nx5GszDF6E3mkAPpM1IKco1z5K
qOFB+YR156emy1ZIXI0qX9Xfw50SVupKccL7nBzBmNa8Mn8u9nqHrdR9ssfzqUW0
13vEMqt9zv3XcEgRZOfr1y+M7CFJwtA6CzJsB4JXyx6GfhbztY/KjfEd4qZyKElS
nDCgRJxDztk=
-----END CERTIFICATE-----

Common Name: *.duckduckgo.com
Organization: Duck Duck Go, Inc.
Valid From: Oct  9 00:00:00 2020 GMT
Valid To: Nov 10 00:00:00 2021 GMT
Issuer: DigiCert SHA2 Secure Server CA, DigiCert Inc
Serial Number: 0B21911F4B50E4462F2BC485C0A3AB7A
```
