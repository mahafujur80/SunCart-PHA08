'use client';
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdRefresh } from "react-icons/md";

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name, // required
            email: userData.email, // required
            password: userData.password, // required
            image: userData.photoUrl,
        });
        if (error) {
            toast.error(error.message)
        } else if (data) {
            toast.success("Registration successful!");
            redirect('/login');
        }
    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div>
            <div className="py-10 flex flex-col items-center justify-center min-h-[70vh] border">
                <div className="border shadow-lg rounded-lg max-sm:mx-2 px-4 py-6">
                    <h1 className="text-2xl font-bold text-blue-500 text-center">Register</h1>
                    <Form onSubmit={onSubmit} className="flex lg:w-96 flex-col gap-4" >
                        {/* name */}
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>
                        {/* photo url */}
                        <TextField
                            isRequired
                            name="photoUrl"
                            validate={(value) => {
                                if (!/^https?:\/\//.test(value)) {
                                    return "Please enter a valid URL";
                                }
                                return null;
                            }}
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="https://example.com/photo.jpg" />
                            <FieldError />
                        </TextField>
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
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
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
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        <div className="flex gap-2 mt-4">
                            <Button type="submit" className="w-full" color="primary">
                                <FaCheck />
                                Submit
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
                    <p className="text-center py-2 text-slate-400">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;