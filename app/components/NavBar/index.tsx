"use client";
import { HEADER_MENU } from "@/app/constants";
import { INavBarMenu } from "@/app/types";
import MenuIcon from "@/public/images/icons/menuIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.scss";

export default function NavBar() {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState<INavBarMenu>();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (pathName === "/") setActivePath(HEADER_MENU[1]);
    else
      setActivePath(
        HEADER_MENU.filter((item) => item.path !== "/").find(
          (item) => item.path && pathName.includes(item.path)
        ) || HEADER_MENU[1]
      );
  }, [pathName]);
  return (
    <>
      <Image
        src={MenuIcon}
        width={48}
        height={42}
        alt="menuIcon"
        className="md:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <div
        className={`${
          showMenu
            ? "flex flex-col p-4 gap-3 justify-center items-center"
            : "hidden"
        }  w-full md:flex md:w-auto navBar flex-row md:gap-10`}>
        {HEADER_MENU.map((item, index) => (
          <Link
            href={item.path}
            className={`navBar__item cursor-pointer ${
              item.path === activePath?.path ? "active" : ""
            }`}
            key={"navbar" + index}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
