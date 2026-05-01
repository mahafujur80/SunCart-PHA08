import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '@/assets/brands/brandLogo1.jpg'
import logo2 from '@/assets/brands/brandLogo2.jpg'
import logo3 from '@/assets/brands/brandLogo3.jpg'
import logo4 from '@/assets/brands/brandLogo4.jpg'
import logo5 from '@/assets/brands/brandLogo5.jpg'
import logo6 from '@/assets/brands/brandLogo6.jpg'

const TopBrand = () => {
    return (
        <div className='my-10 space-y-5'>
            <h1 className="text-2xl font-black text-center animate__animated animate__fadeInUp animate__delay-1s"><span className='text-blue-500'>Top</span> Brands</h1>
            <div className="h-28  flex">
                <Marquee pauseOnHover>

                    <div className="flex  items-center justify-center h-20 w-40 ">
                        <Image src={logo1} alt="brand-logo " width={100} height={70} />
                    </div>

                    <div className=" flex  items-center justify-center h-24 w-40 ">
                        <Image src={logo2} alt="brand-logo" width={100} height={100} />
                    </div>

                    <div className=" flex  items-center justify-center h-24 w-40 ">
                        <Image src={logo3} alt="brand-logo" className='' width={100} height={100} />
                    </div>

                    <div className=" flex  items-center justify-center h-24 w-40 ">
                        <Image src={logo4} alt="brand-logo" width={100} height={100} />
                    </div>

                    <div className=" flex  items-center justify-center h-24 w-40 ">
                        <Image src={logo5} alt="brand-logo" width={100} height={100} />
                    </div>

                    <div className=" flex  items-center justify-center h-24 w-40 ">
                        <Image src={logo6} alt="brand-logo" width={100} height={100} />
                    </div>

                </Marquee>
            </div>
        </div>
    );
};

export default TopBrand;