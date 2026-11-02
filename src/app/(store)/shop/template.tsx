export default function ShopTemplate({children,}: {children: React.ReactNode;}) {
  return (
    <div className="animate-in fade-in duration-300">
      {children}
    </div>
  );
}