import { notFound } from "next/navigation";

interface ICategoryPageProps{
    params : Promise<{slug:string[]}>;
};

const categories = [
    {slug:["electronics"],title:"Electronics"},
    {slug:["electronics","mobile"],title:"Mobile"}, 
    {slug:["electronics","mobile","apple"],title:"Apple"}, 
]


export default async function CategoryPage({params}:ICategoryPageProps) {
    const {slug} = await params;
    const category = categories.find(x=>
        x.slug.length === slug.length &&
        x.slug.every((y,i)=>y = slug[i])
    );

    if(!category) notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm text-gray-500">
            {slug.join("/")}
        </p>
        <h1 className="mt-4 text-4xl font-bold">
            {category.title}
        </h1>
    </main>
  )
}
