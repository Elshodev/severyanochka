import { FaAngleRight } from "react-icons/fa";

function SectionLink({ text, link }) {
  return (
    <a href={link} className="flex hover:text-black items-center gap-x-3 text-[#757371]">
      {text} <FaAngleRight />
    </a>
  );
}

export default SectionLink;
