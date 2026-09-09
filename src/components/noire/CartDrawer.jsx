import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { formatTND, whatsappLink } from "@/lib/noireConfig";
import { Image } from "@/components/ui/image";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQty,
    totalCount,
    totalPrice,
  } = useCart();

  const checkout = () => {
    const list = items
      .map(
        (i) =>
          `• ${i.name} (${i.size}, ${i.color}) x${i.qty} — ${formatTND(i.price * i.qty)}`,
      )
      .join("\n");
    const msg = `Bonjour NOIRÉ, je souhaite finaliser ma commande:\n\n${list}\n\nTotal: ${formatTND(totalPrice)}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-onyx/60 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-onyx text-ivory flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 h-20 border-b border-ivory/10">
          <span className="text-[11px] tracking-luxe uppercase text-gold">
            The Silk Lining
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ivory/70 hover:text-gold transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" strokeWidth={1.2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <p className="font-display text-2xl text-ivory/80">
                Your bag is empty
              </p>
              <p className="text-sm font-light text-ivory/40 max-w-xs">
                Curated pieces await. Discover the collection to begin your
                edit.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-[11px] tracking-luxe-sm uppercase text-gold hover:text-ivory transition-colors"
              >
                Continue
              </button>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map((i) => (
                <li key={i.key} className="flex gap-5">
                  <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-ivory/5">
                    {i.image_url && (
                      <Image
                        src={i.image_url}
                        alt={i.name}
                        className="w-full h-full"
                        fittingType="fill"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-3">
                      <h3 className="font-display text-lg leading-tight">
                        {i.name}
                      </h3>
                      <button
                        onClick={() => removeItem(i.key)}
                        className="text-ivory/40 hover:text-gold transition-colors text-[11px] tracking-luxe-sm uppercase"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-[11px] tracking-luxe-sm uppercase text-ivory/50 mt-1">
                      {i.size} · {i.color}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-ivory/15 px-2 py-1">
                        <button
                          onClick={() => updateQty(i.key, i.qty - 1)}
                          className="text-ivory/60 hover:text-gold"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="text-sm font-light w-5 text-center">
                          {i.qty}
                        </span>
                        <button
                          onClick={() => updateQty(i.key, i.qty + 1)}
                          className="text-ivory/60 hover:text-gold"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-light">
                        {formatTND(i.price * i.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ivory/10 px-8 py-6 space-y-5">
            <div className="flex justify-between items-baseline">
              <span className="text-[11px] tracking-luxe uppercase text-ivory/60">
                Subtotal
              </span>
              <span className="font-display text-2xl">
                {formatTND(totalPrice)}
              </span>
            </div>
            <p className="text-[11px] text-ivory/40 font-light">
              Complimentary atelier delivery · Concierge checkout via WhatsApp
            </p>
            <button
              onClick={checkout}
              className="btn-leaf w-full py-4 border border-gold text-[11px] tracking-luxe uppercase text-gold hover:text-ivory transition-colors"
            >
              Request Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
