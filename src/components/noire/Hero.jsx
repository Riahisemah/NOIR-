import { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import { HERO_IMAGE } from "@/lib/noireConfig";

const stagger = (text, base = 0.4) =>
  text.split("").map((ch, i) => (
    <span
      key={i}
      className="stagger-letter"
      style={{ animationDelay: `${i * 0.045 + base}s` }}
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

export default function Hero() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-onyx grain"
    >
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `scale(1.08) translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={HERO_IMAGE}
          alt="NOIRÉ — the art of elegance"
          className="w-full h-full"
          fittingType="fill"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-onyx/20 to-onyx/90" />

      {/* Golden thread */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-[10px] tracking-luxe-sm uppercase text-ivory/50 mb-5 stagger-letter"
          style={{ animationDelay: "0.05s" }}
        >
          Chapitre I — L'Ouverture
        </p>
        <p
          className="text-[11px] md:text-xs tracking-luxe uppercase text-gold mb-6 stagger-letter"
          style={{ animationDelay: "0.2s" }}
        >
          Maison de Couture · Est. MMXXV
        </p>
        <h1 className="font-display font-light text-ivory text-[15vw] md:text-[9vw] leading-[0.95] tracking-tight">
          {stagger("THE ART OF")}
          <br />
          <span className="italic text-gold">{stagger("ELEGANCE", 0.9)}</span>
        </h1>
        <p
          className="mt-8 max-w-md text-sm md:text-base font-light text-ivory/70 leading-relaxed stagger-letter"
          style={{ animationDelay: "1.6s" }}
        >
          Where shadow meets silk. A curated archive of exclusive couture,
          crafted for those who dress in quiet authority.
        </p>
        <a
          href="#exclusive"
          className="btn-leaf mt-10 inline-block px-10 py-4 border border-gold text-[11px] tracking-luxe uppercase text-gold hover:text-ivory transition-colors duration-500"
        >
          Discover the Collection
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/50">
        <span className="text-[9px] tracking-luxe uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
