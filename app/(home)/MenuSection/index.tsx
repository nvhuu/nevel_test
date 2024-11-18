"use client";
import { IMenuGame } from "@/app/types";
import FilterIcon from "@/public/images/icons/filterIcon.svg";
import SearchIcon from "@/public/images/icons/searchIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import "./style.scss";
interface Props {
  menuList: IMenuGame[];
  activeItem: string;
}
export default function MenuSection(props: Props) {
  const router = useRouter();
  const navigateWithParams = (value: string) => {
    const queryParams = new URLSearchParams({ menu: value }).toString();
    router.push(`?${queryParams}`, { scroll: false });
  };
  return (
    <Fragment>
      <div className="menuSection hidden md:flex pt-5 flex-col gap-9">
        <div className="searchBox hidden">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="searchBox__input opacity-20"
            style={{ background: `url(${SearchIcon.src}) no-repeat` }}
          />
        </div>
        {props.menuList.map((item, index) => (
          <div
            className={`flex gap-1  cursor-pointer ${
              item.value === props.activeItem ? "opacity-100" : "opacity-20"
            }`}
            key={"gameMenu_" + index}
            // id={
            //   props.activeItem === item.value
            //     ? ""
            //     : `__nav_${index}`
            // }
            onClick={() => navigateWithParams(item.value)}>
            <Image src={item.icon} alt={item.value} width={20} height={20} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="menuSection flex md:hidden h-20 w-full">
        {props.menuList.map((item, index) => (
          <div
            className={` flex-1 flex flex-col gap-1 justify-center items-center cursor-pointer ${
              item.value === props.activeItem
                ? "opacity-100 active"
                : "opacity-20"
            }`}
            key={"gameMenu_" + index}
            onClick={() => navigateWithParams(item.value)}>
            <Image src={item.icon} alt={item.value} width={20} height={20} />
            <span className="uppercase text-mb">
              {item.mobileTitle || item.title}
            </span>
          </div>
        ))}
        <div
          className={` flex-1 flex flex-col gap-1 justify-center items-center cursor-pointer opacity-20`}>
          <Image src={SearchIcon} alt="search" width={20} height={20} />
          <span className="uppercase text-mb">Search</span>
        </div>
        <div
          className={` flex-1 flex flex-col gap-1 justify-center items-center cursor-pointer opacity-20 filterBtn`}>
          <Image src={FilterIcon} alt="filter" width={20} height={20} />
          <span className="uppercase text-mb">Filter</span>
        </div>
      </div>
    </Fragment>
  );
}
