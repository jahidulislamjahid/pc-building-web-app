import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productsRes }) {
  return (
    <>
      <Head>
        <title>Rog Reboot</title>
      </Head>
      <main className={`${inter.className}`}>
        <HeroSection />
        <FeaturedProducts products={productsRes?.data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_APP_URL}/api/home`);
    // const res = await fetch(`http://localhost:3000/api/home`);
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
