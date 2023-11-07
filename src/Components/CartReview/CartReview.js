import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import products from "../data";
import CartReviewItem from "../CartReviewItem/CartReviewItem";
import CartHidden from "../CartHidden/CartHidden";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  const removeItem = (productKey) => {
    console.log("removed", productKey);
    const newRemoveCart = cart.filter((pd) => pd.keys !== productKey);
    setCart(newRemoveCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    //useEffect here to load data from local storage
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
  return (
    <div className="cart">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7">
            {
              <div>
                <div className="">
                  {cart.map((pd) => (
                    <CartReviewItem
                      removeItem={removeItem}
                      foodsToReview={pd}
                    ></CartReviewItem>
                  ))}
                </div>
              </div>
            }
          </div>
          <div className="col-md-4">
            <CartHidden cart={cart}></CartHidden>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartReview;
