import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, LockKeyholeIcon, } from "lucide-react";
import { useState } from "react"

import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [newpassword, setNewPassword] = useState<string>("");
    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-slate-400 rounded-md">
            <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className=" font-extrabold text-2xl mb-2">New Password</h1>
                    <p className=" text-sm text-gray-600"> Enter your new password to reset old one</p>

                </div>
                <div className="relative w-full">
                    <Input
                        type="password"
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your new Password"
                        className="pl-10"
                    />
                    <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
                </div>
                {
                    loading ? (
                        <Button disabled className=" bg-orange hover:bg-orange rounded-sm"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                    ) : (
                        <button className=" bg-orange hover:bg-orange rounded-sm text-white"> Reset</button>
                    )
                }
                <span>
                    Back to{" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </span>
            </form>

        </div>
    )
}

export default ResetPassword