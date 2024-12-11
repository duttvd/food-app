import { Minus, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import CheckoutConfirmPage from "./CheckoutConfirmPage"
import { useState } from "react"


const Card = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className=" flex flex-col max-w-7xl mx-auto my-10">
            <div className="flex justify-end ">
                <Button variant="link">Clear All</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Items</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Ouantity</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src="" alt="" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Biryani</TableCell>
                        <TableCell>85</TableCell>
                        <TableCell>
                            <div className="w-fit flex items-center rounded-full border-gray-200 dark:border-gray-800 shadow-sm">
                                <Button size={'icon'} variant={'outline'} className="bg-green-400 hover:bg-gray-600 rounded-full"><Minus /></Button>
                                <Button disabled variant={'outline'} className="font-bold bg-gray-400">2</Button>
                                <Button size={'icon'} variant={'outline'} className="bg-orange hover:bg-gray-600 rounded-full"><Plus /></Button>

                            </div>
                        </TableCell>
                        <TableCell>85</TableCell>
                        <TableCell className="text-right">
                            <Button size={'sm'} className="bg-orange hover:bg-slate-600">Remove</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow className="text-2xl">
                        <TableCell colSpan={5} >total</TableCell>
                        <TableCell className="text-right">85</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <div className="flex justify-end my-5">
                <Button onClick={(open) => setOpen(true)} className=" bg-orange hover:bg-gray-600">Proceed To Chackout</Button>

            </div>
            <CheckoutConfirmPage open={open} setOpen={setOpen} />
        </div>
    )
}

export default Card