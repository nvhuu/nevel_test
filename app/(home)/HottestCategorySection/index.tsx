"use client";
import CardCategory from "@/app/components/CardCategory";
import { ICardCategory } from "@/app/types";
import AppIcon1 from "@/public/images/appIcon1.png";
import AppThumbnail1 from "@/public/images/appThumbnail.png";
import ArrowIcon from "@/public/images/icons/arrowIcon.svg";
import MusicIcon from "@/public/images/icons/musicIcon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
export default function HottestCategorySection() {
  const cardList: ICardCategory[] = [
    {
      cardInfo: {
        icon: MusicIcon,
        title: "Music",
        subtitle:
          "Music makes everything better, and these games will grove to it!",
        bgColor: "#5C6EFF",
      },
      icons: [
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
      ],
      thumbnail: { thumbnail: AppThumbnail1.src, url: "/" },
    },
    {
      cardInfo: {
        icon: MusicIcon,
        title: "Music",
        subtitle:
          "Music makes everything better, and these games will grove to it!",
        bgColor: "#5C6EFF",
      },
      icons: [
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
      ],
      thumbnail: { thumbnail: AppThumbnail1.src, url: "/" },
    },
    {
      cardInfo: {
        icon: MusicIcon,
        title: "Music",
        subtitle:
          "Music makes everything better, and these games will grove to it!",
        bgColor: "#5C6EFF",
      },
      icons: [
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
        { thumbnail: AppIcon1.src, url: "/" },
      ],
      thumbnail: { thumbnail: AppThumbnail1.src, url: "/" },
    },
  ];
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollContainerRef.current.scrollLeft +
          scrollContainerRef.current.clientWidth <
          scrollContainerRef.current.scrollWidth - 1
      );
    }
  }, [scrollContainerRef]);
  const scrollItem = (count: number) => {
    if (
      scrollContainerRef.current &&
      ((count > 0 && canScrollRight) || (count < 0 && canScrollLeft))
    ) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth / 2 + 10;
      const { scrollLeft, clientWidth, scrollWidth } =
        scrollContainerRef.current;
      let newScrollLeft = scrollLeft + scrollAmount * count;
      if (newScrollLeft < 1) newScrollLeft = 0;
      if (newScrollLeft + clientWidth > scrollWidth - 1) newScrollLeft += 2;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setCanScrollLeft(newScrollLeft - 1 > 0);
      setCanScrollRight(newScrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  return (
    <div className="hottest flex flex-col mb-4">
      <div className="hottest__header flex justify-between">
        <span className="text-header">Hottest Category</span>
        <div className="actionGroup flex ">
          <div
            className={`arrowToLeft ${
              canScrollLeft
                ? "opacity-100 cursor-pointer"
                : "opacity-20 cursor-not-allowed"
            }`}
            onClick={() => scrollItem(-1)}>
            <Image
              src={ArrowIcon}
              width={30}
              height={30}
              className="rotate-180"
              alt="arrowToLeft"
            />
          </div>
          <div
            className={`arrowToLeft cursor-pointer ${
              canScrollRight
                ? "opacity-100 cursor-pointer"
                : "opacity-20 cursor-not-allowed"
            }`}
            onClick={() => scrollItem(1)}>
            <Image src={ArrowIcon} width={30} height={30} alt="arrowToRight" />
          </div>
        </div>
      </div>
      <div
        className="hottest__main flex w-full overflow-hidden"
        ref={scrollContainerRef}>
        {cardList.map((item, index) => (
          <div className="hottestCard" key={"card_" + index}>
            <CardCategory {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
