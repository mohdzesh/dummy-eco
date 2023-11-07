import React from "react";
import "./CartReviewItem.css";
import "./CartReviewItem.css";

const CartReviewItem = (props) => {
  const { name, quantity, keys, image, price } = props.foodsToReview;
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
          <img src={image} alt="" className="cart-img" />
        </div>
        <div className="col-md-8 cart-pro">
          <h5>{name}</h5>
          <h5>Quantity : {quantity}</h5>
          <h5>Price : {price}</h5>
          <a onClick={() => props.removeItem(keys)} href="#/">
            <input type="button" value="REMOVE" className="remove-btn" />
          </a>
        </div>
      </div>
      <hr className="cart-line" />
    </div>
  );
};
{
  /* <Button size="sm" onClick={() => props.removeItem(keys)} variant="danger">Remove Item</Button> */
}

export default CartReviewItem;
