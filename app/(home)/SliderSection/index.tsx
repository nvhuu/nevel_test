"use client";
import Slider from "@/app/components/Slider";
import ArrowIcon from "@/public/images/icons/arrowRight.svg";
import SliderImage2 from "@/public/images/sliderImage2.jpg";
import SliderImage from "@/public/images/sliderImage_desktop.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.scss";
interface SliderItem {
  imgSrc: string;
  bgColor: string;
  url: string;
  title: string;
}
export default function SliderSection() {
  const router = useRouter();
  const imagesList: SliderItem[] = [
    {
      imgSrc: SliderImage.src,
      bgColor: "#03827E",
      url: "",
      title: "Futebol Fever",
    },
    {
      imgSrc: SliderImage2.src,
      bgColor: "#0846c1",
      url: "",
      title: "Chicky Run",
    },
    {
      imgSrc: SliderImage.src,
      bgColor: "#03827E",
      url: "",
      title: "Futebol Fever",
    },
    {
      imgSrc: SliderImage2.src,
      bgColor: "#0846c1",
      url: "",
      title: "Chicky Run",
    },
    {
      imgSrc: SliderImage.src,
      bgColor: "#03827E",
      url: "",
      title: "Futebol Fever",
    },
  ];
  const sliderEls = imagesList.map((item, index) => (
    <div
      className="sliderItem w-full h-full relative"
      style={{ backgroundColor: item.bgColor }}
      key={"sliderImage_" + index}>
      <Image
        src={item.imgSrc}
        alt="sliderImage"
        width={1400}
        height={576}
        className="w-full h-full object-cover md:object-fill sliderItem__img"
      />
      <div className="sliderItem__detail md:hidden flex flex-col items-center z-10">
        <div className="title">{item.title}</div>
        <div
          className="detail flex cursor-pointer "
          onClick={() => console.log("click")}>
          Game Details{" "}
          <Image src={ArrowIcon} width={13} height={12} alt="arrow" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="sliderSection w-full">
      <Slider content={sliderEls} autoPlay={true} />
    </div>
  );
}
