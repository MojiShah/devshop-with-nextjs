import { getProductBySlug } from "@/features/products/services/product.servise";
import { notFound } from "next/navigation";


interface IProductDetailpageProps{
    params:Promise<{slug:string}>
}

export default async function ProductDetailpage({params}:IProductDetailpageProps) {
    const {slug} = await params;
    const product = await getProductBySlug(slug)

    if(!product) notFound()
  return (
    <main className="mx-auto max-w-5xl p-8 ">
        <div className="rounded-2xl border p-8">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-6 text-2xl font-bold">{product.price}</p>
        </div>
    </main>
  )
}
