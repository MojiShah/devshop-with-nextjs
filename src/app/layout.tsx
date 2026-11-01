
import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/components/layout/MainNavbar";


export const metadata: Metadata = {
  title: "Dev Shop",
  description: "Modern online store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
