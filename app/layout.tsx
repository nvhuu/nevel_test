import Logo from "@/public/images/logo.png";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const PingFang = localFont({
  src: [
    {
      path: "./fonts/PingFang Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/PingFang Bold.ttf", weight: "600", style: "bold" },
  ],
});

export const metadata: Metadata = {
  title: "E-TECH",
  description: "E-TECH",
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PingFang.className} antialiased`}>{children}</body>
    </html>
  );
}
