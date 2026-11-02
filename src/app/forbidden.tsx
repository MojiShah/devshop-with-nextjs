import Link from "next/link";

export default function Forbidden() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">403</h1>

      <h2 className="mt-4 text-2xl font-semibold">Access denied</h2>

      <p className="mt-3 text-gray-500">
        You do not have permission to access this resource.
      </p>

      <Link href="/" className="mt-8 rounded-lg bg-black px-6 py-3 text-white">Return to Store</Link>
    </main>
  );
}