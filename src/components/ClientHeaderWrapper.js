"use client";

import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";
import RegionalBanner from "./international/RegionalBanner";

export default function ClientHeaderWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <RegionalBanner />
    </>
  );
}
