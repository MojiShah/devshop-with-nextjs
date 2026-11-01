import Link from "next/link";

const navigationItems = [
    { title: "Home", href: "/", },
    { title: "Products", href: "/products", },
    { title: "Categories", href: "/products/categories", },
    { title: "About", href: "/about", },
];

export default function MainNavbar() {
  return (
    <header className="border-b bg-white">
            <nav className="mx-auto max-w-6xl flex items-center justify-between p-5">
                <Link href="/" className="text-2xl font-bold text-cyan-600">
                    DevShop
                </Link>
                <div className="flex items-center gap-6">
                    {navigationItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-gray-600 
                                        transition hover:text-black"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
  )
}
