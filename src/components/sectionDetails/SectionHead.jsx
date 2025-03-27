import { FaChevronRight } from "react-icons/fa6";
import SectionTitle from "../titles/SectionTitle.jsx";

function SectionHead({ title, linkTitle, link }) {
  return (
    <div className="flex items-center justify-between mb-[40px]">
      <SectionTitle title={title} />
      <a href={link} className="flex items-center gap-4">
        {linkTitle} <FaChevronRight />
      </a>
    </div>
  );
}

export default SectionHead;
