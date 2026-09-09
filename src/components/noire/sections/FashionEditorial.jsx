import Reveal from '@/components/noire/Reveal';
import Chapter from '@/components/noire/Chapter';
import { Image } from '@/components/ui/image';
import { EDITORIAL_IMAGE, HERO_IMAGE } from '@/lib/noireConfig';

export default function FashionEditorial() {
  return (
    <section id="editorial" className="bg-onyx text-ivory py-24 md:py-36 grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Chapter numeral="VII" label="Le Journal" /></div>
          <h2 className="font-display text-4xl md:text-6xl font-light">Fashion Editorial</h2>
          <p className="mt-4 text-sm font-light text-ivory/50 max-w-md mx-auto leading-relaxed">
            A study in chiaroscuro — garments caught between motion and stillness.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-8">
            <div className="relative overflow-hidden aspect-[16/10] bg-ivory/5">
              <Image src={EDITORIAL_IMAGE} alt="Editorial — chiaroscuro" className="w-full h-full" fittingType="fill" />
              <div className="absolute bottom-6 left-6 text-ivory">
                <p className="text-[10px] tracking-luxe uppercase text-gold">Volume I</p>
                <p className="font-display text-2xl mt-1">Silence in Motion</p>
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 md:gap-8">
            <Reveal delay={120}>
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto bg-ivory/5 h-full">
                <Image src={HERO_IMAGE} alt="Editorial — the entrance" className="w-full h-full" fittingType="fill" />
                <div className="absolute bottom-4 left-4 text-ivory">
                  <p className="text-[10px] tracking-luxe uppercase text-gold">Volume II</p>
                  <p className="font-display text-xl mt-1">The Entrance</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-ivory/5 border border-ivory/10 p-8 flex flex-col justify-center h-full">
                <p className="font-display text-2xl italic text-ivory/90 leading-snug">
                  “Elegance is the memory of movement, held still.”
                </p>
                <p className="mt-4 text-[10px] tracking-luxe-sm uppercase text-gold">— The Atelier</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}