import React from 'react';

const SummerCareCard = ({careTips}) => {
//   const hydrationData = {
//     title: "Hydration Tips",
//     icon: "💧",
//     tips: [
//       { icon: "🥤", text: "Drink 2–3L Water Daily" },
//       { icon: "🍉", text: "Eat Water-rich Foods" },
//       { icon: "🧃", text: "Avoid Sugary Drinks" },
//       { icon: "🧂", text: "Electrolytes Intake" }
//     ]
//   };


    return (
        <div className='shadow-lg p-3 bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl animate__animated animate__fadeInUp animate__slow'>
            <h1 className='text-center text-xl font-semibold text-gray-800 ' > {careTips.title}  {careTips.icon}</h1>
            <div className='grid grid-cols-2 gap-x-2'>
                {careTips.tips.map((tip, index) =>{
                    return (
                        <div key={index} className='flex bg-gray-50 rounded hover:scale-105 transition duration-200 p-1  items-center gap-2 mt-3'>
                            <div className='  bg-gray-300 p-3 w-10 h-10 rounded-full flex items-center justify-center'><span className='text-2xl'>{tip.icon}</span></div>
                            <p>{tip.text}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
  );
};

export default SummerCareCard;