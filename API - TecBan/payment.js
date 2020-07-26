import request from "request-promise";
import { getAuth, getLinkAuthAccount, getTokenAccess } from "./auth.js";
import uuid from "uuid";
const uuidv4 = uuid.v4;
const key = global.key;
const cert = global.cert;

global.tokenConsent_save;
global.consentId_save;
global.payment;

async function paymentConsents(
  accessToken,
  key,
  cert,
  value,
  nomeBeneficiario,
  cpfBeneficiario
) {
  const interactionId = uuidv4();
  let res = await request.post({
    uri:
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/pisp/domestic-payment-consents",
    key: key,
    cert: cert,
    headers: {
      "Content-Type": "application/json",
      "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
      "x-fapi-customer-ip-address": "10.1.1.10",
      "x-fapi-interaction-id": interactionId,
      Authorization: "Bearer " + accessToken,
    },
    rejectUnauthorized: false,
    body: JSON.stringify({
      Data: {
        Initiation: {
          InstructionIdentification: "PMT.01234567890123456789.0124",
          EndToEndIdentification: "TRX.01234567890.0124",
          InstructedAmount: { Amount: value, Currency: "BRL" },
          CreditorAccount: {
            SchemeName: "BR.CPF",
            Identification: cpfBeneficiario,
            Name: nomeBeneficiario,
          },
        },
      },
      Risk: {},
    }),
  });  
  return await JSON.parse(res);
}

async function getStatusAuthPayment() {
  const interactionId = uuidv4();
  console.log(global.consentId_save);
  console.log(global.tokenConsent_save);
  try {
    let res = await request.get({
      url:
        "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/pisp/domestic-payment-consents/" +
        global.consentId_save,
      key: key,
      cert: cert,
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-customer-ip-address": "10.1.1.10",
        "x-fapi-interaction-id": interactionId,
        Authorization: "Bearer " + global.tokenConsent_save,
      },
    });
    return await JSON.parse(res);
  } catch (err) {
    throw err;
  }
}

async function effectPayment(token) {
  const interactionId = uuidv4();
  try {
    let res = await request.post({
      url:
        "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/pisp/domestic-payments",
      key: key,
      cert: cert,
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-customer-ip-address": "10.1.1.10",
        "x-fapi-interaction-id": interactionId,
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        Data: {
          ConsentId: global.consentId_save,
          Initiation: {
            InstructionIdentification: "PMT.01234567890123456789.0124",
            EndToEndIdentification: "TRX.01234567890.0124",
            InstructedAmount: { Amount: global.payment.value, Currency: "BRL" },
            CreditorAccount: {
              SchemeName: "BR.CPF",
              Identification: global.payment.cpfBeneficiario,
              Name: global.payment.nomeBeneficiario,
            },
          },
        },
        Risk: {},
      }),
    });
    return await JSON.parse(res);
  } catch (err) {
    throw err;
  }
}

async function getAuthPayment(value, nomeBeneficiario, cpfBeneficiario) {
  let scope = "payments";
  global.payment = {
    value,
    nomeBeneficiario,
    cpfBeneficiario,
  };
  try {
    let { access_token } = await getAuth(scope);
    let { Data } = await paymentConsents(
      access_token,
      key,
      cert,
      value,
      nomeBeneficiario,
      cpfBeneficiario
    );
    let { ConsentId } = Data;
    global.consentId_save = ConsentId;
    global.tokenConsent_save = access_token;
    let link = await getLinkAuthAccount(ConsentId, key, cert, scope);
    return link;
  } catch (err) {
    throw err;
  }
}

async function confirmAuthAPayment(code) {
  let scope = "payments";
  try {
    let res = await getTokenAccess(key, cert, code, scope);
    return res;
  } catch (err) {
    throw err;
  }
}


export {
    getStatusAuthPayment,
    effectPayment,
    getAuthPayment,
    confirmAuthAPayment
}
