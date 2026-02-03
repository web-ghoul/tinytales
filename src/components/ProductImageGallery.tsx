"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Container */}
      <div className="relative aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden group flex justify-center items-center bg-linear-to-b from-[#000000]/30 from-5% to-[#F4F4F4]/20 to-40%">
        <Image
          src={images[currentIndex]}
          alt={`Product View ${currentIndex + 1}`}
          width={300}
          height={300}
          className="m-auto"
          priority
        />

        {/* Navigation Arrows */}
        <button
          title={""}
          onClick={prevImage}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          title={""}
          onClick={nextImage}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#B0897F] hover:bg-[#a07a70] rounded-full flex items-center justify-center text-white shadow-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination Dots (Top) */}
        <div className="absolute top-4 w-[90%] left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white" : "bg-gray-300"}`}
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.slice(0, 3).map((img, idx) => (
          <button
            key={idx}
            onClick={() => selectImage(idx)}
            className={`relative w-24 h-24 rounded-2xl bg-[#F9F9F9] overflow-hidden cursor-pointer border-2 transition-all shrink-0 ${
              currentIndex === idx ? "border-[#B0897F]" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-contain p-2 mix-blend-multiply"
            />
          </button>
        ))}

        {/* Extra Images Indicator */}
        {images.length > 3 && (
          <button className="relative w-24 h-24 rounded-2xl bg-[#333333] overflow-hidden border-2 border-transparent shrink-0 flex items-center justify-center text-white text-xl font-bold">
            +{images.length - 3}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;
