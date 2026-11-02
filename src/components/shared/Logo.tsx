import Link from "next/link";

interface ILogoProps{
  variant?: "dark" | "light";
};

export default function Logo({variant = "dark",}: ILogoProps) {
  const color = variant === "dark"? "text-gray-950": "text-white";

  return (
    <Link href="/" className={`text-2xl font-black tracking-tight ${color}`}>
      dev<span className="text-indigo-600">shop</span>
    </Link>
  );
}