import { useContext, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { CartContext } from "../../context/CartProvider.jsx";

function ProductCard({ data }) {
  const { cartDatas, setCartDatas } = useContext(CartContext);
  let isProductHasCart = cartDatas?.find((cartData) => cartData.id === data.id);

  const [isCart, setIsCart] = useState(isProductHasCart);
  const [quantity, setQuantity] = useState(isProductHasCart?.quantity || 1);

  return (
    <div className="bg-white flex flex-col h-full shadow-[1px_2px_4px_0_#0000001A] rounded-[4px]">
      <div className="w-full h-[190px] relative">
        <button className="absolute right-[8px] top-[8px] opacity-[50%] hover:opacity-[100%] bg-[#F3F2F1] transition-opacity duration-200 rounded-[4px] w-[32px] h-[32px] flex items-center justify-center">
          <FaRegHeart className="text-[#414141]" />
        </button>
        {data.isDiscount && (
          <span className="absolute p-[4px_8px] rounded-[4px] text-white text-[16px] bg-[#FF6633] bottom-[10px] left-[10px]">
            -{data.isDiscount}%
          </span>
        )}
        <img className="object-contain" src={data.img} alt={data.title} />
      </div>
      <div className="flex flex-col justify-between h-full gap-2 p-2">
        {data.isDiscount ? (
          <div className="flex justify-between">
            <div>
              <h5 className="text-[18px] leading-[1.2] font-bold text-[#414141]">
                {(
                  data.mainPrice -
                  data.mainPrice / data.isDiscount
                ).toLocaleString()}{" "}
                uzs
              </h5>
              <span className="text-[12px] leading-[1.2] text-[#BFBFBF]">
                Chegirmada
              </span>
            </div>
            <div className="text-end">
              <h6 className="leading-[1.2] line-through text-base text-[#606060]">
                {data.mainPrice.toLocaleString()} uzs
              </h6>
              <span className="text-[12px] leading-[1.2] text-[#BFBFBF]">
                Odatiy
              </span>
            </div>
          </div>
        ) : (
          <h5 className="text-[18px] leading-[1.2] font-bold text-[#414141]">
            {data.mainPrice.toLocaleString()} uzs
          </h5>
        )}
        <Link
          title={data.title}
          to={`/categories/${data.categId}/${data.id}`}
          className="text-base text-hidden-2 text-[#414141] hover:underline leading-[1.5]"
        >
          {data.title}
        </Link>
        <div className="flex gap-1 mt-auto text-[#BFBFBF]">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={data.stars <= index ? "" : "text-[#FF6633]"}
            />
          ))}
        </div>
        {isCart ? (
          <div
            className={`flex justify-between min-h-[40px] items-center overflow-hidden rounded-[4px] text-base text-[#70C05B] ${
              isCart ? "bg-[#FF6633] text-white border-transparent" : ""
            }`}
          >
            <button
              onClick={() => {
                if (quantity === 1) {
                  setIsCart(false);
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
                setQuantity(quantity - 1);
              }}
              className="px-4 hover:bg-black text-xl h-full"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                setCartDatas((prev) =>
                  prev.map((item) =>
                    item.id === data.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                );
              }}
              className="px-4 hover:bg-black text-xl h-full"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsCart(true);
              setCartDatas((prev) => [...prev, { ...data, quantity: 1 }]);
            }}
            className="px-2 border min-h-[40px] hover:bg-[#FF6633] hover:text-white hover:border-transparent border-[#70C05B] rounded-[4px] text-base text-[#70C05B]"
          >
            Savatga qo'shish
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
