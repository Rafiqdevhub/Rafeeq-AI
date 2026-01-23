"use client";

import "./globals.css";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon, HomeIcon, RefreshCwIcon } from "lucide-react";
import { useEffect } from "react";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en" className={outfitFont.className}>
      <body className="antialiased">
        <section className="relative overflow-hidden flex flex-col min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-primary/5" />

          <div className="relative flex-1 flex items-center justify-center">
            <div className="section-container section-padding w-full">
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-destructive/10">
                    <AlertCircleIcon className="w-16 h-16 text-destructive" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Something Went Wrong!
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    We encountered an unexpected error. Our team has been
                    notified and we're working to fix it.
                  </p>
                </div>

                {process.env.NODE_ENV === "development" && error.message && (
                  <div className="bg-muted/50 border border-border rounded-lg p-4 text-left space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Error Details:
                    </p>
                    <p className="text-xs font-mono text-destructive break-words">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-xs text-muted-foreground">
                        Digest: {error.digest}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    onClick={() => reset()}
                    size="lg"
                    className="link-button hero-button-primary group"
                  >
                    <span className="hero-button-content">
                      <RefreshCwIcon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                      Try Again
                    </span>
                  </Button>
                  <Link href="/">
                    <Button
                      size="lg"
                      className="link-button hero-button-outline group"
                    >
                      <span className="hero-button-content">
                        <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Back to Home
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-border/30 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Need immediate assistance?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact our support team at{" "}
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
