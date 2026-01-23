import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import HeaderWrapper from "@/components/layout/headerWrapper";
import Footer from "@/components/layout/Footer";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rafeeq-AI",
  description:
    "Rafeeq-AI is your intelligent study companion that connects you with the right people and keeps your learning on track.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfitFont.className} antialiased`}>
          <HeaderWrapper />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
