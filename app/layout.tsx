import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philippine Scripts Translator | Tagalog to Baybayin, Hanunoo, Buhid & Tagbawna Translator",
  description: "Translate tagalog words and sentences to the Baybayin, Hanunoo, Buhid and Tagbanwa with the Philippine Scripts Translator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="translator">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col bg-b-navy h-screen">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-DVH9M2HCL2" />
    </html>
  );
}
