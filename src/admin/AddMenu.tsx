import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import EditMenu from "./EditMenu";

const menus = [
    {
        title: "Gulab Jamun",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "70",
        image: "https://static.toiimg.com/thumb/63799510.cms?width=1200&height=900",
    },
    {
        title: "Jalebi",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "80",
        image: "https://img-global.cpcdn.com/recipes/85189667e5325541/680x482cq70/jalebi-recipe-main-photo.jpg",
    },
    {
        title: "Laddu",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "90",
        image: "https://i.ytimg.com/vi/y3dQ1fSv3xc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASLdcqi8-qiyqruktqURhKcoiWFQ",
    },
];

const AddMenu = () => {
    const [input, setInput] = useState<any>({
        title: "",
        description: "",
        price: "0",
        image: undefined,
    });
    const [open, setOpen] = useState<Boolean>(false);
    const [selectedMenu, setSelectedMenu] = useState<any>();
    const loading = false;

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: type === "number" ? Number(value) : value });
    };

    const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setInput({ ...input, image: file });
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex justify-between">
                <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
                    Available Menus
                </h1>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                        <Button className="bg-orange hover:bg-slate-600 flex items-center space-x-2">
                            <Plus />
                            <span>Add Menus</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add A New Menu</DialogTitle>
                            <DialogDescription>
                                Create a menu that will make your restaurant stand out.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={submitHandler} className="space-y-4">
                            <div>
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    value={input.title}
                                    onChange={changeEventHandler}
                                    placeholder="Enter Menu Name"
                                />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={changeEventHandler}
                                    placeholder="Enter Menu Description"
                                />
                            </div>
                            <div>
                                <Label>Price in (Rupees)</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    value={input.price}
                                    onChange={changeEventHandler}
                                    placeholder="Enter Menu Price"
                                />
                            </div>
                            <div>
                                <Label>Upload Menu Image</Label>
                                <Input
                                    type="file"
                                    name="image"
                                    onChange={fileChangeHandler}
                                />
                            </div>
                            <DialogFooter className="mt-5">
                                {loading ? (
                                    <Button disabled className="bg-orange hover:bg-slate-600">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button type="submit" className="bg-orange hover:bg-slate-600">
                                        Submit
                                    </Button>
                                )}
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-6 space-y-4">
                {menus.map((menu: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-lg border"
                    >
                        <img
                            src={menu.image}
                            alt=""
                            className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h1 className="font-bold text-lg">{menu.title}</h1>
                            <p className="text-gray-400 text-sm">{menu.description}</p>
                            <h2>
                                Price:{" "}
                                <span className="text-orange font-semibold mt-2">
                                    {menu.price}
                                </span>
                            </h2>
                        </div>
                        <Button
                            onClick={() => setSelectedMenu(menu)}
                            className="bg-orange hover:bg-slate-600 mt-4"
                        >
                            Edit
                        </Button>
                    </div>
                ))}
            </div>
            <EditMenu selectedMenu={selectedMenu} />
        </div>
    );
};

export default AddMenu;
