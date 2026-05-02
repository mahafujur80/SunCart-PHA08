import { Button, Chip, Kbd } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

const ProductsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://suncart-e-com.vercel.app/products.json')
    const products = await res.json();
    const targetPd = products.find(pd => pd.id === Number(id));
  
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className='w-full lg:max-w-[50%] mx-auto  border rounded-xl p-4'>
                <div className='h-70 w-full relative'>
                    <Image src={targetPd.image} alt={targetPd.name} width={300} height={250}
                        className='w-full h-full rounded-xl'
                    />
                    <p className="absolute top-2 right-2"><Chip color="warning" variants='primary'>🔥 {targetPd.category}</Chip></p>
                </div>
                <div className='space-y-2 mt-5'>
                    <div>
                        <div className="flex items-center gap-2 my-2">
                            {
                                targetPd.tags.map((tag, index) => {
                                    return (
                                        <Chip key={index} color="primary" className="mr-2">{tag}</Chip>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className='md:text-xs lg:text-2xl font-semibold max-sm:line-clamp-1'>{targetPd.name}</h1>
                            <p className='mr-10  flex max-md:text-xs items-center gap-2 text-xl'><IoIosStar className='text-xl text-yellow-400' />{targetPd.rating}</p>
                        </div>
                        <p className="text-gray-700 text-sm">{targetPd.description}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-md font-semibold">Brand: </p>
                            <p><Chip color="accent">{targetPd.brand}</Chip></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <h3 className="text-lg">Size:</h3>
                        {
                            targetPd.sizes.map((tag, index) => {
                                return (
                                    <Kbd key={index} color="primary" className="mr-2">{tag}</Kbd>
                                )
                            })
                        }
                    </div>
                    <p className='font-semibold md:text-xs lg:text-xl'>$ {targetPd.price}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-md font-semibold">Stock:</p>
                        <p className="text-gray-700">{targetPd.stock} only</p>
                    </div>
                    <Link href={'#'}><Button className='w-full max-md:text-xs'>Buy Now</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsPage;