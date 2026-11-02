import AdminSidebar from "@/components/layout/admin/AdminSidebar";

interface IAdminLayoutProps {
    children: React.ReactNode;
    stats: React.ReactNode;
    orders: React.ReactNode;
    topProducts: React.ReactNode;
};

export default function AdminLayout({ children, stats, orders, topProducts, }: IAdminLayoutProps) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />

            <div className="min-w-0 flex-1">
                <header className="flex h-20 items-center justify-between border-b bg-white px-8">
                    <h1 className="text-lg font-semibold">Dashboard</h1>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">Admin</span>

                        <div className="flex size-10 items-center justify-center rounded-full 
                bg-indigo-100 font-semibold text-indigo-700">A</div>
                    </div>
                </header>

                <main className="p-6 md:p-8">
                    {children}
                    <section className="grid gap-6 md:grid-cols-3">
                        {stats}
                        {orders}
                        {topProducts}
                    </section>
                </main>
            </div>
        </div>
    );
}



