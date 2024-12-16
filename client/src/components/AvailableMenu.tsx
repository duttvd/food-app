import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"


const AvailableMenu = () => {
    return (
        <div className="md:p-4">
            <h1 className=" text-xl md:text-2xl font-extrabold">Available Menu</h1>
            <div className="grid md:grid-cols-3 space-y-4 md:space-y0">
                <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
                    <img src="https://dukaan.b-cdn.net/1000x1000/webp/4338846/1f4ed201-cae3-41e6-90b8-319709966f5f/veg-momos-529f50c1-d9ef-4a48-b7b7-362e50686264.JPG" alt="" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold  text-gray-800">Momo's</h2>
                        <p className=" text-sm text-gray-600 mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 className="text-lg font-semibold mt-4">
                            Price: <span className="text-orange">₹ 85</span>
                        </h3>

                    </CardContent>
                    <CardFooter className="p-4">
                        <Button className="bg-orange w-full hover:bg-slate-600">Add to Cart</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}

export default AvailableMenu