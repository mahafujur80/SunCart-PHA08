'use client';
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdRefresh } from "react-icons/md";

const LoginPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    console.log(callbackUrl)

    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
            rememberMe: true,
        });
        if (data) {
            toast.success("Login successful!");
            router.push(callbackUrl || "/");
        }
        if (error) {
            toast.error(error.message)
        }
    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <div className="py-10 flex flex-col items-center justify-center min-h-[70vh]">
                <div className="animate__animated animate__zoomIn shadow-gray-400 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-lg max-sm:w-[98%] px-5 lg:px-10 py-6">
                    <h1 className="text-2xl font-bold text-blue-500 text-center">Login</h1>
                    <Form onSubmit={onSubmit} className="flex lg:w-96 flex-col gap-4" >
                        {/* email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        {/* password */}

                        <TextField className="w-full"
                            name="password"
                            isRequired
                            minLength={8}
                            type="password"
                            validate={(value) => {
                                if (!value) {
                                    return "Password must be required";
                                }
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <InputGroup>
                                <InputGroup.Input
                                    placeholder="Enter Your Password"
                                    className="w-full"
                                    type={isVisible ? "text" : "password"}
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <BsEye className="size-4" /> : <BsEyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <FieldError />
                        </TextField>

                        <div className="flex gap-2 mt-4">
                            <Button type="submit" className="w-full" color="primary">
                                <FaCheck />
                                Login
                            </Button>

                            <Button type="reset" variant="flat" className="w-full text-red-500">
                                <MdRefresh />
                                Reset
                            </Button>
                        </div>
                    </Form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
                        <FcGoogle />  Continue with Google
                    </Button>
                    <p className="text-center py-2 text-slate-400">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;