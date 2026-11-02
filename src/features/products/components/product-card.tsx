import Image from "next/image";
import Link from "next/link";

import type { Product } from "../types/product.types";

interface IProductCardProps {
    product: Product;
};

export default function ProductCard({ product, }: IProductCardProps) {

    const hasDiscount =
        product.originalPrice !== undefined &&
        product.originalPrice > product.price;

    const discount = hasDiscount ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
            <Link href={`/shop/${product.slug}`} className="block">

                <div className="relative aspect-4/5 overflow-hidden bg-gray-50">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain p-6 transition duration-500 group-hover:scale-105"
                    />

                    {hasDiscount && (
                        <span className="absolute left-3 top-3 rounded-full 
                            bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                            {discount}% OFF
                        </span>
                    )}
                </div>

                <div className="space-y-3 p-4">
                    <div className="flex items-center gap-1 text-sm text-amber-500">
                        <span>★</span>
                        <span className="font-semibold">{product.rating}</span>
                        <span className="text-gray-400">({product.reviewCount}) </span>
                    </div>
                    <h3 className="line-clamp-2 min-h-12 font-semibold text-gray-900"> {product.title} </h3>
                    <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-lg font-bold text-gray-950">
                            ${product.price.toLocaleString("en-US")}
                        </span>

                        {hasDiscount && (<span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice!.toLocaleString("en-US")}
                        </span>)}
                    </div>
                </div>
            </Link>
        </article>
    );
}