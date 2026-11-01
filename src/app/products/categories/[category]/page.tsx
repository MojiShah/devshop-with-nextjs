import { getCategoryBySlug } from "@/features/products/services/category.servise";
import { notFound } from "next/navigation";

export const instant = false;

interface ICategoryDetailpageProps{
    params:Promise<{category:string}>
}

export default async function CategoryDetailpage({params}:ICategoryDetailpageProps) {
    const {category} = await params;
    const detailcategory = await getCategoryBySlug(category)

    if(!category) notFound()
  return (
    <main className="mx-auto max-w-5xl p-8 ">
        <div className="rounded-2xl border p-8">
            <h1 className="text-3xl font-bold">{detailcategory?.title}</h1>
            <p className="mt-4 text-gray-600">{detailcategory?.slug}</p>
        </div>
    </main>
  )
}
