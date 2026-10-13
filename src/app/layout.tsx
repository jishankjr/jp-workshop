
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import BottomNav from "../components/BottomNav";
import LanguageProvider from "../components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP Workshop | Motorcycle & Scooter Care",
  description:
    "Motorcycle and scooter servicing and repairs. Contact JP Workshop or request a servicing appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <LanguageProvider>
          <SiteHeader />

          <main className="mx-auto min-h-[calc(100vh-68px)] w-full max-w-7xl px-0 pb-28 md:px-6 md:pb-12 lg:px-8">
            {children}
          </main>

          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
