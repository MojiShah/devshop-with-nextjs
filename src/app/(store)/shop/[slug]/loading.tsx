export default function ProductLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-3xl bg-gray-200" />

        <div className="space-y-6">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

          <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200" />

          <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />

          <div className="h-32 animate-pulse rounded bg-gray-200" />

          <div className="h-12 w-full animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </main>
  );
}