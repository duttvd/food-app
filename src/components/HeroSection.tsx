import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Heroimage from "../assets/hero_pizza.png";

const HeroSection = () => {
    const [searchText, setSearchText] = useState<string>("");

    return (
        <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto md:p-10 items-center justify-between gap-10 m-4">
            {/* Left Side: Text and Search */}
            <div className="flex flex-col gap-10 w-full md:w-[50%]">
                <div className="flex flex-col gap-4 text-sm">
                    <h1 className="font-bold md:font-extrabold md:text-4xl text-3xl">
                        Order Food anytime & anywhere
                    </h1>
                    <p className="text-gray-500">
                        Hey! Our Delicious food is waiting for you, we are always near to you.
                    </p>
                </div>
                <div className="relative flex items-center gap-2">
                    <Input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-10 shadow-xl"
                    />
                    <Search className="text-gray-500 absolute inset-y-2 left-2" aria-label="Search Icon" />
                    <button className="bg-orange rounded-sm text-white hover:bg-slate-600 px-4 py-2">
                        Search
                    </button>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-[50%]">
                <img
                    src={Heroimage}
                    alt="Delicious Pizza Hero Image"
                    className="object-cover w-full max-h-[500px] max-w-full"
                />
            </div>
        </div>
    );
};

export default HeroSection;
