"use client";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import CartIcon from "../Icons/CartIcon";
import LoveIcon from "../Icons/LoveIcon";

interface ProductProps extends Omit<ComponentProps<"article">, "id"> {
  image: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  id: number;
  originalPrice: number;
  discountBadge: string;
  colors: string[];
}

const ProductCard = ({
  image,
  title = "Product Title",
  category = "Category",
  rating = 4.5,
  reviews = 2910,
  price = 900,
  originalPrice,
  id,
  discountBadge,
  colors = ["#D29F92", "#333333", "#F0F0F0"],
  className,
  ...props
}: ProductProps) => {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <article
      className={`group min-w-[280px] w-[280px] flex flex-col gap-3 ${className}`}
      {...props}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-white border grid gap-4 grid-rows-[1fr_auto] border-gray-100 rounded-2xl overflow-hidden p-4">
        <div className="flex justify-between items-center gap-2">
          {/* Badges */}
          {discountBadge && (
            <span className="bg-white px-2 py-1 text-[10px] font-bold tracking-wider border border-gray-100 rounded-sm text-primary uppercase">
              {discountBadge}
            </span>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              title={""}
              onClick={() => setAddedToCart(!addedToCart)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all cursor-pointer border bg-white text-primary border-gray-200 hover:text-black hover:shadow-md`}
            >
              <CartIcon
                className={`w-6 h-auto ${addedToCart ? "fill-black text-black" : ""}`}
              />
            </button>
            <button
              title={""}
              onClick={() => setLiked(!liked)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all cursor-pointer border bg-white text-primary border-gray-200 hover:text-black hover:shadow-md`}
            >
              <LoveIcon
                className={`w-6 h-auto ${liked ? "fill-black text-white" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <Image
          src={image}
          alt={title}
          width={200}
          height={100}
          className="w-auto h-auto object-cover m-auto transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        {/* Category & Rating */}
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 font-medium">{category}</span>
          <div className="flex items-center gap-1 text-gray-800 font-bold">
            <Star size={12} className="fill-black text-black" />
            <span>{rating}</span>
            <span className="text-gray-400 font-normal">({reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Price & Colors */}
        <div className="flex justify-between items-end mt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold">AED {price}</span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through decoration-gray-400">
                AED {originalPrice}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center">
            {colors.slice(0, 3).map((color, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 3 && (
              <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-600">
                +{colors.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
