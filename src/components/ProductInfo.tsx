"use client";
import { ChevronDown, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import CartIcon from "../Icons/CartIcon";
import LoveIcon from "../Icons/LoveIcon";
import Button from "./Button";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const colors = [
    { name: "red", hex: "#D60000" },
    { name: "blue", hex: "#C6D8E8" },
    { name: "olive", hex: "#9E9058" },
    { name: "indigo", hex: "#6389C8" },
    { name: "darkgray", hex: "#555555" },
  ];

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col h-full justify-center">
      {/* Breadcrumb / Tag */}
      <div className="mb-4 flex justify-between items-center gap-2">
        <span className="inline-block px-4 py-2 rounded-full border border-[#D29F92] text-[#D29F92] text-xs font-medium bg-white">
          T-Shirt
        </span>
        <div className="flex gap-2">
          <button
            title={""}
            onClick={() => setAddedToCart(!addedToCart)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all cursor-pointer border bg-white text-primary border-gray-200 hover:text-black hover:shadow-md`}
          >
            <CartIcon
              className={`w-7 h-auto ${addedToCart ? "fill-black text-black" : ""}`}
            />
          </button>
          <button
            title={""}
            onClick={() => setLiked(!liked)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all cursor-pointer border bg-white text-primary border-gray-200 hover:text-black hover:shadow-md`}
          >
            <LoveIcon
              className={`w-7 h-auto ${liked ? "fill-black text-white" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl max-tablet:text-2xl max-mobile:text-xl font-semibold text-gray-900 leading-tight mb-4 max-mobile:mb-3">
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h1>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-2xl font-medium text-gray-900">$300.00</span>
        <span className="text-lg text-gray-400 line-through">$360.00</span>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        This price is exclusive of taxes.
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-8 max-tablet:mb-7 max-mobile:mb-6 max-w-[90%]">
        Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy
        Lorem ipsum dolor sit amet, diam nonummy
      </p>

      {/* Selectors Grid */}
      <div className="flex flex-col gap-6 mb-8">
        {/* Type Selector */}
        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-800 z-10">
            Type
          </label>
          <div className="relative w-fit">
            <select
              title={""}
              className="w-75 max-laptop:w-72 max-tablet:w-70 max-mobile:60 border border-gray-200 rounded-xl max-tablet:rounded-lg max-mobile:rounded-md px-4 py-3 max-laptop:px-3 max-laptop:py-2.5 max-mobile:px-2.5 max-mobile:py-2 text-sm max-tablet:text-xs max-tab font-medium appearance-none focus:outline-none focus:border-[#D29F92] cursor-pointer bg-white text-gray-800"
            >
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Linen</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>

        {/* Size Selector */}
        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-800 z-10">
            Size
          </label>
          <div className="relative w-fit">
            <select
              title={""}
              className="w-75 max-laptop:w-72 max-tablet:w-70 max-mobile:60 border border-gray-200 rounded-xl max-tablet:rounded-lg max-mobile:rounded-md px-4 py-3 max-laptop:px-3 max-laptop:py-2.5 max-mobile:px-2.5 max-mobile:py-2 text-sm max-tablet:text-xs font-medium appearance-none focus:outline-none focus:border-[#D29F92] cursor-pointer bg-white text-gray-800"
            >
              <option>2XL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-900 mb-3">Colors</h3>
        <div className="flex gap-4">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`bg-[#F4F7F9] p-3 max-tablet:p-2.5 max-mobile:p-2 rounded-full ${selectedColor === color.name ? "ring-2 ring-gray-500" : ""}`}
            >
              <button
                title={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-8 h-8 max-tablet:w-7 max-tablet:h-7 max-mobile:w-6 max-mobile:h-6 rounded-full flex items-center justify-center transition-all border-2 cursor-pointer border-white`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name}`}
              ></button>
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500 font-medium capitalize">
          {selectedColor}
        </p>
      </div>

      {/* Actions Row */}
      <div className="flex items-center gap-8 mt-auto">
        {/* Quantity */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-gray-900 text-lg">Quantity</span>
          <span className="text-gray-400 text-xs">($300.00 for Piece)</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-4 max-laptop:gap-5 max-tablet:gap-4 max-tablet:grid max-tablet:grid-cols-2">
        {/* Quantity Counter */}
        <div className="flex items-center justify-between gap-4 bg-[#F9F9F9] rounded-xl px-2 h-12 max-tablet:px-1.5 max-tablet:h-11 max-mobile:rounded-lg max-mobile:gap-3">
          <button
            title={""}
            onClick={handleDecrement}
            className="flex items-center justify-center text-gray-400 hover:text-black cursor-pointer transition-colors w-10 h-10  max-laptop:w-9 max-laptop:h-9 max-mobile:w-8 max-mobile:h-8 bg-white rounded-xl max-tablet:rounded-md max-mobile:rounded-sm"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-semibold text-gray-900 text-lg">
            {String(quantity).padStart(2, "0")}
          </span>
          <button
            title={""}
            onClick={handleIncrement}
            className="w-10 h-10 max-laptop:w-9 max-laptop:h-9 max-tablet:w-8 max-tablet:h-8 bg-white rounded-xl max-tablet:rounded-md max-mobile:rounded-sm flex items-center justify-center cursor-pointer text-black hover:text-black transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Total Price */}
        <span className="text-2xl font-semibold text-gray-900 min-w-25 max-tablet:min-w-full max-mobile:text-xl">
          ${(300 * quantity).toFixed(2)}
        </span>

        {/* Add to Cart Button */}
        <Button className="col-span-2">
          Add To Cart
          <ShoppingBag size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
