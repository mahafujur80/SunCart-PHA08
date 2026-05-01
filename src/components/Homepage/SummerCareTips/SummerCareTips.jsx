import SummerCareCard from '@/components/ui/SummerCareCard';
import React from 'react';

const SummerCareTips = async() => {
    const res  = await fetch('https://suncart-e-com.vercel.app/summerCare.json');
    const careTipsData = await res.json();
    
    return (
        <div className="py-10 px-2 space-y-5">
            <h1 className="text-2xl font-black text-center animate__animated animate__fadeInUp animate__delay-1s" >Summer <span className='text-blue-500'>Care</span> Tips</h1>
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5">
               {
                careTipsData.map(careTips => <SummerCareCard key={careTips.id} careTips={careTips}/>)
               }
            </div>
        </div>
    );
};

export default SummerCareTips;