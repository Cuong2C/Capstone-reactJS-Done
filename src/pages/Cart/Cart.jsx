import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.cartData);
  const totalCounting = (price, quantity) => {
    return price * quantity;
  };
  return (
    <div className="container-fluid cart">
      <table className="table">
        <tr>
          <th scope="col">Img</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>

        {cartData?.length === 0
          ? "Chưa có gì trong giỏ hàng"
          : cartData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{totalCounting(item.price, item.quantity)}</td>
                </tr>
              );
            })}
      </table>
    </div>
  );
};

export default Cart;