import { Button } from "@heroui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
    const image = 'https://i.ibb.co.com/1yMzyVK/suncart-banner-bg.png'
    return (
        <div style={{ backgroundImage: image ? `url(${image})` : 'none' }}
            className="my-5 rounded-xl bg-no-repeat bg-center bg-cover max-sm:h-[50vh] h-[70vh]"
        >
            <div className="flex items-center justify-around  max-sm:h-[50vh] h-[70vh] ">
                <div className="space-y-3  ">
                    <h1 className="text-3xl md:text-5xl font-black text-blue-600">
                        Hot Summer Sale
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                        Feel the Summer Vibes
                    </h2>

                    <div className="space-y-1">
                        <p className="text-gray-600">
                            Flat <span className="font-bold text-pink-500">30% Discount</span>
                        </p>

                        <p className="text-gray-600">
                            Limited time offer <br className="md:hidden" />
                            on all summer essentials
                        </p>
                    </div>

                    <Button >
                        Shop Now
                        <GoArrowRight className="animate-pulse" />
                    </Button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;