import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="bg-onyx text-ivory grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-4xl tracking-[0.3em] font-light">
              NOIRÉ
            </div>
            <p className="mt-6 text-sm font-light text-ivory/60 max-w-sm leading-relaxed">
              The Art of Elegance. A maison devoted to the chiaroscuro of
              couture — where shadow meets silk, and every garment becomes a
              masterwork.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-5">
              La Maison
            </div>
            <ul className="space-y-3 text-sm font-light text-ivory/70">
              <li>
                <a href="/#story" className="hover:text-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/#exclusive"
                  className="hover:text-gold transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/#editorial"
                  className="hover:text-gold transition-colors"
                >
                  Editorial
                </a>
              </li>
              <li>
                <a href="/#new" className="hover:text-gold transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-5">
              The Private List
            </div>
            <p className="text-sm font-light text-ivory/60 mb-5">
              Receive private invitations and early access to limited editions.
            </p>
            <form
              onSubmit={submit}
              className="flex items-center border-b border-ivory/20 pb-2 group focus-within:border-gold transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm font-light text-ivory placeholder:text-ivory/30 outline-none"
              />
              <button
                type="submit"
                className="text-ivory hover:text-gold transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.2} />
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-[11px] tracking-luxe-sm uppercase text-gold">
                Welcome to the maison.
              </p>
            )}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-luxe-sm uppercase text-ivory/40">
            © {new Date().getFullYear()} NOIRÉ — Tunis · Paris
          </p>
          <div className="flex gap-6 text-[11px] tracking-luxe-sm uppercase text-ivory/40">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Concierge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
