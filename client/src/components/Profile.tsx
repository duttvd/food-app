import { Loader2, Locate, Mail, MapPin, MapPinHouse, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
    const [profileDeta, setProfileDeta] = useState({
        fullname: "",
        email: "",
        address: "",
        city: "",
        country: "",
        profilepicture: "",
    });
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("");
    const loading = false;

    const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setSelectedProfilePicture(result);
                setProfileDeta((prevDeta) => ({
                    ...prevDeta,
                    profilepicture: result, // Fixed typo here
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileDeta({ ...profileDeta, [name]: value });
    };

    const updeteProfileHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(profileDeta);
    };

    return (
        <form onSubmit={updeteProfileHandler} className="max-w-7xl mx-auto my-5">
            <div className="flex items-center justify-betwee">
                <div className="flex items-center gap-2">
                    <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
                        <AvatarImage src={selectedProfilePicture} />
                        <AvatarFallback>CN</AvatarFallback>
                        <input
                            ref={imageRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={fileChangeHandler}
                        />
                        <div
                            onClick={() => imageRef.current?.click()}
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
                        >
                            <Plus className=" text-white w-8 h-8 " />
                        </div>
                    </Avatar>
                    <Input
                        type="text"
                        name="fullname" // Fixed this name attribute
                        value={profileDeta.fullname}
                        onChange={ChangeHandler}
                        className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
                <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
                    <Mail className="text-gray-500" />
                    <div className="w-full">
                        <Label>Email</Label>
                        <input
                            name="email"
                            value={profileDeta.email}
                            onChange={ChangeHandler}
                            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
                    <Locate className="text-gray-500" />
                    <div className="w-full">
                        <Label>Address</Label>
                        <input
                            name="address"
                            value={profileDeta.address}
                            onChange={ChangeHandler}
                            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
                    <MapPin className="text-gray-500" />
                    <div className="w-full">
                        <Label>City</Label>
                        <input
                            name="city"
                            value={profileDeta.city}
                            onChange={ChangeHandler}
                            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
                    <MapPinHouse className="text-gray-500" />
                    <div className="w-full">
                        <Label>Country</Label>
                        <input
                            name="country"
                            value={profileDeta.country}
                            onChange={ChangeHandler}
                            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                {loading ? (
                    <Button disabled className="bg-orange hover:bg-slate-600">
                        <Loader2 className="mr-2  w-4 h-4 animate-spin" />
                        please wait
                    </Button>
                ) : (
                    <Button className="bg-orange hover:bg-slate-600">Update</Button>
                )}
            </div>
        </form>
    );
};

export default Profile;
