import Footer from "@/components/layout/store/Footer";
import Navbar from "@/components/layout/store/Navbar";

interface IStoreLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function StoreLayout({children,modal}: IStoreLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        {children}
        {modal}
      </main>
      <Footer />
    </>
  );
}