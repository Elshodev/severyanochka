import React from "react";
import {  NavLink } from "react-router";
import { products } from "../../../data/index.js";

function CategLink({ item }) {
  const countOfItems = products.filter((product) => product.categId == item.id).length;
  
  return (
    <li className="w-max text-[#414141] text-[16px] font-bold leading-[1.5] hover:text-[#FF6633]">
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#FF6633]" : "")}
        to={`/categories/${item.id}`}
      >
        {item.title} ({countOfItems})
      </NavLink>
    </li>
  );
}

export default CategLink;
