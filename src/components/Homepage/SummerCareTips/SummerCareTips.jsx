import SummerCareCard from '@/components/ui/SummerCareCard';
import React from 'react';

const SummerCareTips = () => {
    return (
         <div className="py-10 space-y-5">
                    <h1 className="text-2xl font-black text-center" >Summer <span className='text-blue-500'>Care</span> Tips</h1>
                    <div className="grid grid-cols-3 gap-5"> 
                        <SummerCareCard/>
                    </div>
                </div>
    );
};

export default SummerCareTips;