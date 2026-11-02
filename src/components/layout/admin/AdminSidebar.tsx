import Link from "next/link";

const navigation = [
    { title: "Overview", href: "/admin", },
    { title: "Products", href: "/admin/products", },
    { title: "Orders", href: "/admin/orders", },
    { title: "Customers", href: "/admin/customers", },
    { title: "Settings", href: "/admin/settings", },
];

export default function AdminSidebar() {
    return (
        <aside className="hidden w-64 shrink-0 bg-gray-950 text-white lg:flex lg:flex-col">

            <div className="border-b border-gray-800 px-6 py-7">
                <Link href="/admin" className="text-xl font-black">
                    DevShop <span className="text-indigo-500">Admin</span>
                </Link>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-6">
                {navigation.map((item) => (
                    <Link key={item.href} href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 
                            transition hover:bg-gray-800 hover:text-white"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>

            <div className="border-t border-gray-800 p-4">
                <Link href="/" className="block rounded-xl px-4 py-3 text-sm text-gray-400
                            hover:bg-gray-800 hover:text-white"
                >
                    Back to Store
                </Link>
            </div>
        </aside>
    );
}