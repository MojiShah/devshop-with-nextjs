import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/features/products/components/product-card";
import { products } from "@/features/products/data/products";

const categories = [
  {
    title: "Electronics",
    slug: "electronics",
    image: "/images/categories/electronics.webp",
  },
  {
    title: "Fashion",
    slug: "fashion",
    image: "/images/categories/fashion.webp",
  },
  {
    title: "Accessories",
    slug: "accessories",
    image: "/images/categories/accessories.webp",
  },
];

export default function HomePage() {
  const featuredProducts = products.filter(
    (product) => product.isFeatured
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="relative overflow-hidden rounded-4xl-gray-950">
          <div className="grid items-center gap-8 px-8 py-16 md:grid-cols-2 md:px-16 md:py-24">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                New Collection
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Technology.
                <br />
                Designed for you.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-gray-400">
                Discover premium devices, accessories
                and products selected for everyday life.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                Explore Products
              </Link>
            </div>

            <div className="relative aspect-square">
              <Image
                src="/images/products/iphone-16-pro.webp"
                alt="iPhone 16 Pro"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Browse by category
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Shop Categories
            </h2>
          </div>

          <Link
            href="/categories"
            className="text-sm font-semibold text-gray-600 hover:text-black"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Carefully selected
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Featured Products
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}