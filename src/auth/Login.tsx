import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";


const Login = () => {
  const loading = true;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="md-4">
          <h1 className="font-bold text-2xl">PateEats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" className="pl-10 focus-visible:ring-1" />
            <Mail className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label>Password</Label>
            <Input type="password" placeholder="Password" className="pl-10 focus-visible:ring-1" />
            <LockKeyhole className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <button className="bg-orange hover:bg-hoverOrange text-white rounded-md w-full h-full">
              <Loader2 className="mr-2 h-4 w-full animate-spin" /> Please wait
            </button>
          ) : (
            <button className="bg-orange hover:bg-hoverOrange text-white rounded-md w-full">Login</button>
          )}
        </div>
        <Separator />
        <p>
          Don't have an account?{" "}
          
        </p>
      </form>
    </div>
  );
};

export default Login;

