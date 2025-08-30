import { useState } from "react";
import { createPayment } from "../services/paymentService";

const PaymentPage = () => {
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    try {
      const paymentData = {
        userId: 1,
        subscriptionId: 101,
        planId: 5,
        planName: "Premium Plan",
        amount: 499,
        paymentMethod: "RAZORPAY",
      };

      const result = await createPayment(paymentData);
      setMessage(`Payment Created! ID: ${result.id || result.paymentId}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Subscription Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
      <p>{message}</p>
    </div>
  );
};

export default PaymentPage;
