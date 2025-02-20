"use client"
import React from "react";
import { assets, BagIcon, CartIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router ,user} = useAppContext();
  const {openSignIn} =useClerk()

  return (
    <nav className="flex items-center justify-between border-b border-gray-300 px-6 py-3 text-gray-700 md:px-16 lg:px-32">
      <Image
        className="w-28 cursor-pointer md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 max-md:hidden lg:gap-8">
        <Link href="/" className="transition hover:text-gray-900">
          Home
        </Link>
        <Link href="/all-products" className="transition hover:text-gray-900">
          Shop
        </Link>
        <Link href="/" className="transition hover:text-gray-900">
          About Us
        </Link>
        <Link href="/" className="transition hover:text-gray-900">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="rounded-full border px-4 py-1.5 text-xs">Seller Dashboard</button>}

      </div>

      <ul className="hidden items-center gap-4 md:flex">
        <Image className="h-4 w-4" src={assets.search_icon} alt="search icon" />
        { user ?
         <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon ={<CartIcon/>} onClick={()=>router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon ={<BagIcon/>} onClick={()=>router.push('/my-orders')} />
          </UserButton.MenuItems>
          
          
          </UserButton>
        </>
        : <button onClick={openSignIn} className="flex items-center gap-2 transition hover:text-gray-900">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>
    </nav>
  );
};

export default Navbar;