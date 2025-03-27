import logo from "../../assets/imgs/logoHeader.png";
import logoMobile from "../../assets/imgs/logo.png";
import { HiMenu, HiOutlineHeart, HiOutlineSearch } from "react-icons/hi";
import { BsBoxSeam, BsCart2 } from "react-icons/bs";
import HeaderLink from "./components/HeaderLink.jsx";
import AbsoluteCateg from "./components/AbsoluteCateg.jsx";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router";
function Header() {
  const linksDatas = [
    { id: 1, Icon: HiOutlineHeart, text: "Избранное", to: "favourite.html" },
    { id: 2, Icon: BsBoxSeam, text: "Заказы", to: "order.html" },
    { id: 3, Icon: BsCart2, text: "Корзина", to: "/cart" },
  ];
  return (
    <header className="py-4 bg-white relative ">
      <div className="absolute inset-0 shadow-[2px_4px_8px_0_#0000001A] z-[2]"></div>
      <div className="container flex items-center z-[2] relative lg:gap-[40px] md:gap-[30px] gap-[20px]">
        <Link to={"/"} className="max-w-[150px] shrink-0 flex">
          <img className="md:flex hidden" src={logo} alt="Severyanochka logo" />
          <img
            className="md:hidden "
            src={logoMobile}
            alt="Severyanochka logo"
          />
        </Link>
        <div className="flex items-center gap-4 grow">
          <Link
            id="categ-btn"
            className="sm:flex hidden relative after:content-[''] after:absolute after:w-full after:left-0 after:bg-transparent after:h-full after:top-full items-center gap-2 p-2 rounded-[4px] bg-[#70C05B] text-white text-[26px]"
            to={"/categories"}
          >
            <HiMenu />
            <span className="text-base px-2 lg:flex hidden">Каталог</span>
          </Link>
          <form className="flex items-center border border-[#70c05b]  rounded-[4px] overflow-hidden grow">
            <input
              className="sm:p-[8px_16px] p-[8px_12px] sm:text-base text-[14px] w-full text-[#333]"
              placeholder="Найти товар"
              type="text"
            />
            <button className="text-lg pr-[6px] flex text-[#414141]">
              <HiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="sm:flex hidden items-center lg:gap-[24px] md:gap-[18px] gap-[14px]">
          {linksDatas.map((linkData) => {
            return <HeaderLink key={linkData.id} data={linkData} />;
          })}
          <button className="flex items-center gap-[10px] bg-[#FF6633] lg:p-[8px_22px] p-3 text-[16px] text-white rounded-[4px]">
            <span className="lg:flex hidden">Войти</span>
            <CiLogin className="lg:text-[24px] text-[22px]" />
          </button>
        </div>
      </div>
      <AbsoluteCateg />
    </header>
  );
}
export default Header;
