import Footer from "@/components/layout/store/Footer";
import Navbar from "@/components/layout/store/Navbar";

export default function StoreLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}