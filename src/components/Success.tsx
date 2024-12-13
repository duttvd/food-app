import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const Success = () => {
    const orders = [1, 2, 3];
    if (orders.length === 0)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">Order Not Found!</h1>
            </div>
        )


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-1xl text-gray-800">
                        Order status:{" "}
                        <span className="text-blue-500">{"confirm".toUpperCase()}</span>
                    </h1>

                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-4">
                        Order Summary</h2>
                    {/* your order item display here */}
                    <div className=" mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src="https://static.toiimg.com/thumb/63799510.cms?width=1200&height=900" alt="" className="w-20 h-20 rounded-2xl object-cover" />
                                <h3 className="ml-5 text-gray-800 dark:text-gray-300 font-medium">Gulab Jamun</h3>
                            </div>
                            <div className="text-right">
                                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                                    <IndianRupee />
                                    <span className="tect-lg font-medium">70</span>

                                </div>
                            </div>
                        </div>
                        <Separator className="mt-4" />
                    </div>
                </div>
                <Link to="/cart">
                    <Button className="bg-orange shadow-xl hover:bg-gray-600 w-full py-3">Continue Shopping</Button>
                </Link>
            </div>
        </div>
    );
};

export default Success