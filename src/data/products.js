// Local product catalog — replaces the Base44 "Product" entity.
// Swap the image URLs / copy for your own catalog whenever you like.

export const PRODUCTS = [
  {
    id: "gown-emerald-silk",
    name: "Émeraude Silk Gown",
    category: "Dresses",
    collection: "Exclusive",
    price: 2450,
    image_url:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1400&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1400&q=80",
    ],
    description:
      "A floor-length gown cut from twelve metres of emerald silk, finished entirely by hand in the Tunis atelier. Numbered, never repeated.",
    availability: "Limited",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Émeraude", "Noir"],
    featured: true,
    created_date: "2026-03-01",
  },
  {
    id: "tailleur-noir",
    name: "Le Tailleur Noir",
    category: "Suits",
    collection: "Exclusive",
    price: 1890,
    image_url:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1400&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1400&q=80",
    ],
    description:
      "Sharp-shouldered tailoring in double-faced wool, cut for quiet authority. Fully lined in bemberg silk.",
    availability: "Available",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Anthracite"],
    featured: true,
    created_date: "2026-02-20",
  },
  {
    id: "manteau-ivoire",
    name: "Manteau Ivoire",
    category: "Coats",
    collection: "Exclusive",
    price: 1650,
    image_url:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1400&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1400&q=80",
    ],
    description:
      "An architectural cocoon coat in ivory wool-cashmere, structured to move like sculpture.",
    availability: "Available",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivoire", "Camel"],
    featured: true,
    created_date: "2026-02-14",
  },
  {
    id: "chemise-soie-blanche",
    name: "Chemise Soie Blanche",
    category: "Shirts",
    collection: "New Arrivals",
    price: 420,
    image_url:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1400&q=80",
    ],
    description:
      "A pure silk shirt with a sculpted collar and mother-of-pearl buttons.",
    availability: "Available",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    featured: false,
    created_date: "2026-03-10",
  },
  {
    id: "sac-cuir-onyx",
    name: "Sac Cuir Onyx",
    category: "Accessories",
    collection: "New Arrivals",
    price: 980,
    image_url:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&q=80",
    ],
    description:
      "Structured top-handle bag in full-grain calfskin, hand-stitched hardware in brushed gold.",
    availability: "Available",
    sizes: [],
    colors: ["Onyx", "Cognac"],
    featured: false,
    created_date: "2026-03-08",
  },
  {
    id: "escarpins-or",
    name: "Escarpins Or",
    category: "Shoes",
    collection: "New Arrivals",
    price: 690,
    image_url:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1400&q=80",
    ],
    description:
      "A pointed-toe heel finished with a hand-set gold ornament at the vamp.",
    availability: "Available",
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Or", "Noir"],
    featured: false,
    created_date: "2026-03-05",
  },
  {
    id: "robe-bordeaux",
    name: "Robe Bordeaux",
    category: "Dresses",
    collection: "New Arrivals",
    price: 1120,
    image_url:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
    ],
    description:
      "A fluid bias-cut dress in bordeaux crepe, finished with an invisible back closure.",
    availability: "Available",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Bordeaux"],
    featured: false,
    created_date: "2026-03-02",
  },
  {
    id: "veste-lin-sable",
    name: "Veste Lin Sable",
    category: "Suits",
    collection: "New Arrivals",
    price: 780,
    image_url:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1400&q=80",
    ],
    description:
      "A deconstructed linen blazer with marked shoulders and a single button closure.",
    availability: "Sold Out",
    sizes: ["S", "M", "L"],
    colors: ["Sable"],
    featured: false,
    created_date: "2026-02-28",
  },
  {
    id: "robe-limitee-or",
    name: "La Robe Numérotée",
    category: "Dresses",
    collection: "Limited Edition",
    price: 3200,
    image_url:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1400&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1400&q=80",
    ],
    description:
      "A single gold-accented gown, cut from twelve metres of silk and finished by hand. Twenty-four numbered pieces, never repeated.",
    availability: "Limited",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Or", "Noir"],
    featured: true,
    created_date: "2026-01-15",
  },
];

function matchesFilter(product, filter) {
  if (filter.id && product.id !== filter.id) return false;
  if (filter.category && product.category !== filter.category) return false;
  if (filter.collection && product.collection !== filter.collection)
    return false;
  if (filter.featured && !product.featured) return false;
  return true;
}

export function getProducts(filter = {}, limit = 100) {
  return [...PRODUCTS]
    .sort((a, b) => (a.created_date < b.created_date ? 1 : -1))
    .filter((p) => matchesFilter(p, filter))
    .slice(0, limit);
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}
