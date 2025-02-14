import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaXTwitter, FaFacebook, FaDiscord, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1B263B] text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Horizone Logo" width={25} height={25} className="invert" />
              <span className="text-lg font-semibold">Infinite Threads</span>
            </div>
            <p className="text-sm ">
            Our mission is to deliver insightful and engaging content that informs, inspires, and enriches every reader&apos;s journey.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/" className=" hover:text-white">About Us</Link></li>
              <li><Link href="/blogs" className=" hover:text-white">Blog</Link></li>
              <li><Link href="/" className=" hover:text-white">Career</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/" className=" hover:text-white">Contact Us</Link></li>
              <li><Link href="/" className=" hover:text-white">Return</Link></li>
              <li><Link href="/" className=" hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Get Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Updates</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-3 py-2 rounded-md flex-grow"
              />
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            ©2024 Infinite Threads. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://discord.com" className="text-gray-400 hover:text-white">
              <FaDiscord size={20} />
            </Link>
            <Link href="https://tiktok.com" className="text-gray-400 hover:text-white">
              <FaTiktok size={20} />
            </Link>
          </div>

          <div className="flex gap-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;