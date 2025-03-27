import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Route, Routes } from "react-router";
import {
  BasketPage,
  Categories,
  Home,
  SingleCategory,
  SingleProduct,
  VacanciesPage,
} from "./pages";
import { useLocation } from "react-router";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
        <Route path="/categories/:id/:id2" element={<SingleProduct />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
