import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import star from "../Images/star.png";

const Display = (props) => {
  const { keys, name, image, price, image2, rating } = props.findProductDetails;

  return (
    <section className="dis">
      <div className="display-pro">
        <Carousel className="cr">
          <Carousel.Item>
            <img
              className="d-block w-100 dis-img"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 dis-img"
              src={image2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="dis-details">
          <h4 className="dis-name">{name}</h4>
          <div className="dis-rating">
            <img src={star} className="dis-star" /> <span>{rating}/5</span>
          </div>
          <hr />
          <h4 className="dis-price">&#x20b9;{price}</h4>
          <br />

          <p className="label" id="label">
            {props.label}
          </p>

          <input
            type="submit"
            value="ADD TO CART"
            className="dis-btn cart-btn"
            onClick={() => props.handleAddToCart(props.findProductDetails)}
          />
          <input type="submit" value="BUY NOW" className="dis-btn buy-btn" />

          <Link to="/products" className="back-btn">
            Back To Products
          </Link>
        </div>
      </div>
    </section>
  );
};

// const click = () => {
//   const q = document.querySelector(".dis-quantity").value;
//   const label = document.getElementById("label");

//   if (q > 20) {
//     label.textContent = "⚠️You can't add more than 20 items";
//     return false;
//   } else if (q == "" || q == null || q == 0 || q < 0) {
//     label.textContent = "⚠️Please select quantity";
//     return false;
//   } else {
//     label.textContent = "";
//     return true;
//   }
// };

export default Display;
