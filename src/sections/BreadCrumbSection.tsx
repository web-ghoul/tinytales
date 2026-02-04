import Link from "next/link";
import ChevronRightIcon from "../Icons/ChevronRightIcon";

const BreadCrumbSection = () => {
  return (
    <section className={`grid justify-stretch items-center contain py-5`}>
      <div className="bg-[#ECECEC]/40 px-6 py-4 rounded-3xl max-tablet:rounded-2xl max-mobile:rounded-xl max-tablet:px-5 max-mobile:px-4 max-tablet:py-3.5 max-mobile:py-3 flex justify-start items-center gap-1 max-mobile:gap-0">
        <Link href="/" className="text-md capitalize">
          Home
        </Link>
        <ChevronRightIcon className="w-4 max-tablet:w-3 h-auto" />
        <a href="#" className="text-md capitalize">
          Our Category
        </a>
        <ChevronRightIcon className="w-4 max-tablet:w-3 h-auto" />
        <a href="#" className="text-md text-gray-500">
          Product Details
        </a>
      </div>
    </section>
  );
};

export default BreadCrumbSection;
