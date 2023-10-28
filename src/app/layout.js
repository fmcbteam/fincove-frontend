import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../app/providers";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinCove",
  description: "FinCove Banking Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
