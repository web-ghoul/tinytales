import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import { PRODUCTS } from "../constants";

const ProductsSection = () => {
  return (
    <section className="contain py-12 grid gap-6">
      {/* Header */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold text-black">Similar Items</h2>
        <div className="h-1 rounded-full w-[50px] bg-[#B0897F]"></div>
      </div>

      {/* Slider */}
      <Slider>
        {PRODUCTS.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductsSection;
