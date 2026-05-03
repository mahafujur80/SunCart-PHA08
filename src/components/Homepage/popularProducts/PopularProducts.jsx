import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const PopularProducts = async() => {
    const res = await fetch('https://suncart-e-com.vercel.app/products.json')
    const products = await res.json();
  
    return (
        <div className="py-10 space-y-5">
           <div className="flex max-sm:flex-col items-center justify-between animate__animated animate__fadeInUp animate__delay-1s">
             <div>
                <h1 className="text-2xl font-black" >Popular <span className="text-blue-500">Products</span></h1>
                <p className=" text-zinc-500">Don’t miss out on these hot-selling items</p>
             </div>
             <Link href={'/products'}><Button variant="ghost">View All <BsArrowRight/> </Button></Link>
           </div>
            <div className="grid max-md:grid-cols-2 grid-cols-3 gap-2 lg:gap-5"> 
                {
                 products.slice(6,9).map(product =><ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;