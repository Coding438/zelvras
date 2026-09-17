// ============================================
// ZELVRA – Configuration
// ============================================

const CONFIG = {
  // ============================================================
  // TWO SheetDB APIs (Google Sheets)
  // 1) PRODUCTS_API  → product catalogue (shop, admin products)
  // 2) ORDERS_API    → customer orders (checkout, admin orders)
  // Paste your SheetDB URLs below (from sheetdb.io dashboard)
  // ============================================================
  PRODUCTS_API: "https://sheetdb.io/api/v1/9wtvnn7n7rguk",
  ORDERS_API:   "https://sheetdb.io/api/v1/28sbdstqw8qcb",

  // Optional: if the API has multiple tabs, set sheet name (or leave null)
  PRODUCTS_SHEET: null,
  ORDERS_SHEET:   null,

  CURRENCY: "Rs.",
  CURRENCY_CODE: "PKR",
  FREE_SHIPPING_THRESHOLD: 2999,
  SHIPPING_COST: 250,

  BRAND_NAME: "ZELVRA",
  BRAND_TAGLINE: "Old Money • Quiet Luxury",

  WHATSAPP: "923001234567",
  EMAIL: "hello@zelvra.com",
  PHONE: "+92 300 1234567",
  INSTAGRAM: "https://instagram.com/zelvra",

  USE_FALLBACK_PRODUCTS: true,

  // Admin portal password — CHANGE THIS
  ADMIN_PASSWORD: "zelvra2026",

  // ImgBB API key — used in admin to upload PNG / JPEG product images
  IMGBB_API_KEY: "3eff9ed2ce40f0efa34f1741a20d6595",

  // Allowed product categories (slug → display label)
  CATEGORIES: {
    polos: "Polos",
    tshirts: "T-Shirts",
    bottoms: "Bottom Wear",
    "2pcs": "2pcs",
    jerseys: "Football Jerseys",
    shoes: "Shoes",
    accessories: "Men Accessories"
  },

  // ============================================================
  // COLLECTION IMAGES — use Postimages / ImgBB direct links
  // ============================================================
  COLLECTIONS: [
    {
      title: "THE POLO EDIT",
      subtitle: "Premium piqué · Ribbed refinement",
      href: "shop.html?category=polos",
      image: "assets/images/collections/polos.png"
    },
    {
      title: "ESSENTIAL TEES",
      subtitle: "240 GSM · Clean minimal lines",
      href: "shop.html?category=tshirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop"
    },
    {
      title: "BOTTOM WEAR",
      subtitle: "Tailored trousers · Refined fit",
      href: "shop.html?category=bottoms",
      image: "assets/images/collections/bottoms.png"
    },
    {
      title: "2PCS SETS",
      subtitle: "Value packs · Effortless pairing",
      href: "shop.html?category=2pcs",
      image: "assets/images/collections/2pcs.png"
    },
    {
      title: "FOOTBALL JERSEYS",
      subtitle: "Match-day style · Premium fit",
      href: "shop.html?category=jerseys",
      image: "assets/images/collections/jerseys.png"
    },
    {
      title: "SHOES",
      subtitle: "Sneakers & formal · Everyday polish",
      href: "shop.html?category=shoes",
      image: "assets/images/collections/shoes.png"
    },
    {
      title: "MEN ACCESSORIES",
      subtitle: "Belts · Caps · Watches · Finishing touches",
      href: "shop.html?category=accessories",
      image: "assets/images/collections/accessories.png"
    }
  ]
};

function getProductsUrl() {
  if (typeof CONFIG === "undefined" || !CONFIG.PRODUCTS_API) {
    throw new Error("PRODUCTS_API not configured");
  }
  let url = CONFIG.PRODUCTS_API;
  if (CONFIG.PRODUCTS_SHEET) url += `?sheet=${encodeURIComponent(CONFIG.PRODUCTS_SHEET)}`;
  return url;
}

function getOrdersUrl() {
  if (typeof CONFIG === "undefined" || !CONFIG.ORDERS_API) {
    throw new Error("ORDERS_API not configured");
  }
  let url = CONFIG.ORDERS_API;
  if (CONFIG.ORDERS_SHEET) url += `?sheet=${encodeURIComponent(CONFIG.ORDERS_SHEET)}`;
  return url;
}
