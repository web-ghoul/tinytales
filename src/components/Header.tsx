import Image from "next/image";
import logo from "../assets/images/logo.png";
import CartIcon from "../Icons/CartIcon";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import DashboardIcon from "../Icons/DashboardIcon";
import HomeIcon from "../Icons/HomeIcon";
import InfoIcon from "../Icons/InfoIcon";
import LoveIcon from "../Icons/LoveIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import TargetIcon from "../Icons/TargetIcon";
import UserIcon from "../Icons/UserIcon";
import WalletIcon from "../Icons/WalletIcon";

const Header = () => {
  const navItems = [
    { name: "Home", icon: HomeIcon, active: true },
    { name: "Our Category", icon: DashboardIcon },
    { name: "About Us", icon: TargetIcon },
    { name: "Contact Us", icon: WalletIcon },
    { name: "FAQs", icon: InfoIcon },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 contain flex items-center justify-between sticky top-0 z-50 font-poppins h-24">
      <div className="flex justify-start items-center gap-16">
        {/* Logo Section */}
        <Image src={logo} alt="Tinytales Logo" />

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#A67C52] ${
                item.active ? "text-[#A67C52]" : "text-[#8A8A8A]"
              }`}
            >
              <item.icon />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Action Icons Section */}
      <div className="flex items-center gap-5 text-gray-700">
        <button
          title={""}
          className="hover:text-[#A67C52] cursor-pointer transition-colors relative"
        >
          <CartIcon />
        </button>
        <button
          title={""}
          className="hover:text-[#A67C52] cursor-pointer transition-colors"
        >
          <NotificationIcon />
        </button>
        <button
          title={""}
          className="hover:text-[#A67C52] cursor-pointer transition-colors"
        >
          <LoveIcon />
        </button>

        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#A67C52] transition-colors">
          <span className="text-sm font-semibold">EN</span>
          <ChevronDownIcon />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#A67C52] transition-colors">
          <UserIcon />
          <ChevronDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
