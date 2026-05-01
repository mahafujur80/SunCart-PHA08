import { Separator } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-gray-300 py-10 ">
        <div className="max-w-5xl max-md:ml-5  mx-auto grid md:grid-cols-1 lg:grid-cols-12 gap-6">

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Contact Info</h1>
            <p> <Link className='hover:border-b' href={'#'}>Address: Dinajpur,Bangladesh</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Email: mahafujurrahman44@gamil.com</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Phone: +8801709534480</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Business hours (24H)</Link></p>
          </div>

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Privacy Policy</h1>
            <p> <Link className='hover:border-b' href={'#'}>Terms & Conditions</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Refund Policy</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Shipping Policy</Link></p>
            <p> <Link className='hover:border-b' href={'#'}>Cookies Policy</Link></p>
          </div>

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Social Linkss</h1>
            <p className='flex items-center gap-3'> <FaGithub /> <Link className='hover:border-b' href={'https://github.com/mahafujur80'}>GitHub</Link></p>
            <p className='flex items-center gap-3'> <FaLinkedin /><Link className='hover:border-b' href={'https://www.linkedin.com/in/mahafujur-rahman-munna/'}>LinkeIn</Link></p>
            <p className='flex items-center gap-3'> <FaFacebook /> <Link className='hover:border-b' href={'https://www.facebook.com/mahafujurrahman480'}>Facebook</Link></p>
            <p className='flex items-center gap-3'><FaInstagramSquare /> <Link className='hover:border-b' href={'#'}>Instagram</Link></p>
          </div>

        </div>
      </footer>
        <Separator className='bg-gray-500'/>
        <div className='bg-blue-900 text-gray-300 py-2 flex items-center justify-center'><p className="text-md">&copy; { ` ${new Date().getFullYear()}`} SunCart All rights reserved.</p></div>
    </div>
  );
};

export default Footer;