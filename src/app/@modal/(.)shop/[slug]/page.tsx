import Link from "next/link";

interface IProductModalProps {
  params: Promise<{slug: string;}>;
};

export default async function ProductModal({params,}: IProductModalProps) {
  const { slug } = await params;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{slug}</h2>
          <Link href="/shop" className="rounded-full bg-gray-100 px-4 py-2">Close</Link>
        </div>
        <p className="mt-6 text-gray-500">Product preview</p>

      </div>
    </div>
  );
}