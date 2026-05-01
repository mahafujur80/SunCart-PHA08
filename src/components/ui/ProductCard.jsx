import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ProductCard = ({product}) => {
    return (
        <div className='border rounded-xl p-4'>
            <div>
                <Image src={product.image} alt={product.name} width={200} height={200}
                className='w-full rounded-xl object-cover'                              
                />
            
            </div>
            <div className='space-y-2 mt-5'>
                <h1 className='md:text-lg lg:text-xl font-semibold'>{product.name}</h1>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold md:text-xs lg:text-xl'>${product.price}</p>
                    <p className='flex max-md:text-xs items-center gap-2'><IoIosStar className='text-xl text-yellow-400' />{product.rating}</p>
                </div>
                <Button className='w-full max-md:text-xs'>View Details</Button>
            </div>
        </div>
    );
};

export default ProductCard;