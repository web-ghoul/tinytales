import titleSectionBg from "../assets/images/title_section.png";

const TitleSection = () => {
  return (
    <section className="grid justify-center items-center text-center contain min-h-full h-75 relative">
      <div
        className="bg-center bg-cover bg-no-repeat absolute left-0 top-0 w-full h-full"
        style={{ backgroundImage: `url(${titleSectionBg.src})` }}
      ></div>
      <h1 className="text-center text-4xl font-bold">Product Details</h1>
    </section>
  );
};

export default TitleSection;
