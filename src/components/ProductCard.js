import { IconStarFilled, IconStarOutline } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, Price, images, name, rating } = product || {};

  const roundedRating = Math.round(rating);

  return (
    <div className="relative">
      <div
        className="group relative border px-3 lg:h-[400px]"
        style={{
          borderRadius: 10,
          textAlign: "center",
          borderBottom: "3px solid rgba(55,73,187,.03)",
          flex: "0 0 220px",
          padding: "20px",
          margin: 0,
          backgroundColor: "white",
        }}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 p-6 ">
          <Image
            src={images}
            alt={name}
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <div className="border-t py-2">
          <h3 className=" text-gray-500 hover:text-black duration-300">
            <Link href={`/products/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              <p
                style={{
                  lineHeight: "22px",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#111",
                  fontFamily: "Trebuchet MS, sans-serif",
                }}
              >
                {name}
              </p>
            </Link>
          </h3>

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
          <div className="hidden lg:flex justify-between w-full items-center px-3">
            <p
              className="text-xl font-bold text-rose-400"
              style={{
                lineHeight: "22px",
                fontSize: "17px",
                fontWeight: 600,
                color: "#ef4a23",
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
  );
};

export default ProductCard;
