import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import { PRODUCTS } from "../constants";

const ProductsSection = () => {
  return (
    <section className="contain py-12 grid gap-6 max-tablet:gap-5 max-mobile:gap-4">
      {/* Header */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold text-black max-tablet:text-xl">
          Similar Items
        </h2>
        <div className="h-1 rounded-full w-12.5 bg-primary"></div>
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
