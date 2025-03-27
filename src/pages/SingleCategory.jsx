import { Link, useParams } from "react-router";
import { categDatas } from "/src/data/index.js";
import { FaAngleRight } from "react-icons/fa";
import { products } from "./../data/index";
import ProductCard from "../components/cards/ProductCard.jsx";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
function SingleCategory() {
  const { id } = useParams();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [datas, setDatas] = useState(
    products.filter((product) => product.categId == id)
  );

  const [page, setPage] = useState(1);
  let singleProduct = categDatas.find((data) => data.id == id);
  function handleChange(_, value) {
    setPage(value);
  }
  return (
    <main className="container my-[25px]">
      <ul className="flex items-center gap-4">
        <li className="text-[15px] text-[#000]">
          <Link to={"/"}>Bosh sahifa</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#000]">
          <Link to={"/categories"}>Katalog</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#8F8F8F]">
          <Link to={`/categories/${id}`}>{singleProduct.title}</Link>
        </li>
      </ul>
      <h1 className="lg:my-[24px_60px] md:my-[16px_40px] my-[8px_32px] text-[64px] font-bold text-[#414141]">
        {singleProduct.title}
      </h1>
      <div className="grid grid-cols-[272px_1fr] gap-[40px]">
        <div className="h-max sticky top-[10px]">
          <h3 className="rounded-sm bg-[#F3F2F1] text-[16px] font-bold p-[10px]">
            Filtr
          </h3>
          <div className="flex gap-2 mt-4">
            <input
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
              value={minPrice}
              className="bg-white w-full p-[8px_16px] rounded-sm border border-[#BFBFBF]"
              type="number"
              placeholder="min"
            />
            <input
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              value={maxPrice}
              className="bg-white w-full p-[8px_16px] rounded-sm border border-[#BFBFBF]"
              type="number"
              placeholder="max"
            />
          </div>
          <button
            className="p-2 bg-[#FF6633] text-white w-full mt-4"
            onClick={() => {
              setPage(1);
              let filteredProducts = products.filter((product) => {
                return (
                  product.categId == id &&
                  product.mainPrice >= minPrice &&
                  product.mainPrice <= maxPrice
                );
              });
              setDatas(filteredProducts);
            }}
          >
            Применить
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[40px]">
          {datas
            .sort((a, b) => {
              return a.mainPrice - b.mainPrice;
            })
            .slice((page - 1) * 6, 6 * page)
            .map((product) => {
              return <ProductCard key={product.id} data={product} />;
            })}
        </div>
      </div>
      {Math.ceil(datas.length / 6) > 1 ? (
        <div className="flex justify-center my-4">
          <Pagination
            count={Math.ceil(datas.length / 6)}
            page={page}
            onChange={handleChange}
          />
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default SingleCategory;
