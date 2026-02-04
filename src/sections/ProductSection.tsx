import ProductImageGallery from "../components/ProductImageGallery";
import ProductInfo from "../components/ProductInfo";
import { GALLERIES } from "../constants";

const ProductSection = () => {
  return (
    <section className="contain">
      <div className="grid grid-cols-[30%_1fr] max-laptop:grid-cols-2 max-tablet:grid-cols-1 gap-12 max-tablet:gap-10 max-mobile:gap-8">
        {/* Left Column: Gallery */}
        <ProductImageGallery images={GALLERIES} />

        {/* Right Column: Product Info */}
        <ProductInfo />
      </div>
    </section>
  );
};

export default ProductSection;
