import Reveal from '@/components/noire/Reveal';
import Chapter from '@/components/noire/Chapter';
import ProductCard from '@/components/noire/ProductCard';

export default function NewArrivals({ products }) {
  if (!products || products.length === 0) return null;
  return (
    <section id="new" className="bg-onyx text-ivory py-24 md:py-36 grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Chapter numeral="IV" label="Les Arrivées" /></div>
          <h2 className="font-display text-4xl md:text-6xl font-light">New Arrivals</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}