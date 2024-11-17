"use client";
import CardItem from "@/app/components/CardItem";
import { ICardItem } from "@/app/types";
import GameIcon1 from "@/public/images/gameIcon1.png";
import HotGameBanner1 from "@/public/images/hotGameBanner1.png";
import ArrowIcon from "@/public/images/icons/arrowIcon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
export default function HotGameSection() {
  const cardList: ICardItem[] = [
    {
      thumbnail: HotGameBanner1.src,
      icon: GameIcon1.src,
      title: "Mahjong Ways",
      description:
        "4TECH™ has just launched their very first Mahjong inspired slot machine gamadsdasd adsd asda đá… a adsd a sdas đa á ",
      url: "/mahjong-ways",
    },
    {
      thumbnail: HotGameBanner1.src,
      icon: GameIcon1.src,
      title: "Mahjong Ways",
      description:
        "4TECH™ has just launched their very first Mahjong inspired slot machine gamadsdasd adsd asda đá… a adsd a sdas đa á ",
      url: "/mahjong-ways",
    },
    {
      thumbnail: HotGameBanner1.src,
      icon: GameIcon1.src,
      title: "Mahjong Ways",
      description:
        "4TECH™ has just launched their very first Mahjong inspired slot machine gamadsdasd adsd asda đá… a adsd a sdas đa á ",
      url: "/mahjong-ways",
    },
    {
      thumbnail: HotGameBanner1.src,
      icon: GameIcon1.src,
      title: "Mahjong Ways",
      description:
        "4TECH™ has just launched their very first Mahjong inspired slot machine gamadsdasd adsd asda đá… a adsd a sdas đa á ",
      url: "/mahjong-ways",
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
    <div className="hotGame flex flex-col mb-4">
      <div className="hotGame__header flex justify-between">
        <span className="text-header">Hot Game</span>
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
        className="hotGame__main flex w-full overflow-hidden"
        ref={scrollContainerRef}>
        {cardList.map((item, index) => (
          <div className="hotGameCard" key={"card_" + index}>
            <CardItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
