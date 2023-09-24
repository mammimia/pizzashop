import { logo } from '@/app/data/pizzas';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          <Link href="#">
            <Image src={logo} width={180} height={180} alt="" />
          </Link>
          <div className="flex gap-x-6 text-xl text-white">
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaPinterest />
            </Link>
          </div>
          <div className="text-white font-medium">
            Copyright &copy; Pizzaland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
