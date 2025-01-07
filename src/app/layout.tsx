import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { cn } from "@/utils/helpers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palm Parung Residence",
  description:
    "Palm Parung Residence adalah perumahan modern dengan lingkungan hijau, nyaman, dan strategis di Parung, Bogor. Temukan hunian impian Anda di sini.",
  keywords:
    "Palm Parung Residence, perumahan Parung, rumah Bogor, perumahan strategis, hunian modern, rumah hijau, properti Parung, rumah murah",
  openGraph: {
    title: "Palm Parung Residence",
    description:
      "Palm Parung Residence adalah perumahan modern dengan lingkungan hijau, nyaman, dan strategis di Parung, Bogor. Temukan hunian impian Anda di sini.",
    siteName: "Palm Parung Residence",
    locale: "id_ID",
    type: "website",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn(roboto.className, "min-h-screen bg-gray-50")}>
        {children}
      </body>
    </html>
  );
}
