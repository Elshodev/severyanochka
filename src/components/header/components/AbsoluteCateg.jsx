import React from "react";
import { categDatas } from "/src/data/index.js";
import CategLink from "./CategLink.jsx";

function AbsoluteCateg() {
  return (
    <div
      id="absolute-categ"
      className="absolute transition-all duration-300 pointer-events-none opacity-0 left-0 py-[40px] right-0 top-full shadow-[0_8px_16px_0_#00000026] bg-white z-[1]"
    >
      <ul className="container grid lg:grid-cols-4 md:grid-cols-3 gap-[24px_40px]">
        {categDatas.map((item) => (
          <CategLink item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default AbsoluteCateg;
