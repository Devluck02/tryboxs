import {
  Shirt,
  Smartphone,
  Sofa,
  Sparkles,
  ShoppingBasket,
  Dumbbell,
  Gamepad2,
  Baby,
  Car,
  BookOpen,
} from "lucide-react";

export const CATEGORIES = [
  { name: "Fashion", slug: "fashion", icon: Shirt, bg: "bg-rose-100", text: "text-rose-500", deals: 320 },
  { name: "Electronics", slug: "electronics", icon: Smartphone, bg: "bg-blue-100", text: "text-blue-500", deals: 215 },
  { name: "Home & Furniture", slug: "home-furniture", icon: Sofa, bg: "bg-amber-100", text: "text-amber-500", deals: 180 },
  { name: "Beauty & Care", slug: "beauty", icon: Sparkles, bg: "bg-purple-100", text: "text-purple-500", deals: 260 },
  { name: "Grocery", slug: "grocery", icon: ShoppingBasket, bg: "bg-green-100", text: "text-green-500", deals: 145 },
  { name: "Sports & Fitness", slug: "sports-fitness", icon: Dumbbell, bg: "bg-teal-100", text: "text-teal-500", deals: 198 },
  { name: "Gaming", slug: "gaming", icon: Gamepad2, bg: "bg-indigo-100", text: "text-indigo-500", deals: 112 },
  { name: "Baby & Kids", slug: "baby-kids", icon: Baby, bg: "bg-pink-100", text: "text-pink-500", deals: 134 },
  { name: "Automotive", slug: "automotive", icon: Car, bg: "bg-slate-100", text: "text-slate-500", deals: 89 },
  { name: "Books", slug: "books-stationery", icon: BookOpen, bg: "bg-orange-100", text: "text-orange-500", deals: 76 },
];
