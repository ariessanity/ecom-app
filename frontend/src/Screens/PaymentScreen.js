import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../store/actions/cartActions";
import CheckoutSteps from "../Components/CheckoutSteps";

function PaymentScreen() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReducer);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const submitHander = (e) => {
    e.preventDefault();
    navigate('/placeorder');
    dispatch(savePaymentMethod(paymentMethod));
    navigate(0);
    
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHander}>
        <Form.Group className="mb-4">
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="Paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
