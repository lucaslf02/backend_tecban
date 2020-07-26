import { logger } from "../config/logger.js";
import {
  getStatusAuthPayment,
  effectPayment,
  getAuthPayment,
  confirmAuthAPayment,
} from "../API - TecBan/payment.js";

async function getAuth(req, res) {
  try {
    const { value, name, cpf } = req.body;
    if (!value || !name || !cpf) {
      throw new Error(
        "É necessário informa o valor da transação o nome e cpf do favorecido."
      );
    }
    let link = await getAuthPayment(value, name, cpf);
    res.status(200).send({ link: link });
  } catch (error) {
    logger.error(`GET /payment/auth - ${JSON.stringify(error.message)}`);
    res.status(400).send({
      message:
        error.message ||
        "Ocorreu algum erro ao solicitar autenticação de pagamento",
    });
  }
}

async function getToken(req, res) {
  try {
    let code = req.query.code;
    if (!code) {
      throw new Error(
        "É necessário passar o parametro code para confirmar a autenticação"
      );
    }
    let token = await confirmAuthAPayment(code);
    res.status(200).send(token);
  } catch (error) {
    logger.error(
      `POST /payment/confirmAuth - ${JSON.stringify(error.message)}`
    );
    res.status(400).send({
      message:
        error.message || "Ocorreu algum erro ao confirmar a autenticação do pagamento",
    });
  }
}

async function payment(req, res) {
  try {
    let token = req.query.token;
    if (!token) {
      throw new Error("É necessário informar o token para efetivar o pagamento");
    }
    let payment = await effectPayment(token);
    res.status(200).send(payment);
  } catch (error) {
    logger.error(`POST /payment - ${JSON.stringify(error.message)}`);
    res.status(400).send({
      message: error.message || "Ocorreu algum erro ao efetuar o pagamento",
    });
  }
}

async function getStatusConfirmation(_, res) {
  try {
    let status = await getStatusAuthPayment();
    res.status(200).send(status);
  } catch (error) {
    logger.error(`GET /payment/authstatus - ${JSON.stringify(error.message)}`);
    res.status(400).send({
      message: error.message || "Erro ao consultar o status a autenticação de pagamento",
    });
  }
}

export {
  getAuth,
  getToken,
  payment,  
  getStatusConfirmation,
};
