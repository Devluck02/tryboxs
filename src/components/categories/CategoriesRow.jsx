import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/api";
import CategoryItem from "./CategoryItem";

const CategoriesRow = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-5 flex items-center justify-between sm:mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Shop by <span className="text-[#3E80DD]">Category</span>
        </h2>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm font-semibold text-[#3E80DD] transition-opacity hover:opacity-75"
        >
          View All <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
        {categories.slice(0, 6).map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesRow;
