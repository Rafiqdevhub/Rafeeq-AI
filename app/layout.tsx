import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import "./globals.css";
import HeaderWrapper from "@/components/layout/headerWrapper";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/components/provider/QueryProvider";
import { Toaster } from "sonner";

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
          <QueryProvider>
            <HeaderWrapper />
            <Suspense fallback={null}>{children}</Suspense>
            <Footer />
          </QueryProvider>
          <Toaster position="top-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
