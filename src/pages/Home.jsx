import React, { useState } from "react";
import SectionHead from "../components/sectionDetails/SectionHead.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../components/cards/ProductCard.jsx";
import { products, articleDatas, mapDatas } from "../data/index.js";
import Mapbtn from "../components/buttons/Mapbtn.jsx";
import ArticleCard from "../components/cards/ArticleCard.jsx";
import SectionTitle from "../components/titles/SectionTitle.jsx";
import HeaderBottom from "../components/header/HeaderBottom.jsx";

function Home() {
  const [activeMap, setActiveMap] = useState(1);
  let currentMapLink = mapDatas.find((data) => data.id == activeMap);

  return (
    <>
      <HeaderBottom />
      <main className="container my-[80px] flex flex-col gap-[120px]">
        <section>
          <SectionHead
            title={"Aksiya"}
            link={"#"}
            linkTitle={"Barcha aksiyalar"}
          />
          <Swiper
            spaceBetween={16}
            slidesPerView={2}
            loop
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
            {products
              .filter((product) => product.isDiscount)
              .map((data) => {
                return (
                  <SwiperSlide className="!h-auto" key={data.id}>
                    <ProductCard data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </section>
        <section>
          <SectionHead
            title={"Yangi maxsulotlar"}
            link={"#"}
            linkTitle={"Barcha yangi maxsulotlar"}
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
            {products
              .filter((product) => {
                return !product.isDiscount;
              })
              .map((data) => {
                return (
                  <SwiperSlide className="!h-auto" key={data.id}>
                    <ProductCard data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </section>
        <section>
          <SectionTitle title={"Bizning do'konlar"} />
          <div className="flex gap-[20px] flex-wrap my-[40px_24px]">
            {mapDatas.map((data) => {
              return (
                <Mapbtn
                  setActiveMap={setActiveMap}
                  key={data.id}
                  data={data}
                  activeMap={activeMap}
                />
              );
            })}
          </div>
          <div className="aspect-[3/1] rounded-[8px] overflow-hidden">
            <iframe
              src={currentMapLink.map}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section className="my-[80px]">
          <SectionHead
            title={"Maqolalar"}
            link={"#"}
            linkTitle={"Barcha maqolalar"}
          />

          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
          >
            {articleDatas.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <ArticleCard data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </main>
    </>
  );
}

export default Home;
