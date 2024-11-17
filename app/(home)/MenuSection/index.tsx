"use client";
import { IMenuGame } from "@/app/types";
import SearchIcon from "@/public/images/icons/searchIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.scss";
interface Props {
  menuList: IMenuGame[];
  activeItem: string;
}
export default function MenuSection(props: Props) {
  const router = useRouter();
  const navigateWithParams = (value: string) => {
    const queryParams = new URLSearchParams({ menu: value }).toString();
    router.push(`?${queryParams}`);
  };
  return (
    <div className="menuSection pt-5 flex flex-col gap-9 cursor-pointer">
      <div className="searchBox ">
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
          className={`opacity-20 flex gap-1  ${
            item.value === props.activeItem ? "active" : ""
          }`}
          key={"gameMenu_" + index}
          onClick={() => navigateWithParams(item.value)}>
          <Image src={item.icon} alt={item.value} width={20} height={20} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
