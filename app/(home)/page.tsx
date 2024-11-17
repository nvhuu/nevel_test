"use client";
import { IMenuGame } from "@/app/types";
import AllGameIcon from "@/public/images/icons/allIGameIcon.svg";
import HomeIcon from "@/public/images/icons/homeIcon.svg";
import TimeLineIcon from "@/public/images/icons/timeLineIcon.svg";
import { useSearchParams } from "next/navigation";
import HotGameSection from "./HotGameSection";
import HottestCategorySection from "./HottestCategorySection";
import MenuSection from "./MenuSection";
import SliderSection from "./SliderSection";
import "./style.scss";
export default function Home() {
  const menu: IMenuGame[] = [
    { icon: HomeIcon, title: "Games Home", value: "gameHome" },
    { icon: TimeLineIcon, title: "Timeline", value: "timeline" },
    { icon: AllGameIcon, title: "All Games", value: "allGames" },
  ];
  const searchParams = useSearchParams();
  const activeMenu = searchParams.get("menu") || menu[0].value;
  return (
    <section>
      <SliderSection />
      <section className="container">
        <div className="mainSection flex px-5 pt-24 pb-10 gap-10">
          <div className="mainSection__left">
            <MenuSection menuList={menu} activeItem={activeMenu} />
          </div>
          <div className="mainSection__right flex flex-col gap-20">
            <HotGameSection />
            <HottestCategorySection />
          </div>
        </div>
      </section>
    </section>
  );
}
