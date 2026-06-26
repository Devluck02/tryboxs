import { CATEGORIES } from "@/constants/categories";
import CategoriesGrid from "@/components/categories/CategoriesGrid";

export const metadata = {
  title: "All Categories | TryBoxs",
  description: "Explore deals and offers by category on TryBoxs.",
};

const CategoriesPage = () => {
  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          All <span className="text-[#3E80DD]">Categories</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {CATEGORIES.length} categories with exclusive deals & coupons
        </p>
      </div>

      <CategoriesGrid />
    </div>
  );
};

export default CategoriesPage;
