import React from "react";
import { IoCallOutline } from "react-icons/io5";

function VacanciesCard({ vacancy }) {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] rounded-[4px] p-[24px]">
      <h3 className="text-[#414141] font-bold text-[18px]">{vacancy.title}</h3>
      <div className="flex flex-col  gap-[8px]">
        <h4 className="text-[#414141] font-normal text-[16px]">Talablar</h4>
        <p className="text-[#414141] text-[12px] font-normal leading-5 ">
          {vacancy.requirements}
        </p>
      </div>
      <div className="flex flex-col  gap-[8px]">
        <h4 className="text-[#414141] font-normal text-[16px]">Mas'uliyat</h4>
        <p className="text-[#414141] text-[12px] font-normal leading-5">
          {vacancy.responsibilities}
        </p>
      </div>
      <div className="flex flex-col  gap-[8px]">
        <h4 className="text-[#414141] font-normal text-[16px]">
          Foydalanish shartlari
        </h4>
        <p className="text-[#414141] text-[12px] font-normal leading-5">
          {vacancy.conditions}
        </p>
      </div>
      <div className="flex flex-col  gap-[8px]">
        <h4 className="text-[#414141] font-normal text-[16px]">
          Aloqaga chiqing
        </h4>
        <div className="flex items-center gap-[12px]">
          <IoCallOutline className="text-[24px]" />
          <span className="font-normal text-[12px] text-[#414141]">
            {vacancy.contact}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VacanciesCard;
