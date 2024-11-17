"use client";
import { ICardCategory } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.scss";
export default function CardCategory(props: ICardCategory) {
  const { cardInfo, thumbnail, icons } = props;
  const iconsLeft = icons.slice(0, 2);
  const iconsRight = icons.slice(2, 4);
  const router = useRouter();
  const onClickImage = (url: string) => {
    router.push(`/games/${url}`);
  };
  return (
    <div className="cardCategory w-full h-full flex p-5 ">
      <div className=" flex flex-col justify-between">
        <div
          className={`cardInfo p-5 flex flex-col gap-4`}
          style={{ backgroundColor: cardInfo.bgColor }}>
          <Image
            src={cardInfo.icon}
            alt="categoryIcon"
            width={24}
            height={24}
          />
          <span className="cardInfo__title">{cardInfo.title}</span>
          <span className="cardInfo__subtitle">{cardInfo.subtitle}</span>
        </div>
        <div className="groupIcon flex justify-between">
          {iconsLeft.map((item, index) => (
            <Image
              src={item.thumbnail}
              width={95}
              height={95}
              alt="iconGame"
              key={"iconGameLeft_" + index}
              className="cursor-pointer"
              onClick={() => onClickImage(item.url)}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col justify-between">
        <div className="groupIcon flex justify-between">
          {iconsRight.map((item, index) => (
            <Image
              src={item.thumbnail}
              width={95}
              height={95}
              alt="iconGame"
              key={"iconGameLeft_" + index}
              className="cursor-pointer"
              onClick={() => onClickImage(item.url)}
            />
          ))}
        </div>
        <Image
          src={thumbnail.thumbnail}
          width={210}
          height={210}
          alt="gameThumbnail"
          className="border-20 cursor-pointer"
          onClick={() => onClickImage(thumbnail.url)}
        />
      </div>
    </div>
  );
}
