import productsImg from "../../assets/imgs/productsImg.png";

function HeaderBottom() {
  return (
    <div className="bg-white header-bottom bg-cover">
      <div className="container flex items-center gap-[18px] px-[60px]">
        <img
          className="max-w-[300px] drop-shadow-[5px_11px_16px_#00000033]"
          src={productsImg}
        />
        <h1 className="text-[48px] text-[#414141] font-bold">
          Доставка бесплатно от 1000 ₽
        </h1>
      </div>
    </div>
  );
}

export default HeaderBottom;
