import ProfileUpdateModal from "@/components/ui/ProfileUpdateModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { BsFillInfoSquareFill, BsPatchCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdOutlineEmail, MdOutlineSecurityUpdateGood, MdOutlineUpdate } from "react-icons/md";


const MyProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    console.log({session, user})

    return (
        <div className="max-w-5xl mx-auto min-h-screen flex justify-center items-center ">
            <div className="max-sm:my-5 rounded-xl hover:shadow-lg shadow-blue-200 shadow bg-slate-50 h-auto w-full lg:w-[50%]">
                <div className="w-full h-50">
                    <div className='relative'>
                        <div className="w-full rounded-xl h-30 bg-gradient-to-t from-blue-100 to-blue-300">
                        </div>
                        <div className="absolute flex items-center justify-center top-17 left-5 h-30 w-30 rounded-3xl">
                            <Image className="object-cover w-full h-full rounded-3xl" src={user?.image} alt={user?.name} width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div className="py-3 px-5 space-y-10">
                    <div className="flex max-sm:flex-col items-center justify-between">
                        <div>
                            <h1 className="flex items-center gap-2  text-xl font-bold"><MdDriveFileRenameOutline /> {user?.name}</h1>
                            <p className=" flex items-center gap-2 text-zinc-500"><MdOutlineEmail /> {user?.email} {user?.emailVerified && <BsPatchCheckFill className="text-blue-500" /> } </p>
                        </div>
                        <div>
                            <ProfileUpdateModal/>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="shadow-md space-y-3 p-2 hover:-translate-y-1 transform transition-all ">
                            <p className="text-lg text-yellow-500 font-semibold"> Member</p>
                            <h1 className="text-gray-700"> Status</h1>
                        </div>
                        <div className="shadow-md space-y-3 p-2 hover:-translate-y-1 transform transition-all ">
                            <p className="text-lg text-green-500 font-semibold">Active</p>
                            <h1 className="text-gray-700">Account</h1>
                        </div>
                        <div className="shadow-md space-y-3 p-2 hover:-translate-y-1 transform transition-all ">
                            <p className={`text-lg ${user?.emailVerified ? "text-green-500" : "text-red-500"} font-semibold`}>{user?.emailVerified ? "Verified" : "Not Verified"}</p>
                            <h1 className="text-gray-700">Email Verified</h1>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">More Info <BsFillInfoSquareFill /></h1>
                        <p className="flex items-center gap-2 text-zinc-600"><FaUserCircle /> User ID: {user?.id}</p>
                        <p className="flex items-center gap-2 text-zinc-600"> <MdOutlineSecurityUpdateGood /> Last Updated: {new Date(user?.updatedAt).toLocaleString()}  </p>
                        <p className="flex items-center gap-2 text-zinc-600"> <MdOutlineUpdate /> Member Since: {new Date(user?.createdAt).toLocaleDateString()}  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;