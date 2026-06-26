import { getCashbackDeals } from "@/lib/api";
import CashbackDealsCarousel from "./CashbackDealsCarousel";

const CashbackDealsRow = async () => {
  const deals = await getCashbackDeals();
  return <CashbackDealsCarousel deals={deals} />;
};

export default CashbackDealsRow;
