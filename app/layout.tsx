import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cezeri",
  metadataBase: new URL("https://itucezeri.com"),
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
  verification: {
    google: "your-verification-id",
  },
  description:
    "İTÜ Cezeri, 2019 yılı ekim ayında kurulmuş olup dikey iniş kalkışlı insansız hava araçları ve sürü İHA algoritmaları geliştiren bir proje takımıdır.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://itucezeri.com",
    description:
      "İTÜ Cezeri, 2019 yılı ekim ayında kurulmuş olup dikey iniş kalkışlı insansız hava araçları ve sürü İHA algoritmaları geliştiren bir proje takımıdır.",
    images: [
      {
        url: "/Cezeri.jpeg",
        width: 800,
        height: 600,
        alt: "Cezeri logo",
      },
    ],
  },
  twitter: {
    site: "@site",
    images: [
      {
        url: "/Cezeri.jpeg",
        width: 800,
        height: 600,
        alt: "Cezeri logo",
      },
    ],
    description:
      "İTÜ Cezeri, 2019 yılı ekim ayında kurulmuş olup dikey iniş kalkışlı insansız hava araçları ve sürü İHA algoritmaları geliştiren bir proje takımıdır.",
    title: "Cezeri",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
