import { products } from "../data/products";

export async function getProductBySlug(slug: string) {
    return products.find(product => product.slug === slug) ?? null
}

export async function getProductBySlugAndCategory(slug: string, category: string) {
    return products.find(product => 
        product.slug === slug && product.category === category) ?? null
}