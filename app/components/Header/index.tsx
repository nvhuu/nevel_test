import Logo from "@/public/images/logo.png";
import Image from "next/image";
import NavBar from "../NavBar";
import "./styles.scss";
export default function Header() {
  return (
    <div className="header w-full">
      <div className="header__content h-full w-full">
        <div className="container h-full flex items-baseline justify-between md:items-center z-10">
          <Image
            src={Logo.src}
            alt="logo"
            width={108}
            height={64}
            className="logo"
          />
          <NavBar />
        </div>
      </div>
    </div>
  );
}
