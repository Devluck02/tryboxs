import Hero from "@/components/hero/Hero";
import CategoriesRow from "@/components/categories/CategoriesRow";
import DealOfTheDayRow from "@/components/dealoftheday/DealOfTheDayRow";
import CashbackDealsRow from "@/components/cashbackdeals/CashbackDealsRow";
import CashbackStoresRow from "@/components/cashbackstores/CashbackStoresRow";
import TrendingCouponsRow from "@/components/trendingcoupons/TrendingCouponsRow";

export const metadata = {
  title: "TryBoxs: Coupons, Offers, Promo Codes, Deals & Discounts",
  description:
    "Discover the best deals, discounts, and savings from top brands in one place.",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesRow />
      <DealOfTheDayRow />
      <CashbackDealsRow />
      <CashbackStoresRow />
      <TrendingCouponsRow />
    </div>
  );
};

export default Home;
