import "./globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found | Rafeeq AI",
  description:
    "The page you're looking for doesn't exist. Return to Rafeeq AI and continue your learning journey with AI-powered study partners.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={outfitFont.className}>
      <body className="antialiased">
        <section className="relative overflow-hidden flex flex-col min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

          <div className="relative flex-1 flex items-center justify-center">
            <div className="section-container section-padding w-full">
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="text-9xl md:text-[10rem] font-black bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    404
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Page Not Found
                  </h1>
                </div>

                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground">
                    Oops! It looks like you&apos;ve ventured into uncharted
                    territory. The page you&apos;re searching for doesn&apos;t
                    exist.
                  </p>
                  <p className="text-base text-muted-foreground/80">
                    But don&apos;t worry! Get back on track and discover the
                    perfect learning partners to help you reach your goals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="link-button hero-button-primary group"
                    >
                      <span className="hero-button-content">
                        <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Back to Home
                      </span>
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="link-button hero-button-outline group"
                    >
                      <span className="hero-button-content">
                        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Get Started
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    Need help? Contact our support team at{" "}
                    <a
                      href="mailto:support@rafeeq-ai.com"
                      className="text-primary hover:underline font-medium"
                    >
                      support@rafeeq-ai.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
