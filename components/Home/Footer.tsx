
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* define grid system */}
      <div className="w-[90%] border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
            delectus facilis rem velit nobis ipsum temporibus veritatis.
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+088) 1234 5678 90 - info@example.com
          </p>
        </div>
        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="footer-title">Information</h1>
          <p className="footer-link">About Us</p>
          <p className="footer-link">Privacy Police</p>
          <p className="footer-link">Return Police</p>
          <p className="footer-link">Drop Shipping</p>
          <p className="footer-link">Shipping Police</p>
        </div>
        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="footer-title">Account</h1>
          <p className="footer-link">Dashboard</p>
          <p className="footer-link">My Orders</p>
          <p className="footer-link">Account Details</p>
          <p className="footer-link">Track My Orders</p>
        </div>
        {/* 4th part */}
        <div className="lg:mx-auto">
          <h1 className="footer-title">Shop</h1>
          <p className="footer-link">Affiliate</p>
          <p className="footer-link">Best selers</p>
          <p className="footer-link">Latest Products</p>
          <p className="footer-link">Sale Products</p>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-[90%] mx-auto">
        <p className='text-sm text-black opacity-60'>&#169; Copyright Ahad Hossain 2024</p>
        <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto'/>
      </div>
    </div>
  );
}

export default Footer
