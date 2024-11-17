import { IFooterMenu, INavBarMenu } from "../types";

export const HEADER_MENU: INavBarMenu[] = [
  { label: "Home", path: "/home" },
  { label: "Game", path: "/" },
  { label: "News", path: "/news" },
  { label: "Math", path: "/math" },
  { label: "Company", path: "/company" },
  { label: "Events", path: "/events" },
  { label: "Partners", path: "/partners" },
];

export const FOOTER_MENU: IFooterMenu[] = [
  {
    title: "Web map",
    subMenu: [
      { label: "Home", url: "/" },
      { label: "Games", url: "/" },
      { label: "News", url: "/" },
      { label: "Math", url: "/" },
      { label: "Company", url: "/" },
      { label: "Events", url: "/" },
      { label: "Partners", url: "/" },
    ],
  },
  {
    title: "ABOUT US",
    subMenu: [
      { label: "Licensing", url: "/" },
      { label: "Certification", url: "/" },
      { label: "Responsible Gaming", url: "/" },
      { label: "Exhibitions", url: "/" },
      { label: "Copyright Protection", url: "/" },
      { label: "Privacy Policy", url: "/" },
    ],
  },
  {
    title: "EVENTS",
    subMenu: [
      { label: "PG ICE 2017", url: "/" },
      { label: "PG ICE 2018", url: "/" },
      { label: "PG ICE 2019", url: "/" },
      { label: "About ICE", url: "/" },
    ],
  },
  {
    title: "OUR PARTNERS",
    subMenu: [
      { label: "Relax Gaming", url: "/" },
      { label: "Leander Games", url: "/" },
    ],
  },
]