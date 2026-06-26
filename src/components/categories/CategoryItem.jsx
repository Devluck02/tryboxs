import Link from "next/link";

const CategoryItem = ({ category }) => {
  const Icon = category.icon;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="flex flex-col items-center gap-3.5 rounded-2xl border border-gray-100 bg-white px-3 py-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-gray-200 hover:shadow-lg"
    >
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.bg} ${category.text}`}
      >
        <Icon size={30} strokeWidth={1.75} />
      </span>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-bold leading-tight text-slate-800 sm:text-sm">
          {category.name}
        </span>
        <span className="text-[10px] font-medium text-gray-400 sm:text-xs">
          {category.deals}+ Deals
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
