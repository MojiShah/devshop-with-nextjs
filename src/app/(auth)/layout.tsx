export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <section className="w-full max-w-md rounded-2xl
       bg-white p-8 shadow-2xl">
        {children}
      </section>
    </main>
  );
}