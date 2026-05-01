import Banner from "@/components/Homepage/banner/Banner";
import TopBrand from "@/components/Homepage/Brand/TopBrand";
import PopularProducts from "@/components/Homepage/popularProducts/PopularProducts";
import SummerCareTips from "@/components/Homepage/SummerCareTips/SummerCareTips";


export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Banner />
      <PopularProducts />
      <SummerCareTips />
      <TopBrand />
    </div>
  );
}
