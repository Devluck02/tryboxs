import { getDeals } from "@/lib/api";
import DealCard from "@/components/dealoftheday/DealCard";

export const metadata = {
  title: "Deal of the Day",
  description:
    "Today's handpicked best deals on fashion, electronics, beauty and more — only on TryBoxs.",
};

const DealOfTheDayPage = async () => {
  const deals = await getDeals();

  return (
    <div className="mt-6 sm:mt-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Deal of the <span className="text-[#3E80DD]">Day</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Handpicked deals updated daily — grab them before they expire!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDayPage;
