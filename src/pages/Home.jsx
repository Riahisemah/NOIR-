import { useEffect, useState } from "react";
import { getProducts } from "@/data/products";
import Hero from "@/components/noire/Hero";
import DiscoverCollection from "@/components/noire/sections/DiscoverCollection";
import ExclusivePieces from "@/components/noire/sections/ExclusivePieces";
import NewArrivals from "@/components/noire/sections/NewArrivals";
import LimitedEdition from "@/components/noire/sections/LimitedEdition";
import BrandStory from "@/components/noire/sections/BrandStory";
import FashionEditorial from "@/components/noire/sections/FashionEditorial";
import Newsletter from "@/components/noire/sections/Newsletter";
import ScrollThread from "@/components/noire/ScrollThread";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts({}, 50));
  }, []);

  const exclusive = products
    .filter((p) => p.collection === "Exclusive" || p.featured)
    .slice(0, 3);
  const newArrivals = products.filter((p) => p.collection === "New Arrivals");
  const limited =
    products.find((p) => p.collection === "Limited Edition") || products[0];

  return (
    <div className="bg-onyx text-ivory">
      <ScrollThread />
      <Hero />
      <DiscoverCollection />
      <ExclusivePieces products={exclusive} />
      <NewArrivals products={newArrivals} />
      <LimitedEdition product={limited} />
      <BrandStory />
      <FashionEditorial />
      <Newsletter />
    </div>
  );
}
