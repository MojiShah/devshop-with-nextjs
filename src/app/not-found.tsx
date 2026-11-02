import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
        Error 404
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="mt-8 rounded-full bg-black px-8 py-3 text-white">
        Back to Home
      </Link>
    </main>
  );
}