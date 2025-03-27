function ArticleCard({ data }) {
  return (
    <div className="overflow-hidden flex flex-col rounded-[5px] shadow-[1px 2px 4px 0px rgba(0, 0, 0, 0.1)] bg-[#fff] mb-[10px]">
      <div className="h-[160px]">
        <img src={data.img} alt="" className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="p-[10px] flex h-full flex-col gap-[10px]">
        <span className="text-[#8F8F8F] text-[12px] font-[400]">
          {data.date}
        </span>
        <h1 className="text-[#333333] text-[18px] font-[700]">{data.title}</h1>
        <p className="text-[#333333] text-[16px] font-[400]">{data.desc}</p>
        <a
          href={`articles/${data.id}`}
          className="p-[10px] text-center mt-auto text-[#70C05B] rounded-[5px] bg-[#E5FFDE] hover:bg-[#70C05B] hover:text-[#fff] duration-300 linear"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
