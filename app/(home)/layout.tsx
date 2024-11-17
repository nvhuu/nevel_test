import React, { Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Suspense>{children}</Suspense>
      <Footer />
    </main>
  );
}
