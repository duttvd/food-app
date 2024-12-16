import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { restaurantFormSchema } from "@/schema/RestaurantSchema";
import { Loader2 } from "lucide-react";
import React, { FormEvent, useState } from "react";

const Restaurant = () => {
    const [input, setInput] = useState({
        restaurantName: "",
        city: "",
        country: "",
        deliveryTime: 0,
        cuisines: [],
        imageFile: undefined,
    });

    const [error, setErrors] = useState({});

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: type === 'number' ? (value) : value });

    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = restaurantFormSchema.safeParse(input);
        if (!result.success) {
            const fileErrors = result.error.formErrors.fieldErrors;
            setErrors(fileErrors);
            return;
        }

        console.log(input);
    };

    const loading = false;
    const Restauranthai = false;

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div>
                <h1>Add Restaurant</h1>
                <form onSubmit={submitHandler}>
                    <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
                        <div>
                            <Label>Restaurant name</Label>
                            <Input
                                type="text"
                                name="restaurantName"
                                value={input.restaurantName}
                                onChange={changeEventHandler}
                                placeholder="Enter your restaurant name"
                            />
                            {error && <span className="text-xs text-red-600 font-medium">{error.restaurantName}</span>}
                        </div>
                        <div>
                            <Label>City</Label>
                            <Input
                                type="text"
                                name="city"
                                value={input.city}
                                onChange={changeEventHandler}
                                placeholder="Enter your city name"
                            />
                            {error && <span className="text-xs text-red-600 font-medium">{error.city}</span>}
                        </div>
                        <div>
                            <Label>Country</Label>
                            <Input
                                type="text"
                                name="country"
                                value={input.country}
                                onChange={changeEventHandler}
                                placeholder="Enter your country name"
                            />
                            {error && <span className="text-xs text-red-600 font-medium">{error.country}</span>}
                        </div>
                        <div>
                            <Label>Delivery Time</Label>
                            <Input
                                type="number"
                                name="deliveryTime"
                                value={input.deliveryTime}
                                onChange={changeEventHandler}
                                placeholder="Enter your Delivery Time"
                            />
                            {error && <span className="text-xs text-red-600 font-medium">{error.deliveryTime}</span>}
                        </div>
                        <div>
                            <Label>Cuisines</Label>
                            <Input
                                type="text"
                                name="cuisines"
                                value={input.cuisines.join(",")}
                                onChange={(e) =>
                                    setInput({ ...input, cuisines: e.target.value.split(",") })
                                }
                                placeholder="Enter your Cuisines (comma separated)"
                            />
                            {error && <span className="text-xs text-red-600 font-medium">{error.cuisines}</span>}
                        </div>
                        <div>
                            <Label>Upload Restaurant Image</Label>
                            <Input type="file" accept="image/*" name="imageFile" />
                            {error && <span className="text-xs text-red-600 font-medium">{error.image}</span>}
                        </div>
                    </div>
                    <div className="my-5 w-full">
                        {loading ? (
                            <Button disabled className="bg-orange hover:bg-slate-600 w-full">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button className="bg-orange hover:bg-slate-600 w-full">
                                {Restauranthai
                                    ? "Update your restaurant"
                                    : "Add New Restaurant"}
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Restaurant;
