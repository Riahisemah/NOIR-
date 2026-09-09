import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/lib/CartContext";
import {
  formatTND,
  whatsappLink,
  HERO_IMAGE,
  EDITORIAL_IMAGE,
} from "@/lib/noireConfig";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/noire/Reveal";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    // Simulate an async fetch so loading states/skeletons still work,
    // even though the data comes from the local catalog.
    const timer = setTimeout(() => {
      const p = getProductById(id);
      setProduct(p);
      setSize(p?.sizes?.[0] || null);
      setColor(p?.colors?.[0] || null);
      setLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="w-8 h-8 border border-onyx/20 border-t-onyx rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-display text-3xl">Piece not found</p>
        <Link to="/" className="text-[11px] tracking-luxe uppercase text-gold">
          Return to the maison
        </Link>
      </div>
    );
  }

  const gallery = product.gallery?.length
    ? product.gallery
    : [product.image_url, EDITORIAL_IMAGE, HERO_IMAGE];

  const concierge = () => {
    const msg = `Bonjour NOIRÉ, I am interested in the ${product.name} (${formatTND(product.price)}). Could you assist me with personal styling?`;
    window.open(whatsappLink(msg), "_blank");
  };

  const add = () => {
    addItem(product, { size, color, qty: 1 });
  };

  return (
    <div className="bg-ivory pt-20">
      {/* Back */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-luxe-sm uppercase text-onyx/50 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.2} /> The Collection
        </Link>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 px-6 md:px-12 pb-24">
        {/* Gallery — vertical full-screen scroll */}
        <div className="lg:col-span-7 space-y-3">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="relative overflow-hidden bg-onyx aspect-[3/4]">
                <Image
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full"
                  fittingType="fill"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sticky monolith */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 pt-2">
            <Reveal>
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">
                {product.collection}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-light leading-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-[11px] tracking-luxe-sm uppercase text-onyx/40">
                {product.category}
              </p>

              <div className="mt-6 font-light text-3xl">
                {formatTND(product.price)}
              </div>

              <p className="mt-6 text-sm font-light text-onyx/60 leading-relaxed">
                {product.description}
              </p>

              {/* Availability */}
              <div className="mt-6 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${product.availability === "Sold Out" ? "bg-onyx/30" : "bg-gold"}`}
                />
                <span className="text-[11px] tracking-luxe-sm uppercase text-onyx/60">
                  {product.availability}
                </span>
              </div>

              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="mt-8">
                  <p className="text-[10px] tracking-luxe uppercase text-onyx/40 mb-3">
                    Colour
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`px-4 py-2 text-[11px] tracking-luxe-sm uppercase border transition-all duration-300 ${
                          color === c
                            ? "border-gold text-gold"
                            : "border-onyx/20 text-onyx/60 hover:border-onyx/50"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes?.length > 0 && (
                <div className="mt-6">
                  <p className="text-[10px] tracking-luxe uppercase text-onyx/40 mb-3">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`min-w-[3rem] px-3 py-2 text-[11px] tracking-luxe-sm uppercase border transition-all duration-300 ${
                          size === s
                            ? "border-gold text-gold"
                            : "border-onyx/20 text-onyx/60 hover:border-onyx/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to bag */}
              <button
                onClick={add}
                disabled={product.availability === "Sold Out"}
                className="btn-leaf mt-10 w-full py-4 border border-gold text-[11px] tracking-luxe uppercase text-gold hover:text-ivory transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {product.availability === "Sold Out"
                  ? "Currently Unavailable"
                  : "Add to Bag"}
              </button>

              <button
                onClick={concierge}
                className="mt-3 w-full py-4 text-[11px] tracking-luxe uppercase text-onyx/60 hover:text-gold transition-colors duration-500 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.2} /> WhatsApp
                Concierge
              </button>

              {/* Assurances */}
              <div className="mt-10 pt-8 border-t border-onyx/10 space-y-3">
                {[
                  "Hand-finished in the Tunis atelier",
                  "Complimentary worldwide delivery",
                  "Numbered & certified piece",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 text-[11px] tracking-luxe-sm uppercase text-onyx/50"
                  >
                    <Check
                      className="w-3.5 h-3.5 text-gold"
                      strokeWidth={1.5}
                    />{" "}
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Fixed concierge button */}
      <button
        onClick={concierge}
        className="fixed bottom-6 right-6 z-40 bg-gold text-onyx px-5 py-3 text-[10px] tracking-luxe uppercase flex items-center gap-2 shadow-2xl hover:bg-onyx hover:text-gold transition-colors duration-500"
      >
        <MessageCircle className="w-4 h-4" strokeWidth={1.5} /> WhatsApp
        Concierge
      </button>
    </div>
  );
}
