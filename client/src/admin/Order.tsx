import { Label } from "@/components/ui/label";
import {
    Select,
    SelectGroup,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

const Order = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">Orders Overview</h1>
            <div className="space-y-8">
                {/* Restaurant Orders display here */}
                <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
                    <div className="flex-1 mb-6 sm:mb-0">
                        <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-100">Vishnu dutt</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Address: </span>
                            new avata nagar aligarh.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Total Amount: </span>
                            300
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Order Status</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {["Pending", "Confirm", "Preparing", "OutForDelivery", "Delivered"].map((status) => (
                                        <SelectItem key={status} value={status.toLowerCase()}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
                    <div className="flex-1 mb-6 sm:mb-0">
                        <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-100">radhe radhe</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Address: </span>
                            barsane ka mandir.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Total Amount: </span>
                            300
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Order Status</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {["Pending", "Confirm", "Preparing", "OutForDelivery", "Delivered"].map((status) => (
                                        <SelectItem key={status} value={status.toLowerCase()}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
                    <div className="flex-1 mb-6 sm:mb-0">
                        <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-100">krishna ji</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Address: </span>
                            vrindavan dham.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            <span className="font-semibold">Total Amount: </span>
                            300
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Order Status</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {["Pending", "Confirm", "Preparing", "OutForDelivery", "Delivered"].map((status) => (
                                        <SelectItem key={status} value={status.toLowerCase()}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Order;
