import { FOOTER_MENU } from "@/app/constants";
import Linkedin from "@/public/images/icons/Linkedin.svg";
import Twitter from "@/public/images/icons/Twitter.svg";
import YouTube from "@/public/images/icons/YouTube.svg";
import PlusIcon from "@/public/images/icons/plusIcon.svg";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";
export default function Footer() {
  return (
    <div className="footer ">
      <div className="container footer__main">
        <div className="info  flex flex-col-reverse md:flex-row ">
          <div className="info__left">
            <Image
              src={Logo.src}
              width={53}
              height={31}
              alt="logo"
              className="mt-1 hidden md:block"
            />
            <div className="text ">
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta
            </div>
            <div className="block md:hidden copyright mt-5">
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </div>
            <div className="mt-10 flex gap-4">
              <Image src={Twitter} width={20} height={20} alt="twitterIcon" />
              <Image src={YouTube} width={20} height={20} alt="youtubeIcon" />
              <Image src={Linkedin} width={20} height={20} alt="linkedinIcon" />
            </div>
          </div>

          <div className="info__right flex flex-col md:flex-row justify-between">
            {FOOTER_MENU.map((item, index) => (
              <div
                key={"footerMenu_" + index}
                className="flex md:block justify-between items-center menuMobile">
                <div className="title">{item.title}</div>
                <Image
                  src={PlusIcon}
                  width={12}
                  height={12}
                  alt="plusIcon"
                  className="block md:hidden"
                />
                <div className="hidden submenu md:flex flex-col">
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
        <div className="hidden md:block copyright mt-10">
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
