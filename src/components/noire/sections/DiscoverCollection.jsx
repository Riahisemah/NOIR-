import Reveal from "@/components/noire/Reveal";
import Chapter from "@/components/noire/Chapter";
import { Image } from "@/components/ui/image";
import { CATEGORY_IMAGES } from "@/lib/noireConfig";

const CATEGORIES = [
  { name: "Luxury Dresses", key: "Dresses", href: "/#exclusive" },
  { name: "Tailored Suits", key: "Suits", href: "/#exclusive" },
  { name: "Couture Coats", key: "Coats", href: "/#exclusive" },
  { name: "Silk Shirts", key: "Shirts", href: "/#exclusive" },
  { name: "Leather Atelier", key: "Accessories", href: "/#exclusive" },
  { name: "Premium Shoes", key: "Shoes", href: "/#exclusive" },
];

export default function DiscoverCollection() {
  return (
    <section id="discover" className="bg-onyx text-ivory py-24 md:py-36 grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center">
            <Chapter numeral="II" label="La Collection" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Discover the Collection
          </h2>
          <p className="mt-4 text-sm font-light text-ivory/50 max-w-md mx-auto leading-relaxed">
            Six disciplines of dress, each a study in structure and shadow.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <a
                href={c.href}
                className="group block relative overflow-hidden aspect-[3/4] bg-onyx"
              >
                <Image
                  src={CATEGORY_IMAGES[c.key]}
                  alt={c.name}
                  className="w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-onyx/30 group-hover:bg-onyx/15 transition-colors duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  <h3 className="font-display text-xl md:text-2xl text-ivory text-center px-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    {c.name}
                  </h3>
                  <span className="mt-2 text-[10px] tracking-luxe uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    Explore
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
