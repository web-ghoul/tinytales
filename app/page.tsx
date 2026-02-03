import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import BreadCrumbSection from "@/src/sections/BreadCrumbSection";
import CommentsSection from "@/src/sections/CommentsSection";
import TitleSection from "@/src/sections/TitleSection";

export default function Home() {
  return (
    <main className="grid justify-stretch items-center content-start min-h-screen">
      <Header />
      <TitleSection />
      <BreadCrumbSection />
      <CommentsSection />
      <Footer />
    </main>
  );
}
