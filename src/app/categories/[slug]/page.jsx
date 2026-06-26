import { getCategoryBySlug, getCategories } from "@/lib/api";
import { notFound } from "next/navigation";
import CategoryPageClient from "@/components/categories/CategoryPageClient";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Deals & Offers`,
    description: `Best ${category.name} deals, discounts, coupons and offers — ${category.deals}+ deals on TryBoxs.`,
  };
}

const CategoryDetailPage = async ({ params }) => {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();
  return <CategoryPageClient slug={slug} />;
};

export default CategoryDetailPage;
