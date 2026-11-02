import Footer from "@/components/layout/Footer";


export default function StoreLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <main className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}