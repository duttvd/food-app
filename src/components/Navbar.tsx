import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Separator } from "./ui/separator";


const Navbar = () => {
    const admin = true;
    const loading = false;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className=" font-bold md:font-extrabold text-2xl">Vishnu dutt</h1>
                </Link>
                <div className="hidden  md:flex items-center  gap-10 ">
                    <div className=" hidden md:flex items-center gap-6">
                        <Link to="/" className="hover:bg-slate-200 rounded-lg">Home</Link>
                        <Link to="/profile" className="hover:bg-slate-200 rounded-lg">Profile</Link>
                        <Link to="/order/status" className="hover:bg-slate-200 rounded-lg"> Order</Link>

                        {
                            admin && (
                                <Menubar>
                                    <MenubarMenu>
                                        <MenubarTrigger>
                                            Dashboard
                                        </MenubarTrigger>
                                        <MenubarContent>
                                            <Link to="/admin/restaurent">
                                                <MenubarItem>Restaurent</MenubarItem>
                                            </Link>
                                            <Link to="/admin/Menu">
                                                <MenubarItem>Menu</MenubarItem>
                                            </Link>
                                            <Link to="/admin/order">
                                                <MenubarItem>Order</MenubarItem>
                                            </Link>
                                        </MenubarContent>
                                    </MenubarMenu>

                                </Menubar>

                            )}
                    </div>
                    <div className=" flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem >
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Dark
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Link to="/card" className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button size={'icon'} className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-gray-500">5</Button>
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            {
                                loading ? (
                                    <button className=" bg-orange hover:bg-red-300 text-white rounded-md"> Please wait
                                        <Loader2 className=" ml-7 h-4 w-4 animate-spin" />
                                    </button>
                                ) : (
                                    <button className=" bg-orange rounded-sm text-white hover:bg-slate-600 px-4 py-2">Logout </button>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="md:hidden lg:hidden">
                    <MobileNavbar />

                </div>
            </div>
        </div>
    )
}

export default Navbar
const MobileNavbar = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon'} className=" rounded-full bg-slate-200 hover:bg-orange" variant="outline">
                    <Menu size={'18'} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className=" flex flex-row items-center justify-between mt-2 ">
                    <SheetTitle>Vishnu Dutt</SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem >
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>
                <Separator className="my-2" />
                <SheetDescription className="flex-1 ">
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><User />
                        <span>Profile</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><HandPlatter />
                        <span>Order</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><ShoppingCart />
                        <span>Cart(0)</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><SquareMenu />
                        <span>Menu</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><UtensilsCrossed
                    />
                        <span>Restaurent</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"><PackageCheck
                    />
                        <span>Restaurant Order</span>
                    </Link>
                </SheetDescription>
                <SheetFooter className=" flex flex-col gap-4">

                    <>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <h1 className=" font-bold">Vishnu dutt</h1>
                        </div>
                    </>

                    <SheetClose asChild>
                        <Button type="submit" className=" bg-orange hover:bg-slate-600">Logout</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}