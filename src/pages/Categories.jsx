import React from "react";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa6";
import { categDatas } from "/src/data/index.js";
function Categories() {
  return (
    <main className="container my-[25px]">
      <ul className="flex items-center gap-4">
        <li className="text-[15px] text-[#000]">
          <Link to={"/"}>Bosh sahifa</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#8F8F8F]">
          <Link to={"/categories"}>Katalog</Link>
        </li>
      </ul>
      <h1 className="lg:my-[24px_60px] md:my-[16px_40px] my-[8px_32px] text-[64px] font-bold text-[#414141]">
        Katalog
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-[40px] md:gap-[32px] gap-[16px]">
        {categDatas.map((data) => {
          return (
            <Link
              key={data.id}
              to={`/categories/${data.id}`}
              id="categ-card"
              className={`relative h-[200px] rounded-[4px] overflow-hidden ${
                data.id == 1
                  ? "col-span-2"
                  : data.id == 10
                  ? "col-span-2"
                  : data.id == 12
                  ? "lg:col-span-2"
                  : data.id == 13
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <img
                className="absolute object-cover inset-0"
                src={data.img}
                alt=""
              />
              <span className="absolute left-[10px] bottom-[10px] z-[1] text-[18px] text-white font-bold">
                {data.title}
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Categories;
