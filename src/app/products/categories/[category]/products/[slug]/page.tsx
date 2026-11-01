interface IProductWithCategoryDetailPageProps {
    params: Promise<{
        category: string
        slug: string
    }>;
};


export default async function ProductWithCategoryDetailPage(
    { params }: IProductWithCategoryDetailPageProps) {
        const {category,slug} = await params;
    return (
        <main className="mx-auto max-w-5xl p-8">
            <h1 className="text-3xl font-bold">Product With Category Detail</h1>
            <div className="mt-6 space-y-3">
            </div>
                <p>Category: {category}</p>
                <p>Product Slug: {slug}</p>
        </main>
    )
}
