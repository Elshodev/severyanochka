import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import CartProductCard from "../components/cards/CartProductCard.jsx";
import SectionTitle from "../components/titles/SectionTitle.jsx";
import { CartContext } from "../context/CartProvider.jsx";
function areArraysEqual(arr1, arr2) {
  // arr1 ichidagi barcha id larni olish
  const ids1 = arr1.map((obj) => obj.id).sort((a, b) => a - b);
  const ids2 = arr2.slice().sort((a, b) => a - b);

  // Uzunlikni solishtirish
  if (ids1.length !== ids2.length) return false;

  // Har bir id ni tekshirish
  return ids1.every((id, index) => id === ids2[index]);
}
function BasketPage() {
  const { cartDatas, setCartDatas } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  let totalSum = cartDatas.reduce((acc, curr) => {
    return acc + curr.mainPrice * curr.quantity;
  }, 0);
  let discountPrice = cartDatas.reduce((acc, curr) => {
    if (curr.isDiscount) {
      return acc + Number((curr.mainPrice / curr.isDiscount).toFixed());
    } else {
      return acc;
    }
  }, 0);
  function checkAllFunc() {
    let allSelect = [];
    cartDatas.forEach((data) => {
      allSelect.push(data.id);
    });
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allSelect);
    }
  }
  function removeAllFunc() {
    setCartDatas((prev) => {
      return prev.filter((item) => {
        return !selectedItems.includes(item.id);
      });
    });
  }
  let isAllSelected = areArraysEqual(cartDatas, selectedItems);

  return (
    <main className="container">
      <ul className="flex items-center gap-4 my-[27px]">
        <li className="text-[15px] text-[#000]">
          <Link to={"/"}>Bosh sahifa</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#8F8F8F]">
          <Link to={"/cart"}>Savat</Link>
        </li>
      </ul>
      <SectionTitle title={`Savat`} />
      {cartDatas.length != 0 ? (
        <section className="mt-4">
          <div className="flex items-center gap-[40px] mb-[24px]">
            <div className="flex items-center gap-[8px] ">
              <div className="w-[20px] h-[25px] bg-[#70C05B] text-[#FFFFFF] p-[2px] cursor-pointer rounded-[4px]">
                {isAllSelected && <FaMinus />}
              </div>
              <button
                onClick={checkAllFunc}
                className="font-normal text-[12px] text-[#606060]"
              >
                Выделить всё
              </button>
            </div>
            <button
              onClick={removeAllFunc}
              className="text-[#FF6633] font-normal text-[12px]"
            >
              Удалить выбранные
            </button>
          </div>
          <div className="grid grid-cols-[1fr_300px] gap-[60px]">
            <div className="flex flex-col gap-[24px]">
              {cartDatas.map((data) => {
                return (
                  <CartProductCard
                    isSelected={selectedItems.some((item) => item == data.id)}
                    setSelectedItems={setSelectedItems}
                    key={data.id}
                    setCartDatas={setCartDatas}
                    data={data}
                  />
                );
              })}
            </div>
            <div className="flex flex-col items-start">
              <div className=" flex flex-col gap-[20px] ">
                <div className="flex items-center gap-[10px]">
                  <FaToggleOn className="text-[24px] text-[#70C05B] " />
                  <span className="text-[#414141] font-bold text-[16px]">
                    Списать 200 ₽{" "}
                  </span>
                </div>
                <span className="text-[#8F8F8F]">
                  На карте накоплено 200 ₽{" "}
                </span>
              </div>
              <div className="h-px mt-[20px] w-[100%] bg-[#F3F2F1] "></div>
              <div className="my-[24px] flex flex-col w-full gap-[10px]">
                <div className="flex items-center justify-between gap-[10px]">
                  <span className="text-[#8F8F8F] text-[16px] font-normal">
                    3 товара
                  </span>
                  <span className="text-[#414141] font-normal text-[16px]">
                    {totalSum.toLocaleString()} SUM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-normal text-[#8F8F8F] text-[16px]">
                    Скидка
                  </span>
                  <span className="font-bold text-[#FF6633] text-[16px] ">
                    -{discountPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="h-px w-[100%] bg-[#F3F2F1]  "></div>
              <div className="mb-[24px] w-full">
                <div className="flex items-center justify-between">
                  <span className="font-normal text-[#8F8F8F] text-[16px]">
                    Итог
                  </span>
                  <span className="font-bold text-[#414141] text-[24px]">
                    {(totalSum - discountPrice).toLocaleString()} SUM
                  </span>
                </div>
                <div className="flex items-center gap-[8px] justify-center">
                  <FaSmile className="text-[#33a318]" />
                  <span className="text-[#70C05B]">
                    Вы получяете{" "}
                    <span className="text-[#33a318]">100 бонусов</span>
                  </span>
                </div>
                <button className="text-[#FFFFFF] my-[40px] text-[24px] font-normal bg-[#FF6633] p-[18px_16px] rounded-[4px] w-[100%]">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Empty</h1>
      )}
    </main>
  );
}

export default BasketPage;
