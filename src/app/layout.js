import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Providers from "@/components/providers/Providers";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "TryBoxs: Coupons, Offers, Promo Codes, Deals & Discounts",
    template: "%s | TryBoxs",
  },
  description:
    "India ka best affiliate coupon & cashback platform. Save more on Amazon, Flipkart, Myntra, Nykaa, Zomato & more.",
  icons: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
  openGraph: {
    siteName: "TryBoxs",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <Providers>
          <Header />
          <div className="w-full bg-[#F7F7F8] max-w-360 mx-auto pt-4 pb-8 sm:pt-5 sm:pb-10 px-4 sm:px-6 lg:px-8 xl:px-12">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
