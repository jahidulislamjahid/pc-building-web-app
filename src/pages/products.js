import { CPUicon, MOBO, Memory, Monitor, Others, PSU, Storage } from "@/assets/icons";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import { useRouter } from "next/router";

const Products = ({ productsRes }) => {
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
      name: "Other",
      link: "/",
      logo: <Others />,
    },
  ];

  const products = productsRes?.data;

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <section>
        <div className="mx-auto  max-w-7xl my-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold p-1">Featured Category</h2>
            <p>Get Your Desired Components At Greate Price</p>
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

          <div className="bg-white">
            <div className="px-2 ">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products?.map((product) => (
                  <ProductCard key={product?.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const { query } = context;
  const category = query.category;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_APP_URL}/api/products?category=${
        // `http://localhost:3000/api/products?category=${
        category ? category : "CPU%2FProcessor"
      }`
    );
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const productsRes = await res.json();

    return {
      props: {
        productsRes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, 
    };
  }
}
