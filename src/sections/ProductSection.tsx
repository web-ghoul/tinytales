import ProductImageGallery from "../components/ProductImageGallery";
import ProductInfo from "../components/ProductInfo";
import { GALLERIES } from "../constants";

const ProductSection = () => {
  return (
    <section className="contain py-12">
      <div className="grid grid-cols-[30%_1fr] gap-12">
        {/* Left Column: Gallery */}
        <ProductImageGallery images={GALLERIES} />

        {/* Right Column: Product Info */}
        <ProductInfo />
      </div>
    </section>
  );
};

export default ProductSection;
