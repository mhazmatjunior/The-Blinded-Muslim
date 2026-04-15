import { Outfit, Cormorant_Garamond, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-arabic",
});

export const metadata = {
  title: "Blinded Muslim | Reconnecting Students with Islam",
  description: "A structured 3-month journey designed to help university students rediscover clarity, purpose, and the true understanding of Islam in today's intellectual and ideological chaos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} ${notoArabic.variable}`}>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
