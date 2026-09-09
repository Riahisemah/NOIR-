import { useState } from "react";
import Reveal from "@/components/noire/Reveal";
import Chapter from "@/components/noire/Chapter";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="bg-onyx text-ivory py-24 md:py-36 border-t border-ivory/10 grain">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex justify-center mb-5">
            <Chapter numeral="VIII" label="The Private List" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Join the <span className="italic text-gold">maison</span>
          </h2>
          <p className="mt-5 text-sm font-light text-ivory/50 leading-relaxed">
            Private invitations, early access to limited editions, and the
            occasional letter from the atelier. Never more than once a month.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={submit}
            className="mt-10 flex items-center border-b border-ivory/25 pb-3 max-w-md mx-auto group focus-within:border-gold transition-colors duration-500"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent text-center font-light text-ivory placeholder:text-ivory/30 outline-none"
            />
            <button
              type="submit"
              className="text-ivory hover:text-gold transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={1.2} />
            </button>
          </form>
          {sent && (
            <p className="mt-4 text-[11px] tracking-luxe-sm uppercase text-gold">
              You are on the list. Welcome to NOIRÉ.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
