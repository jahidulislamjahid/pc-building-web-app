import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { removeToBUild } from "@/redux/features/pc_build/pcBuildSlice";
import { Crossed, IconStarFilled, IconStarOutline, RepeatIcon, } from "@/assets/icons";

const BuildComponent = ({ product, link }) => {
  const roundedRating = Math.round(product?.rating);
  const dispatch = useDispatch();

  const componentRemoveHandelar = () => {
    dispatch(removeToBUild(product?.id));
  };
  return (
    <div
      key={product?.id}
      className="flex justify-between flex-col lg:flex-row items-center group my-3 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 border"
    >
      <div className=" relative flex flex-col lg:flex-row items-center gap-x-6 ">
        <div className="flex flex-none items-center justify-center rounded-lg bg-gray-50 w-[150px] group-hover:bg-white text-xl">
          <Image
            src={product?.images}
            alt={product?.name}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="flex-auto">
          <Link
            href={`/products/${product?.id}`}
            className="block font-semibold text-sm lg:text-xl text-gray-900"
          >
            {product.name}
            <span className="absolute inset-0"></span>
          </Link>

          <p>
            Brand: <span className="font-bold ml-1">{product.Brand}</span>
          </p>

          <div className="text-yellow-400 flex items-center">
            {[...Array(roundedRating)].map((_, index) => (
              <IconStarFilled key={index} />
            ))}
            {[...Array(Math.max(5 - roundedRating, 0))].map((_, index) => (
              <IconStarOutline key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <p className="text-2xl font-bold p-2 my-2 text-[#EE4B23]">
          {product?.Price}
        </p>
        <div className="m-2 flex justify-center items-center text-2xl">
          <button
            onClick={componentRemoveHandelar}
            className="p-2 mx-3 bg-gray-100 rounded-md "
          >
            <Crossed />
          </button>

          <Link href={link} onClick={componentRemoveHandelar}>
            <button className="p-2 mx-3 bg-gray-100 rounded-md">
              <RepeatIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildComponent;
