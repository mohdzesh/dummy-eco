import React from "react";
import { Form, Button } from "react-bootstrap";

const CartRegister = () => {
  return (
    <div className="col-md-4">
      <Form>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="107 Road No,Dhaka" />
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="088" />
          <Form.Label>Delivery Details</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button className="btn btn-danger" size="lg" block>
          Save & Continue
        </Button>
      </Form>
    </div>
  );
};

export default CartRegister;
