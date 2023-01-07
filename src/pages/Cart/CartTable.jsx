import React from "react";

const CartTable = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <img
          style={{ width: "90px", height: "50px", objectFit: "cover" }}
          src={item.image}
          alt="product"
        />
      </td>
      <td>
        {item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name}
      </td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
    </tr>
  );
};

export default CartTable;
