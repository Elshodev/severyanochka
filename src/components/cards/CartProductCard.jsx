import React from "react";
import { FaCheck } from "react-icons/fa6";

function CartProductCard({ data, setCartDatas, isSelected, setSelectedItems }) {
  return (
    <div className="bg-[#ffff] flex rounded-[4px] gap-[8px] p-[8px]">
      <div className="w-[80px] h-[60px] relative">
        <img className="" src={data.img} alt="" />
        <button
          onClick={() => {
            if (isSelected) {
              setSelectedItems((prev) => {
                return prev.filter((item) => item != data.id);
              });
            } else {
              setSelectedItems((prev) => {
                return [...prev, data.id];
              });
            }
          }}
          className="absolute top-0 left-[10px] translate-y-[-50%] w-[24px] p-[5px] h-[24px] bg-[#70C05B] text-[#FFFFFF] rounded-[4px]"
        >
          {isSelected && <FaCheck />}
        </button>
      </div>
      <div className="gap-[16px] w-full">
        <p className="w-full">{data.title}</p>
        <div>
          <span className=" text-[#414141] font-bold text-[12px]">
            {data.mainPrice.toLocaleString()} SUM
          </span>
          <span className="text-[#606060]"> за шт.</span>
          {data.isDiscount && (
            <span className="bg-[#FF6633] ml-2 rounded-[4px] text-white p-[4px_8px]">
              -{data.isDiscount}%
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-[24px]">
        <div className="bg-[#70C05B] overflow-hidden flex items-center justify-between gap-[8px] min-w-[100px] h-[40px]  rounded-[4px] text-[#FFFFFF]">
          <button
            onClick={() => {
              if (data.quantity === 1) {
                setCartDatas((prev) =>
                  prev.filter((item) => item.id !== data.id)
                );
                return;
              }
              setCartDatas((prev) =>
                prev.map((item) =>
                  item.id === data.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
              );
            }}
            className="px-2 h-full hover:bg-black"
          >
            -
          </button>
          <span>{data.quantity}</span>
          <button
            className="px-2 h-full hover:bg-black"
            onClick={() => {
              setCartDatas((prev) =>
                prev.map((item) =>
                  item.id === data.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              );
            }}
          >
            +
          </button>
        </div>
        <span className=" text-[#414141] font-bold min-w-[120px] text-end py-2 whitespace-nowrap text-[18px] leading-2">
          {(data.mainPrice * data.quantity).toLocaleString()} SUM
        </span>
      </div>
    </div>
  );
}

export default CartProductCard;
