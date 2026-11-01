import { getCategoryBySlug } from "@/features/products/services/category.servise";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function GetServerCategory({ params }: Props) {
  const { category: slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="rounded-2xl border p-8">
      <h1 className="text-3xl font-bold">{category.title}</h1>
      <p className="mt-4 text-gray-600">{category.slug}</p>
    </div>
  );
}