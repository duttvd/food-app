import { Timer } from 'lucide-react'

import { Badge } from './ui/badge'
const RestaurantDetail = () => {
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="w-full">
                <div className="relative w-full h-32 md:h-64 lg:h-72">
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="image" className='object-cover w-full h-full rounded-lg shadow-xl' />
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='my-5'>
                        <h1 className='font-medium text-lg'>Thali</h1>
                        <div className='flex gap-2 my-2'>
                            {
                                ["Biryani", "Momos"].map((cuisine: string, idx: number) => (
                                    <Badge key={idx}>{cuisine}</Badge>
                                ))
                            }

                        </div>
                        <div className='flex md:flex-row flex-col gap-2 my-5'>
                            <div className='flex items-center gap-2'>
                                <Timer />
                                <h1 className='flex items-center  gap-2 font-medium'>Delivery time: {" "}
                                    <span className='text-orange'>35 mins</span>
                                </h1>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default RestaurantDetail