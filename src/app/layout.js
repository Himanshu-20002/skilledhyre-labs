
import ClientHeaderWrapper from "@/components/ClientHeaderWrapper";
import "./globals.css";

export const metadata = {
  title: "SkilledHyre Labs | Engineering Digital Innovation",
  description:
    "SkilledHyre Labs is a full-fledged IT and AI engineering company delivering scalable software solutions, AI-powered platforms, and on-demand tech talent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
        suppressHydrationWarning={true}
      >
        {/* Client component handles admin detection */}
        <ClientHeaderWrapper>
          {children}
        </ClientHeaderWrapper>
      </body>
    </html>
  );
}
