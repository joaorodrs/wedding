import type React from "react";
import type { Metadata } from "next";
import { Geist, Oranienbaum, Badeen_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const _geist = Geist({ subsets: ["latin"] });
const _oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: ["400"],
});
const _badeenDisplay = Badeen_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "J&T - Save the Date",
  description: "Junte-se a nós no nosso grande dia!",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
