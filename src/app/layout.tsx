import "./globals.css";
import { Inter } from "next/font/google";
import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tekin Wear",
  description: "Kaliteli giyim markası",
  icons: {
    icon: "/favicon.ico", // favicon sadece public klasöründe olmalı
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
