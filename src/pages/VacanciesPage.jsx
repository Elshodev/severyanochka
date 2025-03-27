import React, { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router";
import VacanciesCard from "../components/cards/VacanciesCard";
import { vacancyDatas } from "../data/index.js";
import SectionTitle from "../components/titles/SectionTitle.jsx";
import { CartContext } from "../context/CartProvider.jsx";
export function VacanciesPage() {
  const { name } = useContext(CartContext);
  console.log(name);

  return (
    <main className="container my-[25px]">
      <ul className="flex items-center mb-4 gap-4">
        <li className="text-[15px] text-[#000]">
          <Link to={"/"}>Bosh sahifa</Link>
        </li>
        <FaAngleRight className="text-[15px]" />
        <li className="text-[15px] text-[#8F8F8F]">
          <Link to={"/vacancies"}>Vakansiyalar</Link>
        </li>
      </ul>
      <SectionTitle title={` Bo'sh ish o'rinlari`} />
      <div className="grid mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px] mb-[60px]">
        {vacancyDatas.map((vacancy) => {
          return <VacanciesCard key={vacancy.id} vacancy={vacancy} />;
        })}
      </div>
    </main>
  );
}

export default VacanciesPage;
