"use client";
import Slider from "@/app/components/Slider";
import SliderImage from "@/public/images/sliderImage_desktop.jpg";
import Image from "next/image";
import "./style.scss";
export default function SliderSection() {
  const imagesList = Array.from({ length: 5 }, () => SliderImage.src);
  const sliderEls = imagesList.map((src, index) => (
    <div
      className="sliderSection__slider w-full h-full"
      key={"sliderImage_" + index}>
      <Image
        src={src}
        alt="sliderImage"
        width={1400}
        height={576}
        className="w-full h-full"
      />
    </div>
  ));
  return (
    <div className="sliderSection">
      <Slider content={sliderEls} />
    </div>
  );
}
