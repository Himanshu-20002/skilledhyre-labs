"use client";

import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function ClientHeaderWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  // Only render header/footer if NOT admin
  // if (isAdminPage) return null;

  return (
    <>
      {!isAdminPage && <Header />}
      {!isAdminPage ? (
        <main className="flex-grow">{children}</main>
      ) : (
        children
      )}
      {!isAdminPage && <Footer />}
    </>
  );
}
