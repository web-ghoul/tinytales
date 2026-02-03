import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import BreadCrumbSection from "@/src/sections/BreadCrumbSection";
import CommentsSection from "@/src/sections/CommentsSection";
import ProductSection from "@/src/sections/ProductSection";
import ProductsSection from "@/src/sections/ProductsSection";
import RatingSection from "@/src/sections/RatingSection";
import TitleSection from "@/src/sections/TitleSection";

import AuthGuard from "@/src/components/AuthGuard";

export default function UI() {
  return (
    <AuthGuard requireAuth>
      <Header />
      <TitleSection />
      <BreadCrumbSection />
      <ProductSection />
      <RatingSection />
      <CommentsSection />
      <ProductsSection />
      <Footer />
    </AuthGuard>
  );
}
