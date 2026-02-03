import ChevronRightIcon from "../Icons/ChevronRightIcon";

const BreadCrumbSection = () => {
  return (
    <section className={`grid justify-stretch items-center contain py-5`}>
      <div className="bg-gray-100 px-6 py-4 rounded-2xl flex justify-start items-center gap-1">
        <a href="#" className="text-md capitalize">
          Home
        </a>
        <ChevronRightIcon className="w-4 h-auto" />
        <a href="#" className="text-md capitalize">
          Our Category
        </a>
        <ChevronRightIcon className="w-4 h-auto" />
        <a href="#" className="text-md text-gray-500">
          Product Details
        </a>
      </div>
    </section>
  );
};

export default BreadCrumbSection;
