import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DashedGuides } from "@/components/layout/DashedGuides";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Tulip - The design layer for software that actually ships",
  description:
    "Tulip turns your product vision into a working system that powers everything from a Figma system and a production React repo, delivered in 48 hours.",
  icons: {
    icon: "/assets/AOoM1oZLfucOwe3cICszh6dk.png",
  },
  openGraph: {
    title: "Tulip AI - Design Layer for Software",
    description:
      "Deliver a Master Figma system and production React repository in 48 hours.",
    images: ["/assets/q7TQ8E0Bc6qaCAnDrgp0wb3sTCg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen relative flex flex-col justify-between selection:bg-[#f97518]/20 selection:text-[#f97518]">
        <SmoothScrollProvider>
          <AmbientBackground />
          <DashedGuides />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
