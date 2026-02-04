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
    <footer className="relative w-full bg-[#3D342C] text-white pt-20 pb-10 max-laptop:pt-16 max-tablet:pt-14 max-mobile:pt-12 max-laptop:pb-9 max-tablet:pb-8 max-mobile:pb-6 contain overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 flex justify-center items-end opacity-20 pointer-events-none w-full h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      ></div>

      <div className="relative z-10 grid grid-cols-4 max-laptop:grid-cols-2 max-mobile:grid-cols-1 gap-12 max-laptop:gap-8 max-tablet:gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col gap-6 max-laptop:gap-5 max-tablet:gap-4 max-mobile:gap-3">
          <Image src={logo} alt="Tinytales Logo" />
          <p className="text-[#D1D1D1] text-md leading-relaxed max-w-xs max-mobile:text-sm">
            Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsum
            in eos qui consequatur ab .Soluta dolor quae Ipsum in eos
            quconsequatur ab cum maxime. Soluta dolor quae
          </p>
        </div>

        {/* Let Us Help */}
        <div className="flex flex-col gap-6 max-laptop:gap-5 max-tablet:gap-4 max-mobile:gap-3">
          <h3 className="text-2xl font-bold max-laptop:text-xl max-mobile:text-lg">
            Let Us Help
          </h3>
          <ul className="flex flex-col gap-3 max-tablet:gap-2 max-mobile:gap-1">
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-6 max-laptop:gap-5 max-tablet:gap-4 max-mobile:gap-3">
          <h3 className="text-2xl font-bold max-laptop:text-xl max-mobile:text-lg">
            Policies
          </h3>
          <ul className="flex flex-col gap-3 max-tablet:gap-2 max-mobile:gap-1">
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                Cancellation Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D1D1D1] hover:text-white transition-colors text-md max-mobile:text-sm"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Send Email & Socials */}
        <div className="flex flex-col gap-8 max-laptop:gap-6 max-tablet:gap-5 max-mobile:gap-4">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold max-laptop:text-xl max-mobile:text-lg">
              Send Email
            </h3>
            <div className="bg-white rounded-xl max-laptop:rounded-lg max-mobile:rounded-md p-2 flex items-center justify-between shadow-lg max-laptop:p-1.5 max-mobile:p-1 max-laptop:shadow-md max-mobile:shadow-sm">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-gray-800 px-4 py-2 outline-none text-sm w-full max-laptop:px-3 max-tablet:px-2.5 max-tablet:py-1.5"
              />
              <Button>Send</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-tablet:gap-3 max-mobile:gap-2">
            <h4 className="text-md font-bold tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-4 max-tablet:gap-3 max-mobile:gap-2">
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
