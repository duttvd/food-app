import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/UserSchema";
import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const signupSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    console.log(input);
  };

  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={signupSubmitHandler}
        className="md:p-8 w-full h-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="md-4">
          <h1 className="font-bold text-2xl">PateEats</h1>
        </div>


        <div className="mb-4">
          <div className="relative">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
            {errors.fullname && <span className="text-xs text-red-500">{errors.fullname}</span>}
          </div>
        </div>


        <div className="mb-4">
          <div className="relative">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>
        </div>


        <div className="mb-4">
          <div className="relative">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
            {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
          </div>
        </div>


        <div className="mb-4">
          <div className="relative">
            <Label>Contact</Label>
            <Input
              type="text"
              name="contact"
              placeholder="Contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneCall className="absolute inset-8 left-2 text-gray-500 pointer-events-none" />
            {errors.contact && <span className="text-xs text-red-500">{errors.contact}</span>}
          </div>
        </div>


        <div className="mb-10">
          {loading ? (
            <button className="bg-orange hover:bg-hoverOrange text-white rounded-md w-full h-full">
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </span>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-orange hover:bg-hoverOrange text-white rounded-md w-full"
            >
              Signup
            </button>
          )}
        </div>
        <Separator />
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
