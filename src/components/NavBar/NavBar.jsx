'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const navData = [
    { id: "1", path: '/', name: 'Home' },
    { id: "2", path: '/products', name: 'Products' },
    { id: "3", path: '/my-profile', name: 'My Profile' },
]
const NavBar = () => {
    const pathName = usePathname()
    const navLink = <>
        {
            navData.map(nav => <Link className={`${pathName === nav.path ? 'border-b-2 border-blue-500' : ''}`} key={nav.id} href={nav.path}>{nav.name}</Link>)
        }
    </>
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-background/70 backdrop-blur-lg'>
            <nav className="container mx-auto sticky top-0 z-40 w-full border-b border-separator ">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">

                        <ul className={`md:hidden flex justify-center gap-5 w-full p-1 absolute top-16 ${isOpen ? 'left-0' : '-left-200'
                            } transition-all duration-500 bg-slate-200`}>
                            {navLink}
                        </ul>
                        <span className='flex items-center gap-3'>
                            {
                                <button onClick={() => setIsOpen(!isOpen)}> {isOpen ? <IoMdClose className='md:hidden text-2xl' /> : <FiMenu className='md:hidden text-2xl' />}</button>
                            }
                            <p className="font-bold  lg:text-3xl font-bold">Sun<span className='text-blue-500'>Cart</span></p>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 max-md:hidden">
                        {navLink}
                    </div>
                    <div>
                        <Link href={`/`}><Button className='lg:text-lg'>Log In</Button></Link>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default NavBar;