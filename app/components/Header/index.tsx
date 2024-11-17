import Logo from "@/public/images/logo.png";
import Image from "next/image";
import NavBar from "../NavBar";
import "./styles.scss";
export default function Header() {
  return (
    <div className="header w-full">
      <div className="header__content h-full w-full">
        <div className="container h-full flex justify-between items-center z-10">
          <Image src={Logo.src} alt="logo" width={100} height={100} />
          <NavBar />
        </div>
      </div>
    </div>
  );
}
