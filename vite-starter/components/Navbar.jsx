import React from "react";
import { useSelector } from "react-redux";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

export const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <UilShoppingCartAlt size={60} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
