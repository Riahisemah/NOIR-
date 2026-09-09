import Reveal from "@/components/noire/Reveal";
import Chapter from "@/components/noire/Chapter";
import { Image } from "@/components/ui/image";
import { ATELIER_IMAGE } from "@/lib/noireConfig";

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-onyx text-ivory grain"
    >
      <div className="absolute inset-0">
        <Image
          src={ATELIER_IMAGE}
          alt="The NOIRÉ atelier"
          className="w-full h-full animate-slow-zoom"
          fittingType="fill"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-onyx" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-28 md:py-44">
        <Reveal className="max-w-xl">
          <Chapter numeral="VI" label="La Maison" className="mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
            A house built on <span className="italic text-gold">shadow</span>{" "}
            and silk.
          </h2>
          <div className="mt-8 space-y-5 text-sm md:text-base font-light text-ivory/70 leading-relaxed">
            <p>
              NOIRÉ was founded on a single conviction: that elegance is not
              shown, but felt. We dress the quiet authority of those who need no
              introduction.
            </p>
            <p>
              Each piece is cut in our Tunis atelier, finished by hand, and
              released in deliberate numbers — a refusal of excess in favour of
              intention.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="font-display text-3xl text-gold">24</div>
              <p className="text-[10px] tracking-luxe-sm uppercase text-ivory/40 mt-1">
                Pieces per edition
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">100%</div>
              <p className="text-[10px] tracking-luxe-sm uppercase text-ivory/40 mt-1">
                Hand-finished
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">MMXXV</div>
              <p className="text-[10px] tracking-luxe-sm uppercase text-ivory/40 mt-1">
                Established
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
