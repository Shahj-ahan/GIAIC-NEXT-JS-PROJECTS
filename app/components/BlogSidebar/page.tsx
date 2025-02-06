import Image from "next/image";
import { Search, Star, Facebook, Twitter, Instagram } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-xs p-4 border rounded-lg shadow-md">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
        />
        <button className="absolute right-2 top-2 bg-orange-500 text-white p-2 rounded-md">
          <Search size={16} />
        </button>
      </div>

      <div className="text-center p-4 border rounded-md shadow-sm">
        <Image src="/Hackathon/Blog/user.png" alt="Profile" width={80} height={80} className="mx-auto rounded-full" />
        <h3 className="text-lg font-semibold mt-2">Prince Bijado</h3>
        <p className="text-sm text-gray-500">Blogger & Food Reviewer</p>
        <div className="flex justify-center mt-1 text-orange-500">
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
        </div>
        <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
        <div className="flex justify-center gap-2 mt-3">
          <FaFacebook className="text-blue-600" size={20} />
          <FaTwitter className="text-blue-400" size={20} />
          <FaInstagram className="text-pink-500" size={20} />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Recent Posts</h4>
        <div className="flex gap-3 mb-3">
          <Image src="/Hackathon/Blog/post-1.png" alt="Post" width={60} height={60} className="rounded-md" />
          <div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
            <span className="text-xs text-gray-400">June 20, 2023</span>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <Image src="/Hackathon/Blog/cart-2.png" alt="Post" width={60} height={50} className="h-[50px] rounded-md" />
          <div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
            <span className="text-xs text-gray-400">June 20, 2023</span>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <Image src="/Hackathon/Blog/cart-1.png" alt="Post" width={60} height={50} className="h-[50px] rounded-md" />
          <div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
            <span className="text-xs text-gray-400">June 20, 2023</span>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <Image src="/Hackathon/Blog/cart-3.png" alt="Post" width={60} height={50} className="h-[50px] rounded-md" />
          <div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
            <span className="text-xs text-gray-400">June 20, 2023</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Filter by Menu</h4>
        <ul>
          <li className="flex justify-between text-sm border-b py-1"><span>Chicken Fry</span> <span className="text-gray-500">60</span></li>
          <li className="flex justify-between text-sm border-b py-1"><span>Burger Beef</span> <span className="text-gray-500">45</span></li>
          <li className="flex justify-between text-sm border-b py-1"><span>Pizza</span> <span className="text-gray-500">90</span></li>
          <li className="flex justify-between text-sm border-b py-1"><span>Pasta Pasta</span> <span className="text-gray-500">15</span></li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-gray-200 rounded-md">Breakfast</span>
          <span className="text-xs px-3 py-1 bg-gray-200 rounded-md">Taste</span>
          <span className="text-xs px-3 py-1 bg-gray-200 rounded-md">Rice</span>
          <span className="text-xs px-3 py-1 bg-gray-200 rounded-md">Noodles</span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-2">
          <Image src="/Hackathon/shop/chesse.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
          <Image src="/Hackathon/shop/burger.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
          <Image src="/Hackathon/shop/drink.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
          <Image src="/Hackathon/shop/sandwhic.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
          <Image src="/Hackathon/shop/chiken.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
          <Image src="/Hackathon/shop/choco.png" alt="Gallery" width={60} height={60} className="h-[50px]" />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-2">
          <FaFacebook className="text-blue-600" size={24} />
          <FaTwitter className="text-blue-400" size={24} />
          <FaInstagram className="text-pink-500" size={24} />
        </div>
      </div>
    </aside>
  );
}
