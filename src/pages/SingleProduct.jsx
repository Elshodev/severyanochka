import { FaAngleRight, FaRegSmile } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { categDatas, products } from "../data/index.js";
import SectionHead from "../components/sectionDetails/SectionHead.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../components/cards/ProductCard.jsx";
import { BsCart2 } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";
import { IoMdHeartEmpty, IoIosInformationCircleOutline } from "react-icons/io";
import { GoBellSlash } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider.jsx";
function SingleProduct() {
  const { cartDatas, setCartDatas } = useContext(CartContext);
  const { id, id2 } = useParams();
  let chooseCateg = categDatas.find((categ) => categ.id == id);
  let chooseProduct = products.find((product) => product.id == id2);
  let relatedProducts = products.filter((product) => product.categId == id);
  let isCartItem = cartDatas.find((cartData) => {
    return cartData.id == chooseProduct.id;
  });
  const [isCart, setIsCart] = useState(isCartItem);
  const [quantity, setQuantity] = useState(isCartItem?.quantity || 1);
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
        <li className="text-[15px] text-[#000]">
          <Link to={`/categories/${id}`}>{chooseCateg.title}</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#8F8F8F]">
          <Link to={`/categories/${id}/${id2}`}>{chooseProduct.title}</Link>
        </li>
      </ul>
      <h1 className="lg:my-[24px_16px] md:my-[16px_40px] my-[8px_32px] text-[24px] font-bold text-[#414141]">
        {chooseProduct.title}
      </h1>
      <div className="flex items-center gap-[24px] mb-[16px]">
        <span className="text-[#414141] text-[15px] font-[400]">
          арт. 371431
        </span>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px]">
            {[...Array(5)].map((_, index) => {
              return (
                <FaStar
                  key={index}
                  className={`${
                    chooseProduct.stars <= index
                      ? "text-[#BFBFBF]"
                      : "text-[#FF6633]"
                  }`}
                />
              );
            })}
          </div>
          <a
            href=""
            className="text-[#414141] text-[15px] font-[400] underline"
          >
            3 отзыва
          </a>
        </div>
        <button className="flex items-center gap-[8px] text-[#757371] text-[15px] font-[400]">
          <GrShareOption />
          Поделиться
        </button>
        <button className="flex items-center gap-[8px] text-[#757371] text-[15px] font-[400]">
          <IoMdHeartEmpty />В избраное
        </button>
      </div>
      <section className="flex justify-between gap-[40px] mb-[120px]">
        <img
          src={chooseProduct.img}
          alt={chooseProduct.title}
          className="max-w-[500px] aspect-square object-contain rounded-[10px]"
        />
        <div className="w-[100%] flex flex-col justify-start">
          <div className="flex items-end justify-between gap-[100px] mb-[16px]">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#606060] text-[24px] font-[400]">{`${chooseProduct.mainPrice.toLocaleString()} UZS`}</p>
              <span className="text-[#BFBFBF] text-[12px] font-[400]">
                Narx
              </span>
            </div>
            <div className="flex flex-col gap-[6px]">
              {chooseProduct.isDiscount && (
                <h4 className="text-[#414141] text-[36px] font-[700]">{`${
                  chooseProduct.isDiscount
                    ? (
                        chooseProduct.mainPrice -
                        chooseProduct.mainPrice / chooseProduct.isDiscount
                      ).toLocaleString()
                    : chooseProduct.mainPrice
                } UZS`}</h4>
              )}
              {chooseProduct.isDiscount ? (
                <span className="text-[#BFBFBF] text-[12px] font-[400] flex items-center gap-[8px]">
                  Chegirmadagi narx{" "}
                  <IoIosInformationCircleOutline className="text-[#414141] text-[20px]" />
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          {isCart ? (
            <div
              className={`flex justify-between min-h-[68px] items-center overflow-hidden rounded-[4px] text-base text-[#70C05B] ${
                isCart && "bg-[#FF6633] text-white border-transparent"
              }`}
            >
              <button
                onClick={() => {
                  if (quantity == 1) {
                    setIsCart(false);
                    setCartDatas((prev) => {
                      let filteredDatas = prev.filter(
                        (item) => item.id != chooseProduct.id
                      );
                      return filteredDatas;
                    });
                    return;
                  }
                  setCartDatas((prev) => {
                    let filteredDatas = prev.map((item) => {
                      if (item.id == chooseProduct.id) {
                        return { ...item, quantity: item.quantity - 1 };
                      } else {
                        return item;
                      }
                    });
                    return filteredDatas;
                  });
                  setQuantity(quantity - 1);
                }}
                className="px-4 hover:bg-black text-2xl h-full"
              >
                -
              </button>
              <span className="text-[20px]">{quantity}</span>
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                  setCartDatas((prev) => {
                    let filteredDatas = prev.map((item) => {
                      if (item.id == chooseProduct.id) {
                        return { ...item, quantity: item.quantity + 1 };
                      } else {
                        return item;
                      }
                    });
                    return [...filteredDatas];
                  });
                }}
                className="px-4 hover:bg-black text-2xl h-full"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsCart(true);
                setCartDatas((prev) => {
                  return [...prev, { ...chooseProduct, quantity: 1 }];
                });
              }}
              className="flex items-center justify-center gap-[8px] rounded-[5px] w-full bg-[#FF6633] text-[24px] text-[#fff] font-[400] py-[16px]"
            >
              <BsCart2 />В корзину
            </button>
          )}
          <p className="flex items-center justify-center gap-[8px] text-[#70C05B] text-[15px] font-[400] py-[16px]">
            <FaRegSmile className="text-[20px]" />
            Вы получаете <span className="font-[800]">10 бонусов</span>
          </p>
          <span className="flex items-center justify-center gap-[8px] text-[#606060] text-[15px] font-[400]">
            <GoBellSlash className="text-[20px] text-[#414141]" />
            Уведомить о снижении цены
          </span>
          <div className="flex justify-between items-center mt-[24px]">
            <ul className="w-full">
              <li className="bg-[#F3F2F1] text-[15px] text-[#414141] font-[400]">
                Бренд
              </li>
              <li className="text-[15px] text-[#414141] font-[400]">
                Страна производителя
              </li>
              <li className="bg-[#F3F2F1] text-[15px] text-[#414141] font-[400]">
                Упаковка
              </li>
            </ul>
            <ul className="w-full">
              <li className="bg-[#F3F2F1] text-[#414141] text-[15px] font-[700]">
                ПРОСТОКВАШИНО
              </li>
              <li className="text-[#414141] text-[15px] font-[700]">Россия</li>
              <li className="bg-[#F3F2F1] text-[#414141] text-[15px] font-[700]">
                180 г
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <SectionHead
          title={"O'xshash maxsulotlar"}
          link={"#"}
          linkTitle={"Barcha o'xshash maxsulotlar"}
        />
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {relatedProducts
            .filter((product) => product.id != id2)
            .map((data) => {
              return (
                <SwiperSlide className="!h-auto" key={data.id}>
                  <ProductCard
                    cartDatas={cartDatas}
                    setCartDatas={setCartDatas}
                    data={data}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </main>
  );
}

export default SingleProduct;
