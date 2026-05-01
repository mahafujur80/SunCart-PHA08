import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-gray-300 py-10 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 grid-cols-12 gap-6">

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Contact</h1>
            <p>Email: support@shop.com</p>
            <p>Phone: +880...</p>
          </div>

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Links</h1>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>

          <div className='col-span-4'>
            <h1 className="text-white font-bold text-lg">Follow Us</h1>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;