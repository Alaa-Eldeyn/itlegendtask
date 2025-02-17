import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Provider } from "@/utils/context";

const spartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "It Legend Task | Alaa Abdelnaser hasan",
  description: "Alaa Abdelnaser Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={`${spartan.variable} antialiased`}>{children}</body>
      </html>
    </Provider>
  );
}
