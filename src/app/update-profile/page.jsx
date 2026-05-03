'use client';
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import {  useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

const UpdateProfile = () => {
    const router = useRouter()
    const updateProfile = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const updatedData = Object.fromEntries(formData.entries());
    
            const { data, error } = await authClient.updateUser({
                image: updatedData.photoUrl,
                name: updatedData.name,
            });
    
            if (error) {
                toast.error(error.message);
            } else if (data) {
                toast.success("Profile updated successfully!");
                router.push('/my-profile');
            }
    
        }

    return (
        <div>
            <div className="py-10 flex flex-col items-center justify-center min-h-[70vh] border">
                <div className="animate__animated animate__zoomIn shadow-gray-400 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-lg max-sm:w-[90%] px-5 lg:px-10 py-6">
                    <h1 className="text-2xl font-bold text-blue-500 text-center">Update Profile</h1>
                    <Form onSubmit={updateProfile} className="flex lg:w-96 flex-col gap-4" >
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
                       
                        <div className="flex gap-2 mt-4">
                            <Button type="submit" className="w-full" color="primary">
                                <FaCheck />
                                Update Profile
                            </Button>

                            <Button type="reset" variant="flat" className="w-full text-red-500">
                                <MdRefresh />
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;