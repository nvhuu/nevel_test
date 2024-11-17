import { ICardItem } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

export default function CardItem(props: ICardItem) {
  return (
    <div className="cardItem w-full h-full relative flex flex-col md:gap-7">
      <Image
        src={props.thumbnail}
        width={490}
        height={221}
        alt="card_thumbnail"
        className="cardItem__thumbnail w-full h-full "
      />
      <div className="hidden md:flex gap-5">
        <Image src={props.icon} width={90} height={90} alt="card_icon" />
        <div className="flex flex-col gap-2 justify-center">
          <span className="cardItem__title">{props.title}</span>
          <span className="cardItem__description">{props.description}</span>
        </div>
        <Link href={props.url} className="cardItem__btnView">
          View
        </Link>
      </div>
      <div
        className="flex flex-col md:hidden p-5 gap-6"
        style={{ backgroundColor: props.bgColor || "transparent" }}>
        <div className="flex gap-5">
          <Image src={props.icon} width={60} height={60} alt="card_icon" />
          <div className="flex flex-col gap-2 justify-center">
            <span className="cardItem__title">{props.title}</span>
            <span className="cardItem__description">{props.description}</span>
          </div>
        </div>
        <div className="flex justify-between">
          {props.advanceInfo?.map((item, index) => (
            <div className="flex flex-col gap-1" key={"detail__" + index}>
              <span className="cardItem__title">{item.title}</span>
              <span className="cardItem__description">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
