import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Heroimage from "../assets/hero_pizza.png";

const HeroSection = () => {
    const [searchText, setSearchText] = useState<string>("");

    return (
        <div className="relative flex md:flex-row flex-col-reverse max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-between m-4 gap-10">

            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm -z-10"
                style={{ backgroundImage: "url('Cakewalk-Charm-Wallpaper-Mural-M.jpg')" }}
            ></div>


            <div className="flex flex-col gap-10 md:w-[50%]">
                <div className="flex flex-col gap-4 text-sm">
                    <h1 className="font-bold md:font-extrabold md:text-4xl text-4xl">
                        Order Food anytime & anywhere
                    </h1>
                    <p className="font-bold text-2xl text-black">
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
                    <Search className="text-gray-500 absolute inset-y-2 left-2  focus-visible:ring-1" aria-label="Search Icon" />
                    <button className="bg-orange rounded-sm text-white hover:bg-slate-600 px-4 py-2">
                        Search
                    </button>
                </div>
            </div>


            <div className="md:w-[50%]">
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
