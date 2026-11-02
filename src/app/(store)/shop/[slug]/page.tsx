import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {getProductBySlug} from "@/features/products/services/product.service";

interface IProductPageProps{
    params: Promise<{slug: string;}>;
};

export async function generateMetadata({params,}: IProductPageProps): Promise<Metadata> {

  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) 
    return {title: "Product Not Found",};

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image, alt: product.title,},],
    },

  };

}

export default async function ProductPage({params,}: IProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  
  return (
    <main>
      <h1>{product.title}</h1>
    </main>
  );
}