export const WHATSAPP_NUMBER = "21650000000"; // Maison concierge — replace with the live number

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const formatTND = (price) =>
  `${Number(price || 0).toLocaleString("fr-FR")} TND`;

// Stock imagery — swap for your own photography whenever you like.
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80";
export const GOWN_IMAGE =
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80";
export const SUIT_IMAGE =
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80";
export const COAT_IMAGE =
  "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80";
export const SHIRT_IMAGE =
  "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1200&q=80";
export const BAG_IMAGE =
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80";
export const SHOES_IMAGE =
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&q=80";
export const ATELIER_IMAGE =
  "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=1920&q=80";
export const EDITORIAL_IMAGE =
  "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1920&q=80";
export const LIMITED_IMAGE =
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=80";

export const CATEGORY_IMAGES = {
  Dresses: GOWN_IMAGE,
  Suits: SUIT_IMAGE,
  Coats: COAT_IMAGE,
  Shirts: SHIRT_IMAGE,
  Accessories: BAG_IMAGE,
  Shoes: SHOES_IMAGE,
};
