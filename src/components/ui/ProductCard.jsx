import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ProductCard = ({product}) => {
    return (
        <div className='border hover:shadow-lg hover:-translate-y-1.5 transition duration-300 rounded-xl max-md:p-2 lg:p-4 animate__animated animate__bounceInUp animate__slow'>
            <div className='h-45'>
                <Image src={product.image} alt={product.name} width={200} height={200}
                className='w-full h-full rounded-xl object-center'                              
                />
            
            </div>
            <div className='space-y-2 mt-5'>
                <h1 className='md:text-xs lg:text-xl font-semibold max-sm:line-clamp-1'>{product.name}</h1>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold md:text-xs lg:text-xl'>$ {product.price}</p>
                    <p className='flex max-md:text-xs items-center gap-2'><IoIosStar className='text-xl text-yellow-400' />{product.rating}</p>
                </div>
                <Link href={`/ProductsDetails/${product.id}`}><Button className='w-full max-md:text-xs'>View Details</Button></Link>
            </div>
        </div>
    );
};

export default ProductCard;