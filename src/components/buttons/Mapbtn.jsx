function Mapbtn({ data, activeMap, setActiveMap }) {
  return (
    <button
      onClick={() => {
        setActiveMap(data.id);
      }}
      className={`p-[12px_16px] rounded-sm transition-colors duration-200  text-xs  leading-1.5  ${
        activeMap == data.id
          ? "bg-[#70C05B] text-white"
          : "bg-[#F3F2F1] text-[#606060] hover:bg-[#e3e3e3]"
      }`}
    >
      {data.cityName}
    </button>
  );
}

export default Mapbtn;
