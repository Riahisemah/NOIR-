import Reveal from '@/components/noire/Reveal';
import Chapter from '@/components/noire/Chapter';
import { Image } from '@/components/ui/image';
import { LIMITED_IMAGE } from '@/lib/noireConfig';
import { Link } from 'react-router-dom';

export default function LimitedEdition({ product }) {
  return (
    <section id="limited" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-onyx grain">
      <Image src={LIMITED_IMAGE} alt="Limited Edition" className="absolute inset-0 w-full h-full" fittingType="fill" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <Reveal className="max-w-lg text-ivory">
            <Chapter numeral="V" label="Numbered · Finite · Eternal" className="mb-5" />
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              The Limited <span className="italic text-gold">Edition</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-light text-ivory/70 leading-relaxed max-w-md">
              A single gold-accented gown, cut from twelve metres of silk and finished
              by hand. Twenty-four numbered pieces, never repeated.
            </p>
            {product && (
              <Link
                to={`/product/${product.id}`}
                className="btn-leaf mt-10 inline-block px-10 py-4 border border-gold text-[11px] tracking-luxe uppercase text-gold hover:text-ivory transition-colors duration-500"
              >
                Acquire the Piece
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}