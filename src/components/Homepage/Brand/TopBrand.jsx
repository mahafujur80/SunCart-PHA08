import Image from 'next/image';
import logo1 from '@/assets/brands/brandLogo1.jpg'
import logo2 from '@/assets/brands/brandLogo2.jpg'
import logo5 from '@/assets/brands/brandLogo5.jpg'
import logo6 from '@/assets/brands/brandLogo6.jpg'

const TopBrand = () => {
    const brands = [
  { name: "ADIDAS", logo: logo1 },
  { name: "NIVEA", logo: logo2 },
  { name: "PUMA", logo: logo6 },
  { name: "NIKE", logo: logo5 },
];
    return (
       <div className="my-10 space-y-5">

  <h1 className="text-2xl font-black text-center">
    <span className="text-blue-500">Top</span> Brands
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3">

      {brands.map((brand, i) => (
        <div
          key={i}
          className="hover:-translate-y-1.5 hover:shadow-lg transition duration-300 flex justify-center flex-col items-center animate__animated animate__zoomInDown animate__delay-2s   mx-2 bg-white rounded-lg shadow p-2">
          <div className="w-38 h-25 flex items-center justify-center">
            <p><Image src={brand.logo} alt={brand.name} width={100} height={100} className="object-contain h-full "/></p>
          </div>
          <p className="text-center text-xs sm:text-sm md:text-base text-blue-500">
            {brand.name}
          </p>
        </div>
      ))}
  </div>
</div>
    );
};

export default TopBrand;