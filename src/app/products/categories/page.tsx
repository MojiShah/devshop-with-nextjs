import { categories } from "@/features/products/data/categories";
import Link from "next/link";

// const categories = [
//     { id: 1, title: "Electronics", slug: "electronics", },
//     { id: 2, title: "Fashion", slug: "fashion", },
// ];

export default function Categoriespage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">Product Categories</h1>
            <div className="mt-6 grid grid-cols-2 gap-4">
                {categories.map(category =>
                    <Link
                        key={category.id} 
                        href={`/products/categories/${category.slug}`}
                        className="rounded-xl border p-6 hover:bg-gray-100"
                        >
                            {category.title}
                    </Link>
                )}
            </div>
        </main>
    )
}
