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
    {
      icon: HomeIcon,
      title: "Games Home",
      value: "gameHome",
      mobileTitle: "Home",
    },
    { icon: TimeLineIcon, title: "Timeline", value: "timeline" },
    { icon: AllGameIcon, title: "All Games", value: "allGames" },
  ];
  const searchParams = useSearchParams();
  const activeMenu = searchParams.get("menu") || menu[0].value;
  return (
    <section className="w-full">
      <SliderSection />
      <section className="container">
        <div className="mainSection flex flex-col md:flex-row md:px-5 md:pt-24 pb-10 gap-5 md:gap-10">
          <div className="mainSection__left">
            <MenuSection menuList={menu} activeItem={activeMenu} />
          </div>
          <div className="mainSection__right flex flex-col md:gap-20 gap-8">
            <HotGameSection />
            <HottestCategorySection />
          </div>
        </div>
      </section>
    </section>
  );
}
