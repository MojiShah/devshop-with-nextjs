import Link from "next/link";

const products = [
  { id: 1, title: "iPhone 16 Pro" },
  { id: 2, title: "MacBook Pro M4" },
  { id: 3, title: "AirPods Pro" },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
        <h1 className="text-3xl font-bold">All Products</h1>

        <div className="mt-6 space-y-4">
            {
                products.map(product=>
                    <div key={product.id} className="rounded-lg border p-4">
                        {product.title}
                    </div>
                )
            }
        </div>
        
        <Link href='/products/categories' className="mt-8 inline-block text-blue-600">
            View Categories
        </Link>
    </main>
  )
}

