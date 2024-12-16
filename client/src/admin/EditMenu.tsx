import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuFormSchema, menuSchema } from "@/schema/MenuSchema";
import { Loader2 } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";

const EditMenu = ({
    selectedMenu,
    editOpen,
    setEditOpen,
}: {
    selectedMenu: MenuFormSchema;
    editOpen: boolean;
    setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [input, setInput] = useState<MenuFormSchema>({
        title: selectedMenu?.title || "",
        description: selectedMenu?.description || "",
        price: selectedMenu?.price || "0",
        image: undefined,
    });
    const loading = false;
    const [error, setErrors] = useState<Partial<MenuFormSchema>>({});


    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({
            ...input,
            [name]: type === "number" ? Number(value) : value,
        });
    };

    const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setInput({
            ...input,
            image: file,
        });
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
        const result = menuSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<MenuFormSchema>);
            return;

        }

    };

    useEffect(() => {
        if (selectedMenu) {
            setInput({
                title: selectedMenu.title || "",
                description: selectedMenu.description || "",
                price: selectedMenu.price || "0",
                image: undefined,
            });
        }
    }, [selectedMenu]);

    return (
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Menu</DialogTitle>
                    <DialogDescription>
                        Update your menu to keep your offerings fresh and exciting!
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
                        {error && <span className="text-xs text-red-800 font-medium">{error.name}</span>}
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
                        {error && <span className="text-xs text-red-800 font-medium">{error.description}</span>}
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
                        {error && <span className="text-xs text-red-800 font-medium">{error.price}</span>}
                    </div>
                    <div>
                        <Label>Upload Menu Image</Label>
                        <Input
                            type="file"
                            name="image"
                            onChange={fileChangeHandler}
                        />
                        {error && <span className="text-xs text-red-800 font-medium">{error.image?.name}</span>}
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
    );
};

export default EditMenu;
