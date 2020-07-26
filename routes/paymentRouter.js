import express from "express";
import {
  getAuth,
  getToken,
  payment,
  getStatusConfirmation,
} from "../controllers/paymentController.js";
const app = express();


app.get("/payment/auth", getAuth);
app.get("/payment/authstatus", getStatusConfirmation);
app.post("/payment", payment);
app.post("/payment/confirmAuth", getToken);



// app.get('/grade/:id', controller.findOne);
// app.put('/grade/:id', controller.update);
// app.delete('/grade/:id', controller.remove);
// app.delete('/grade/', controller.removeAll);

export { app as paymentRouter };
