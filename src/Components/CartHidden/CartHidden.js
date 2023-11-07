import React from "react";
import NavBarr from "../Navbar";

const CartHidden = (props) => {
  const cart = props.cart;
  let delivery = 0;
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (total > 1000) {
    delivery = 0;
  } else if (total == 0) {
    delivery = 0;
  }
  // else if (total > 1 && total < 30) {
  //   delivery = 5;
  // }
  else {
    delivery = 100;
  }
  const grandTotal = total + delivery;
  // debugger;

  return (
    <>
      <div className="container bill-details" style={{ display: "" }}>
        <div className="bills">
          <h2 className="bill-head">PRICE DETAILS</h2>
          <hr className="line" />
          <p className="bill-item bill-font">
            Item Ordered: <span>{cart.length}</span>
          </p>
          <p className="bill-item bill-font">
            Delivery charge:
            <span>&#x20b9;{delivery}</span>
          </p>
          <p className="bill-item bill-font">
            Total:
            <span>&#x20b9;{grandTotal}</span>
          </p>
          <input type="submit" className="bttn cart-btn1" value="PAYMENT" />
          <small className="cart-free">
            *Free Delivery for orders above &#x20b9;1000
          </small>
        </div>
      </div>
    </>
  );
};

export default CartHidden;
