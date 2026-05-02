"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaUserEdit } from "react-icons/fa";

const ProfileUpdateModal = () => {
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
        }

    }
    

    return (
        <Modal>
            <Button variant="secondary"><FaUserEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaUserEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={updateProfile} className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full"
                                        isRequired
                                        name="name"
                                        type="text"
                                        validate={(value) => {
                                            if (value.length < 3) {
                                                return "Name must be at least 3 characters";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Name</Label>
                                        <Input placeholder="Enter Your  Name" />
                                        <FieldError />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        isRequired
                                        name="photoUrl"
                                        type="text"
                                        validate={(value) => {
                                            if (!/^https?:\/\//.test(value)) {
                                                return "Please enter a valid URL";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Photo Url</Label>
                                        <Input placeholder="Enter Photo Url" />
                                        <FieldError />
                                    </TextField>
                                    {/* submit ar jonno  */}
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
export default ProfileUpdateModal;