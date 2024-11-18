"use client";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./styles.scss";
export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className="header w-full"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}>
      <div className="header__content h-full w-full">
        <div className="container h-full flex items-baseline justify-between md:items-center z-10">
          <Image
            src={Logo.src}
            alt="logo"
            width={108}
            height={64}
            className="logo"
          />
          <NavBar />
        </div>
      </div>
    </div>
  );
}
