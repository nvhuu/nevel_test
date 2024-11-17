export interface IMenuGame {
  icon: string;
  title: string;
  value: string;
  mobileTitle?: string;
}
export interface ICardItem {
  thumbnail: string;
  url: string;
  icon: string;
  title: string;
  description: string;
  advanceInfo?: { title: string; subtitle: string }[];
  bgColor?: string;
}
export interface IGameInfo {
  thumbnail: string;
  url: string;
}
export interface ICardInfo {
  icon: string;
  title: string;
  subtitle: string;
  bgColor: string;
}
export interface ICardCategory {
  icons: IGameInfo[];
  thumbnail: IGameInfo;
  cardInfo: ICardInfo;
}
export interface IFooterMenu {
  title: string;
  subMenu: { label: string; url: string }[];
}
export interface INavBarMenu {
  label: string;
  path: string;
}
