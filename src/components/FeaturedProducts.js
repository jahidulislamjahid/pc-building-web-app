import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "./ProductCard";
import { CPUicon, MOBO, Memory, Monitor, Others, PSU, Storage } from "@/assets/icons";

const FeaturedProducts = ({ products }) => {
  const router = useRouter();
  const { query } = router;

  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/",
      logo: <CPUicon />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/",
      logo: <MOBO />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/",
      logo: <Memory />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/",
      logo: <PSU />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/",
      logo: <Storage />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/",
      logo: <Monitor />,
    },
    {
      id: 7,
      name: "Others",
      link: "/",
      logo: <Others />,
    },
  ];

  return (
    <div>
      <section>
        <div className="mx-auto  max-w-7xl my-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold p-1">Featured Category</h2>
            <p>Get Your Desired Components Here</p>
          </div>

          <div className="my-10 grid grid-cols-4 mx-2 gap-4 lg:grid-cols-7 ">
            {categories?.map((category) => {
              const { id, name, logo } = category || {};
              return (
                <button
                  key={id}
                  onClick={() =>
                    router.push({
                      pathname: "/products",
                      query: { category: name },
                    })
                  }
                  className={`flex flex-col justify-center items-center p-5 rounded-md border text-2xl shadow-md hover:text-rose-400 duration-300 ${
                    name === query?.category && "text-rose-400"
                  }`}
                >
                  {logo}
                  <p className="font-bold text-sm p-1 ">{name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto  max-w-7xl my-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold p-1">Featured Products</h2>
            <p>Check & Get Your Desired Components</p>
          </div>

          <div className="bg-white">
            <div className="px-2 ">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <Link href={"/products"}>
              <button
                className="px-6 py-3 bg-curiousGreen btn btn-ghost duration-300 rounded-md text-white font-bold"
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
