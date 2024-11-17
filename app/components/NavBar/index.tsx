"use client";
import { HEADER_MENU } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.scss";
interface NavBarMenuType {
  label: string;
  path: string;
}
export default function NavBar() {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState<NavBarMenuType>();

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
    <div className="navBar flex flex-row gap-10">
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
  );
}
