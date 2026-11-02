"use client";

import { useEffect } from "react";

interface IProductErrorProps{
  error: Error & {digest?: string;};
  reset: () => void;
};

export default function ProductError({error,reset,}: IProductErrorProps) {
  useEffect(() => console.error(error), [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="mt-4 text-gray-500">We could not load this product.</p>

      <button onClick={reset} className="mt-8 rounded-full bg-black px-8 py-3 text-white">
        Try Again
      </button>

    </main>
  );
}