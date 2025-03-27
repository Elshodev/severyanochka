import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartProvider.jsx";

function HeaderLink({ data }) {
  const { cartDatas } = useContext(CartContext);
  return (
    <Link
      to={"/cart"}
      className="flex relative flex-col items-center gap-2 text-[12px] text-black"
      href={data.to}
    >
      {data.id == 3 && cartDatas.length != 0 && (
        <span
          className={`absolute top-[-6px] right-[1px] bg-[#FF6633] rounded-[4px] text-white flex items-center justify-center leading-[1] w-[18px] h-[18px] text-[10px]`}
        >
          {cartDatas.length}
        </span>
      )}
      <data.Icon className="text-xl" />
      {data.text}
    </Link>
  );
}

export default HeaderLink;
