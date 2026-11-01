export type TProduct={
    id:number;
    title:string;
    slug:string;
    category:string;
    price:number;
    description:string;
    image:string;
}

export const products:TProduct[]=[
    {
    id: 1,
    title: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    category: "electonics",
    price: 1200,
    description: "Apple flagship smartphone",
    image: "/images/iphone.jpg",
},
{
    id: 2,
    title: "MacBook Pro M4",
    slug: "macbook-pro-m4",
    category: "electonics",
    price: 2400,
    description: "Professional Apple laptop",
    image: "/images/macbook.jpg",
},
{
    id: 3,
    title: "AirPods Pro",
    slug: "airpods-pro",
    category: "electonics",
    price: 250,
    description: "Wireless noise cancelling earbuds",
    image: "/images/airpods.jpg",
  },
]

