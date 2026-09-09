import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { formatTND } from "@/lib/noireConfig";

export default function ProductCard({ product, className = "", index = 0 }) {
  if (!product) return null;
  return (
    <Link to={`/product/${product.id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden bg-ivory/5 aspect-[3/4]">
        {product.image_url && (
          <Image
            src={product.image_url}
            alt={product.name}
            className="w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-[1.06]"
            fittingType="fill"
          />
        )}
        <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/10 transition-colors duration-700" />
        {product.availability === "Limited" && (
          <span className="absolute top-4 left-4 text-[9px] tracking-luxe uppercase text-gold border border-gold/40 px-2 py-1 bg-onyx/40 backdrop-blur-sm">
            Limited
          </span>
        )}
        {product.availability === "Sold Out" && (
          <span className="absolute top-4 left-4 text-[9px] tracking-luxe uppercase text-ivory border border-ivory/40 px-2 py-1 bg-onyx/60 backdrop-blur-sm">
            Sold Out
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl leading-tight group-hover:text-gold transition-colors duration-500">
          {product.name}
        </h3>
        <span className="text-sm font-light text-ivory/70 whitespace-nowrap">
          {formatTND(product.price)}
        </span>
      </div>
      <p className="text-[10px] tracking-luxe-sm uppercase text-ivory/40 mt-1">
        {product.category}
      </p>
    </Link>
  );
}
