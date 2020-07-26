import request from "request-promise";
import {key1, cert1} from './certs.js';

global.key = key1;
global.cert = cert1;

async function getAuth(scope) {
  //parametros aceitos:  "accounts" / "payments"

  let res = await request.post({
    uri: "https://as1.tecban-sandbox.o3bank.co.uk/token",
    key: global.key,
    cert: global.cert,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
    form: {
      grant_type: "client_credentials",
      scope: scope+ " openid",
    },
    rejectUnauthorized: false,
  });
  return await JSON.parse(res);
}

async function getLinkAuthAccount(consentId, key, cert, scope) {
  let res = await request.get({
    key: key,
    cert: cert,
    url: `https://rs1.tecban-sandbox.o3bank.co.uk/ozone/v1.0/auth-code-url/${consentId}?scope=${scope}&alg=none`,
    rejectUnauthorized: false,
    headers: {
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
  });

  return res;
}

async function getTokenAccess(key, cert, code, scope) {  
  let res = await request.post({
    url: "https://as1.tecban-sandbox.o3bank.co.uk/token",
    key: key,
    cert: cert,
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
    form: {
      grant_type: "authorization_code",
      scope: scope,
      code: code,
      redirect_uri: 'http://www.google.co.uk'
    },
  });

  return await JSON.parse(res);
}

export { getAuth, getLinkAuthAccount, getTokenAccess};
