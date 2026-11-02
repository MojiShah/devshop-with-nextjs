
import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/components/layout/MainNavbar";


export const metadata: Metadata = {
  title: {
    default : "Dev Shop",
    template : "%s | Dev Shop"
  },
  description: "Premium online shopping experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
