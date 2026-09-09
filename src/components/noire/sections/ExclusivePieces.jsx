import Reveal from "@/components/noire/Reveal";
import Chapter from "@/components/noire/Chapter";
import ProductCard from "@/components/noire/ProductCard";

export default function ExclusivePieces({ products }) {
  if (!products || products.length === 0) return null;
  const [a, b, c] = products;

  return (
    <section id="exclusive" className="bg-onyx text-ivory py-24 md:py-36 grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Chapter numeral="III" label="La Voûte" />
            <h2 className="font-display text-4xl md:text-6xl font-light">
              Exclusive Pieces
            </h2>
          </div>
          <p className="text-sm font-light text-ivory/50 max-w-sm leading-relaxed">
            Each garment elevated to the status of art object — released in
            deliberate, finite numbers.
          </p>
        </Reveal>

        {/* Editorial asymmetric 2-1-2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-7" delay={0}>
            <ProductCard product={a} />
          </Reveal>
          <div className="md:col-span-5 grid grid-rows-2 gap-6 md:gap-8">
            <Reveal delay={120}>
              <ProductCard product={b} />
            </Reveal>
            <Reveal delay={200}>
              <ProductCard product={c} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
