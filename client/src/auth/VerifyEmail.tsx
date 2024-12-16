import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Ensure Button is imported
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";


const VerifyEmail = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<any[]>([]);

    const loading = false;

    const handleChange = (idx: number, value: string) => {
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);
            if (value !== "" && idx < 5) {
                inputRef.current[idx + 1]?.focus();
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl">Verify your Email</h1>
                    <p className="text-sm text-gray-600">
                        Enter the 6 digit code sent to your Email address
                    </p>
                </div>
                <form>
                    <div className="flex justify-between">
                        {otp.map((letter, idx) => (
                            <Input
                                key={idx}
                                ref={(element) => (inputRef.current[idx] = element)}
                                type="text"
                                maxLength={1}
                                value={letter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(idx, e.target.value)}
                                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ))}
                    </div>
                    <Button disabled className="bg-orange hover:bg-hoverOrange mt-6 w-full">
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                Please wait
                            </>
                        ) : (
                            "Verify"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
