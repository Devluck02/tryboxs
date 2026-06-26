import { getDeals } from "@/lib/api";
import DealCard from "./DealCard";

const DealOfTheDayRow = async () => {
  const deals = await getDeals();
  return (
    <div className="mt-12 sm:mt-16">
      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:mb-7 sm:text-3xl">
        Deal of the <span className="text-[#3E80DD]">Day</span>
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDayRow;
