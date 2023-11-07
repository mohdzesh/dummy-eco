import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../Components/data";
import Display from "./Display";
import CartHidden from "./CartHidden/CartHidden";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../utilities/databaseManager";

const DisplayProducts = () => {
  const { keys } = useParams();
  const findProducts = products.filter((find) => find.keys === keys);
  const [findProductDetails, setfindProductsDetails] = useState(findProducts);
  const [cart, setCart] = useState([]);

  console.log(findProductDetails);

  useEffect(() => {
    const getSavedDataFromLS = getDatabaseCart();
    const itemKeys = Object.keys(getSavedDataFromLS);
    const cartProducts = itemKeys.map((key) => {
      const product = products.find((fd) => fd.keys === key);
      // console.log(product)
      product.quantity = getSavedDataFromLS[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handleAddToCart = (productItem) => {
    const productToBeAdded = productItem.keys;
    const sameProduct = cart.find((item) => item.keys === productToBeAdded);
    let count = 1;
    let newCart;

    if (sameProduct) {
      alert("Product Added to cart");
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((item) => item.keys !== productToBeAdded);
      newCart = [...others, sameProduct];
    } else {
      alert("Product Added to cart");
      productItem.quantity = 1;
      newCart = [...cart, productItem];
    }
    setCart(newCart);
    addToDatabaseCart(productItem.keys, count);
  };

  return (
    <>
      {findProductDetails.map((details) => (
        <Display
          key={details.keys}
          handleAddToCart={handleAddToCart}
          findProductDetails={details}
        ></Display>
      ))}
      <div style={{ display: "none" }}>
        <div className="cart-hidden-container float-right">
          <CartHidden cart={cart}></CartHidden>
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
