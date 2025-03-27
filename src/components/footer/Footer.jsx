import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";
import { Link } from 'react-router';
function Footer() {
  return (
    <footer className="bg-[#F9F4E7] py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./src/assets/imgs/footer logo.png" alt="" />
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            О компании
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Контакты
          </a>
          <Link to={"/vacancies"} className="text-gray-700 hover:text-black">
            Вакансии
          </Link>
          <a href="#" className="text-gray-700 hover:text-black">
            Статьи
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Политика обработки персональных данных
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="" target="_blank">
            <IoLogoInstagram className="text" />
          </a>
          <a href="" target="_blank">
            <FaYoutube />
          </a>
          <a href="" target="_blank">
            <FaTelegramPlane />
          </a>
          <span className="flex items-center gap-2 text-gray-800">
            <a className="fas fa-phone-alt mr-2 flex" target="_blank"></a>
            <TbPhone /> 8 800 777 33 33
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
