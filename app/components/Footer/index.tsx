import { FOOTER_MENU } from "@/app/constants";
import Linkedin from "@/public/images/icons/Linkedin.svg";
import Twitter from "@/public/images/icons/Twitter.svg";
import YouTube from "@/public/images/icons/YouTube.svg";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer__main">
        <div className="info flex">
          <div className="info__left">
            <Image
              src={Logo.src}
              width={53}
              height={31}
              alt="logo"
              className="mt-1"
            />
            <div className="text">
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta
            </div>
            <div className="mt-10 flex gap-4">
              <Image src={Twitter} width={20} height={20} alt="twitterIcon" />
              <Image src={YouTube} width={20} height={20} alt="youtubeIcon" />
              <Image src={Linkedin} width={20} height={20} alt="linkedinIcon" />
            </div>
          </div>

          <div className="info__right flex  justify-between">
            {FOOTER_MENU.map((item, index) => (
              <div key={"footerMenu_" + index} className="">
                <div className="title">{item.title}</div>
                <div className="submenu flex flex-col">
                  {item.subMenu.map((sub, i) => (
                    <Link
                      href={sub.url}
                      key={"subMenu_" + i}
                      className="cursor-pointer">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright mt-10">
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
