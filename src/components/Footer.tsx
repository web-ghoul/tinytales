import Image from "next/image";
import footerBg from "../assets/images/footer.png";
import logo from "../assets/images/logo_light.png";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#3D342C] text-white pt-20 pb-10 contain overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 flex justify-center items-end opacity-20 pointer-events-none w-full h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="Tinytales Logo" />
          <p className="text-[#D1D1D1] text-md leading-relaxed max-w-xs">
            Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsum
            in eos qui consequatur ab .Soluta dolor quae Ipsum in eos
            quconsequatur ab cum maxime. Soluta dolor quae
          </p>
        </div>

        {/* Let Us Help */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Let Us Help</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Policies</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                Cancellation Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Send Email & Socials */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Send Email</h3>
            <div className="bg-white rounded-xl p-2 flex items-center justify-between shadow-lg">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-gray-800 px-4 py-2 outline-none text-sm w-full"
              />
              <Button>Send</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-md font-bold tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <WhatsappIcon />
              </a>
              <a
                href="#"
                target="_blank"
                title={""}
                className="hover:text-[#B9958C] transition-colors"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
