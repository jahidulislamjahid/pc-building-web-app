import { IconStarFilled, IconStarOutline } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, Price, images, name, rating, Status } = product || {};

  const roundedRating = Math.round(rating);

  return (
    <div className="relative  gap-5 my-4">

      <Link href={`/products/${id}`}>
        <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg drop-shadow h-[400px] hover:opacity-75 duration-200">
          <Image className="p-8 mx-auto w-3/4" src={images} alt="product image" width={100} height={100} />
          <div class="px-5 pb-5">
            <h5 class="text-sm font-semibold">{name}</h5>
            {Status !== "In Stock" ? <div className={` bg-transparent fixed z-90 top-10 right-8 font-semibold text-rose-400`}>{Status}</div> : ""}
            {/* <div className={` bg-transparent fixed z-90 top-10 right-8`}>default</div> */}
            <div class="flex items-center mt-2.5 mb-5">
              <div className="flex lg:hidden justify-between w-full items-center">
                <p className="text-xl font-bold text-rose-400">{Price}</p>
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
            <div className="absolute left-0 bottom-3 w-full ">

            </div>
            <div class="flex items-center justify-between">
              <div className="hidden lg:flex justify-between w-full items-center px-3">
                <p
                  className="text-xl font-bold text-rose-400"
                  style={{
                    lineHeight: "22px",
                    fontSize: "17px",
                    fontWeight: 600,
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  {Price}
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
          </div>
        </div>

      </Link>
    </div>
  );
};

export default ProductCard;
