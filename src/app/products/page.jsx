import ProductCard from "@/components/ui/ProductCard";

const ProductsPage = async () => {
    const res = await fetch('https://suncart-e-com.vercel.app/products.json')
    const products = await res.json();
    return (
        <div className="py-10 space-y-5">
            <h1 className="md:text-xl lg:text-2xl font-black text-center animate__animated animate__fadeInUp animate__delay-1s" >All <span className="text-blue-500">Products</span></h1>
            <div className="grid max-md:grid-cols-2 grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;