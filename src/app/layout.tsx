import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./provider/provider";
import { Toaster } from "@/components/ui/sonner";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Naija Tutor",
  description: "Empowering Nigerian Tutors, Inspiring Global Learners.",
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className={`${archivo.variable}  antialiased`}>
        <Toaster position="top-center"/>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
