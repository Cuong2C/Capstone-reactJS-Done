import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable";
import {
  addToCart,
  checkAll,
  checkItem,
  deleteCartItem,
  sendOrderApi,
} from "../../redux/reducers/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.cartData);
  const totalCounting = (price, quantity) => {
    return price * quantity;
  };
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__container">
          <div className="profile__content">
            {cartData?.map((item, index) => {
              return (
                <div className="profile__tabs-info" key={index}>
                  <div>
                    <h6>
                      + Orders have been placed <span>{item.date}</span>
                    </h6>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th style={{ width: "20%" }}>Image</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <CartTable item={item} />
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
