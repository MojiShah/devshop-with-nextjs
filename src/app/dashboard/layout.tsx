import AdminSidebar from "@/components/layout/admin/AdminSidebar";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="min-w-0 flex-1 p-8">
        {children}
      </main>
    </div>
  );
}