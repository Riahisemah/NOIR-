import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/CartContext";

const LINKS = [
  { label: "The Maison", href: "/#story" },
  { label: "Collections", href: "/#exclusive" },
  { label: "Editorial", href: "/#editorial" },
  { label: "Atelier", href: "/#story" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const onHome = location.pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled || !onHome
            ? "bg-onyx/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between text-ivory">
          {/* Left — desktop links */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {LINKS.slice(0, 2).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[11px] tracking-luxe-sm uppercase font-light text-ivory/80 hover:text-gold transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Center — wordmark */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl tracking-[0.3em] font-light text-ivory hover:text-gold transition-colors duration-500"
          >
            NOIRÉ
          </Link>

          {/* Right */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <div className="hidden md:flex items-center gap-8">
              {LINKS.slice(2).map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[11px] tracking-luxe-sm uppercase font-light text-ivory/80 hover:text-gold transition-colors duration-500"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-ivory hover:text-gold transition-colors duration-500"
              aria-label="Open bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.2} />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[9px] bg-gold text-onyx rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  {totalCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-ivory"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.2} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-onyx/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-ivory"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" strokeWidth={1.2} />
          </button>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-ivory hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
