export type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    category: string;
    isFeatured?: boolean;
};