import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
// @ts-ignore
import NavLines from "../../assets/icons/nav-lines.svg";

const MainLayout = () => {
  return (
    <>
      <header className="bg-bg relative">
        <Navbar />
        <img className="absolute bottom-[450px] opacity-60  left-[-400px]  w-full h-full object-cover pointer-events-none" src={NavLines} alt="Lines" />
        <Hero />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
