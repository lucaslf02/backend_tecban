const cert1 = `-----BEGIN CERTIFICATE-----
MIIEvDCCA6SgAwIBAgIUeJo3nWmv+NALbsNa/NKuQC52UMMwDQYJKoZIhvcNAQEL
BQAwgaExCzAJBgNVBAYTAkJSMQ4wDAYDVQQIEwVHb2lhczERMA8GA1UEBxMIQnJh
c2lsaWExEDAOBgNVBAoTB1JhaWRpYW0xGjAYBgNVBAsTEURpcmVjdG9yeSBQT0Mg
UEtJMUEwPwYDVQQDEzhSYWlkaWFtIERpcmVjdG9yeSBQT0MgSW50ZXJtZWRpYXRl
IENlcnRpZmljYXRlIEF1dGhvcml0eTAeFw0yMDA3MjIxNjM0MDBaFw0yMzA3MjIx
NjM0MDBaMIGBMQswCQYDVQQGEwJCUjEUMBIGA1UEChMLT3BlbkJhbmtpbmcxLTAr
BgNVBAsTJGNhN2FiZTZhLWQ0Y2YtNDcyMy1hYjI4LTRkMGNhMTY5YTdmMDEtMCsG
A1UEAxMkODRmZDE0NDEtZjQxMi00NTM3LWI2YjEtMjUyYmY0OThlNDFhMIIBIjAN
BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqpM4g8Ey25Jowkr5XfYZ02KUU5P/
3rxiJQ+ZdlUD/ymQPZYwdPaS87DJr//tRQTXYQetcdoLWRvG5Y5a7MKBdl1Hin32
uNdH4pKfaQ6nVm8qv0N5CzcCD0NO6wZAmenQu/MxfAY3PqrWntgUr4oSg7W8W5lR
oMgDiXmOQPc+fuookZlg+aGXLs5DBlNQNj5TAPCvpxY5sCLWt0mXXVFsi3jIeuip
JuCrty/RPhWt7ccb2ZtVDmWVyV+qfF55O2Ova/zPfBTtf5VTJ+mrD8Eu+TqSI4qb
mIY436jRXs2vGyUxrjt/oGa2U7NFyltMMyqUrKCTm27EknOJnNuKh4uvKQIDAQAB
o4IBCDCCAQQwDgYDVR0PAQH/BAQDAgOoMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggr
BgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBQSHaPD0C26mWYU45rKLD0O
GgT20DAfBgNVHSMEGDAWgBTbfQ6ds2kmVRTLmdiMOVl+2+ad4jBCBggrBgEFBQcB
AQQ2MDQwMgYIKwYBBQUHMAGGJmh0dHA6Ly9vY3NwLnBraS5vcGVuYmFua2luZy5y
YWlkaWFtLmlvMEEGA1UdHwQ6MDgwNqA0oDKGMGh0dHA6Ly9jcmwucGtpLm9wZW5i
YW5raW5nLnJhaWRpYW0uaW8vaXNzdWVyLmNybDANBgkqhkiG9w0BAQsFAAOCAQEA
jm83OuJ7rD9pIqvE13MC06sAS0XAwK6uuMGpXNmqwYehIgpRcj4S8S7K8TIbPHh6
CLFPQByyrBLg/jmqEM5ArA81NBHG4u4YlP9IAf6exZ1zUAyZ53EYTgEriQuQTtld
We5kl+ZE/iUoFd2nFj2GW/tSWd72NVHA4WIo4KKYF0+DcFEH1ct/M8DWSfdw0l1I
HYCzN1qj+QjrVuWasLb4poVPkcGA6vy0hAyGY0ktbodBWBdmrqlofpoIPjO5UbbM
XL/r1C4TIIyLLT+Nm21YJy7SxvB2hn/l0jBOCKI6XZ3UiwrOAfAVUXDfLj3AEisa
RCoYnpv9EfEEvs3W1FWzNg==
-----END CERTIFICATE-----`

const key1 = `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEAqpM4g8Ey25Jowkr5XfYZ02KUU5P/3rxiJQ+ZdlUD/ymQPZYw
dPaS87DJr//tRQTXYQetcdoLWRvG5Y5a7MKBdl1Hin32uNdH4pKfaQ6nVm8qv0N5
CzcCD0NO6wZAmenQu/MxfAY3PqrWntgUr4oSg7W8W5lRoMgDiXmOQPc+fuookZlg
+aGXLs5DBlNQNj5TAPCvpxY5sCLWt0mXXVFsi3jIeuipJuCrty/RPhWt7ccb2ZtV
DmWVyV+qfF55O2Ova/zPfBTtf5VTJ+mrD8Eu+TqSI4qbmIY436jRXs2vGyUxrjt/
oGa2U7NFyltMMyqUrKCTm27EknOJnNuKh4uvKQIDAQABAoIBAFd0+GsFadAOt0u3
KTg18HPjfW2E2pIXQLMD1olHea8gXmZVVS8DJcFwiViF/d9/ZfbH+vP++gaMKWSV
oqT17W8E0KN/hjqrlp3i030IGGBGy0IZlDxdzd6JgjMal5DSw0U6ocqXXUfyS+xR
mfmO74M8cQD+EU5Afx/DhV5l5lMnYWOQBonpV5QIJYc1b12NbDbQJUTNgog/vL0G
3L0zXisONvcTEubSZdJ9aNHHfoXuN/hz4+FfNOOiKFaDEHgQOjkx0zP/aoZSHWmf
2wbL7zrLb8entDtudQDFvdgf642SeJHbt/H/ATN59v8xczkdQh+srsr78NEhEylh
j5c4iqECgYEA3FRQeYnmZWKyrourcbTB2ykIc98Ct+odEhCYpYh6USycZCCb7pq6
KFkSL9bC1Y3bflDmZfmgCsczQQ0n+sDwBklAE3hfI+olR3uVSamxqBDp9LfXnAYT
RMnSHUIZMkREdr+HwZSBbM/lCFq1m00k9r5dZkUrNYl6UQissqXj+pUCgYEAxjDP
WzGgF2lIC6OLhgvhLCiR8dfuo1Pg8pXfVBSPtdOiw8nlhwQeP+vMBn5InmbNS0s1
5iCWYcUvsCUmQkxO6/CfK9dw/NAsExSWiQ5dAgS2QgEmRL2BC2dxgjoCCDuoC/n9
nR7+7/4i2TZaHIO1OzeT3qOxloYKiyFlTw+QUUUCgYEAiqGykQanpRtY+mJ/WWg2
ocNLwjyL5VS1PeybX2xkKjc7n/S0qIlKoKCKxPcIWH6NoQkeLwPGI4H7Se8RPMGx
RQNKAfY3Rs3I7xVfdZ4EXo9l5cjXLSDVdu7V+frhB7PUsDMLJE5gsSqOHZeVtUXx
AB//fJ4A9gqun9Ypc67Vp5ECgYEArc0gClj6i41IIOzK7kJ8tLzfP7adD53/Jr1H
m/RsEogFtKzZHA4AeQ3PXeJgzIhagCz0l1r8hcDmkRIC+yDwFPhunYPREeN8wz7K
xGZUKfD34+oeJSoKgHW2lP1Jyu6F7/rK7X7BErVK2jFP1LGrvMKAaj4i/l2N4XTn
4u1DIgECgYEAqH9dUj5tdGq7HKFOyZBC05ocOrWJ0cSzZwFHJtjPijoEIMkcm2d6
LqXJCKqaS/3vIYuk0LSnCvDxuccb9QfS0gmNZ77Ry4H/Gx1fcVfqicA2NPBL1jNV
I1d6dBcLJeEC+YAjKa8FQdW+N1Gf0Iymxe/zxbFDw/L0BJEs0JEYrAg=
-----END RSA PRIVATE KEY-----
`

const cert2 = `-----BEGIN CERTIFICATE-----
MIIEvDCCA6SgAwIBAgIUB0vMEwMA7DIfqJb/8sH3f/pblbwwDQYJKoZIhvcNAQEL
BQAwgaExCzAJBgNVBAYTAkJSMQ4wDAYDVQQIEwVHb2lhczERMA8GA1UEBxMIQnJh
c2lsaWExEDAOBgNVBAoTB1JhaWRpYW0xGjAYBgNVBAsTEURpcmVjdG9yeSBQT0Mg
UEtJMUEwPwYDVQQDEzhSYWlkaWFtIERpcmVjdG9yeSBQT0MgSW50ZXJtZWRpYXRl
IENlcnRpZmljYXRlIEF1dGhvcml0eTAeFw0yMDA3MjIxNjQ5MDBaFw0yMzA3MjIx
NjQ5MDBaMIGBMQswCQYDVQQGEwJCUjEUMBIGA1UEChMLT3BlbkJhbmtpbmcxLTAr
BgNVBAsTJGU2NzBkM2YyLWEwYTctNDc4OS1hZGVhLTI3MGEwZjAxMTA0YTEtMCsG
A1UEAxMkOGU5OWM1N2EtMDY1ZC00YjlhLTk5NWYtMWM2NmI3NDVhNDE3MIIBIjAN
BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0sSYF2i0+HbN5+cHwGn+7qJKd78L
Y1l2Ye17CWrsbPdxAYnhRAiUhk5B2bJgT33NfWLcp7Wxf7WyGfbgk9OPUktL5oC0
SnSauj2Mb2rnsv+DhZth6yxmoM95GJdV1sHt0mkbkEXwWYSC3yW7dqXz6gFZsWZi
0voHjrqS8T1MgfYN7AAOBz+gLRqwjXLS/jHUuUllWP1JpcuNoHPa8A2GVC/yApng
eUPcxXpj10mYLU4g1JnV9twxYudzfvzMDJi3wAX3HN5EeCOVccAs0OcTWdYssyRW
qb5jd2v67doTo549scDKh8/PVdK/+tyaGUiMMLN6FYNx20D9cs8hJRy0/QIDAQAB
o4IBCDCCAQQwDgYDVR0PAQH/BAQDAgOoMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggr
BgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBQ38GedjIAQwMnODwzB/M3K
gb2f+DAfBgNVHSMEGDAWgBTbfQ6ds2kmVRTLmdiMOVl+2+ad4jBCBggrBgEFBQcB
AQQ2MDQwMgYIKwYBBQUHMAGGJmh0dHA6Ly9vY3NwLnBraS5vcGVuYmFua2luZy5y
YWlkaWFtLmlvMEEGA1UdHwQ6MDgwNqA0oDKGMGh0dHA6Ly9jcmwucGtpLm9wZW5i
YW5raW5nLnJhaWRpYW0uaW8vaXNzdWVyLmNybDANBgkqhkiG9w0BAQsFAAOCAQEA
XqYvV0rjoh3YzHKHoiUcU2nCBnsgrhxG1KzK08ASaQfEzj3Gs0Hp6kzjjvUynmK6
9xW+rar2GdpEETJ+8bk3tZ9yyDTS4wRMQfufNQzGrqsLpYvdJ/GytiFbXG/mgXHs
0asfVgwtmqUe8rylSU60xqPVH6aQXCe9gxVoRugvXGy0viw8LFMEFdDtKYwjZ1p2
6kIMSi8v37jrMirUUkW6aUN/lJiXNq92b1hUVOuwNVSL+Epwm3O3aF1+hwLDBfLB
adLQFFr6aQ/92adasS0XE6ePhty3WvHgusEPd+bL5pRMmH6HPFU9lNflYwKxj9+H
GPuPgLFl0m/W+JTiqkZBRw==
-----END CERTIFICATE-----`

const key2 = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA0sSYF2i0+HbN5+cHwGn+7qJKd78LY1l2Ye17CWrsbPdxAYnh
RAiUhk5B2bJgT33NfWLcp7Wxf7WyGfbgk9OPUktL5oC0SnSauj2Mb2rnsv+DhZth
6yxmoM95GJdV1sHt0mkbkEXwWYSC3yW7dqXz6gFZsWZi0voHjrqS8T1MgfYN7AAO
Bz+gLRqwjXLS/jHUuUllWP1JpcuNoHPa8A2GVC/yApngeUPcxXpj10mYLU4g1JnV
9twxYudzfvzMDJi3wAX3HN5EeCOVccAs0OcTWdYssyRWqb5jd2v67doTo549scDK
h8/PVdK/+tyaGUiMMLN6FYNx20D9cs8hJRy0/QIDAQABAoIBAQC+EqkOQ1Eg2RMr
1X96GJzc2+LIRrOgbueBvMa+YXzBcAyrVIqf7hTzYdOk3WZZiZwtPWC8pfBiuZra
K3ewGJQhpOHYB62Pj8SRvDvPpts445Dahpwxl6Md1rzgXmn8+HrezAcdftUYBZZ4
YvDCOTrUh0852pm4pd726m7lu2ApufcoHkmYP7md6UoxRrB03Xz9/DhGgTDPoreH
oOozuo+0EqABClcbi6f/hyHB0dzCfFvb95RurTKngovrKFJTatzdwlLU2HQha0tx
0oKA1+iaHifp0MbDb9bdRzR+CF4GLL7fEvdNaui6vABfqvPEgrmzC/WgphbOSfxl
TNAAO01JAoGBAOtxmMgMQ8pCaCqiS6NHibb5p4GprwYos840xTSZMXxW9gfBavAX
URBVpbFJJVTUjis8aDYvFZYem8Y2wLU0CC4V+MdihHECwzt0lb0S2TFO0vqAfpbI
IOPhLDt0T2iT/Lu2tOGMg3kKHyvI8a/t1OPyefm9OZZV8nzy38RF/Xh7AoGBAOUr
d/oSrhGLtCj0HY3mQpPy3CxAYxngcSUNpvdnnn2uPoynCFp4VsV+HrDwlupMXZbw
90b1J3YtbcSqNBQF4CQHAkb0/ma4oTC0d1Yg9TIkEjwiaPetv08I4JyrkRQdYmbo
2t4Fc0bOzdKshOkUnS/JAda2VcwmpIowJMXsUZrnAoGAKNRBP2fJFbkgYUxVu5H7
UszGfJjVbkb+r2K9VBrA1yQpdDzZc5tHhoKjwjPCEoztvpeyJrtRjf/u2ZfDIWlN
hdhvlPwDpalp+9SC5w/utDtMIP7JdRJtibcRuZm475TCPjc39OkuH35e23P0XaLr
yT/SYTmsU+LBs2NW5K2SgCMCgYANAhKlVzoaNNvdFz42N8O/siFdQapeZacGe2fm
0zLj32gdg72tpPcH7si/Mmjek8ccMkFW/cNnqdx5NVAPcuXuJZezf2SRYBmGMjgz
41sHpZSDZVCf/nTFf7OAMRzjD2fuf3ks8RJCCqsUMka5FDp34+j+zwq/s9HTJjhw
I6HeMQKBgBfe/iJep6R4nKjFrG59FbegBmnlJzQuj1OKoPXUySKNc1EGP6EzEbxK
bo6E4+mYMgl5zbXM9MTP4WaEPCtrkgB5huFslsR1dgg3kXyTa/LEli4MCtEdpmDB
Rljd90G7auVRgPbcodI8tTsrBGK2GNJ63ytnrdj7UkRrQGNvryXq
-----END RSA PRIVATE KEY-----`

export {key1, cert1, key2, cert2};