import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Star,
  Plus,
  Minus,
  X,
  Check,
  Sparkles,
  ArrowDown,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
  Monitor,
  Layout,
  Heart,
  Flame,
  Award
} from 'lucide-react';

// Custom Hand-Drawn SVG Doodles & Botanical Line Art to match the reference design
const SteamLinesSVG = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 40 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 32C8 26 14 22 12 16C10 10 15 6 13 2" stroke="#FF6B2B" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M20 33C18 27 24 23 22 17C20 11 25 7 23 3" stroke="#FF6B2B" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M30 32C28 26 34 22 32 16C30 10 35 6 33 2" stroke="#FF6B2B" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

const CookieCrumbsSVG = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#FFFDF9" />
    <path d="M18 14C19.5 13 22 14.5 21 16.5C20 18.5 17 17.5 18 14Z" fill="#331B15" />
    <path d="M28 12C30 11.5 31.5 13.5 30 15C28.5 16.5 26.5 14 28 12Z" fill="#331B15" />
    <circle cx="23" cy="22" r="2.2" fill="#331B15" />
    <path d="M32 21C34 20.5 35 23 33.5 24.5C32 26 30 23.5 32 21Z" fill="#331B15" />
    <circle cx="15" cy="24" r="1.8" fill="#331B15" />
    <path d="M20 29C22 28.5 23 31 21 32C19 33 18.5 30 20 29Z" fill="#331B15" />
    <circle cx="29" cy="30" r="2" fill="#331B15" />
    <circle cx="25" cy="16" r="1.3" fill="#331B15" />
    <circle cx="35" cy="16" r="1.4" fill="#331B15" />
  </svg>
);

const SketchedLoafSVG = ({ className = "w-28 h-24" }) => (
  <svg viewBox="0 0 140 110" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 72C8 55 22 30 52 18C82 6 115 12 126 30C135 45 122 68 95 82C65 96 24 90 15 72Z"
      stroke="#331B15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="1 0"
    />
    <path d="M38 30C52 34 65 48 68 62" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M58 21C72 26 85 40 88 54" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M80 16C94 21 105 33 108 46" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 52C36 56 48 68 50 78" stroke="#331B15" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M22 74C45 84 85 78 118 52" stroke="#331B15" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
  </svg>
);

const SketchedCookieSVG = ({ className = "w-20 h-20", strokeColor = "#331B15" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 8C72 7 91 24 92 48C93 72 75 91 51 92C26 93 9 75 8 51C7 27 28 9 50 8Z"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <ellipse cx="35" cy="32" rx="6" ry="4.5" transform="rotate(-15 35 32)" stroke={strokeColor} strokeWidth="2" />
    <ellipse cx="62" cy="28" rx="5" ry="6" transform="rotate(20 62 28)" stroke={strokeColor} strokeWidth="2" />
    <ellipse cx="70" cy="54" rx="6.5" ry="5" transform="rotate(-10 70 54)" stroke={strokeColor} strokeWidth="2" />
    <ellipse cx="46" cy="52" rx="5.5" ry="5.5" stroke={strokeColor} strokeWidth="2" />
    <ellipse cx="30" cy="64" rx="6" ry="4.5" transform="rotate(25 30 64)" stroke={strokeColor} strokeWidth="2" />
    <ellipse cx="58" cy="74" rx="6" ry="4.5" transform="rotate(-18 58 74)" stroke={strokeColor} strokeWidth="2" />
    <circle cx="48" cy="22" r="2" fill={strokeColor} />
    <circle cx="22" cy="46" r="2.2" fill={strokeColor} />
    <circle cx="77" cy="39" r="2" fill={strokeColor} />
    <circle cx="44" cy="78" r="1.8" fill={strokeColor} />
    <path d="M52 38C56 36 60 39 59 43" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M25 38C29 41 30 46 27 50" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const SketchedSwirlPastrySVG = ({ className = "w-28 h-24" }) => (
  <svg viewBox="0 0 130 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M65 55C65 48 72 44 78 48C85 53 82 65 72 68C58 72 46 60 50 45C55 26 78 20 94 30C112 42 110 70 92 82C70 96 36 86 24 62C12 38 28 12 58 8"
      stroke="#3D1E0B"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M20 78C10 72 6 58 14 48C22 38 36 42 38 54"
      stroke="#3D1E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M56 26L60 32M76 24L75 31M92 36L86 41M96 56L89 56" stroke="#3D1E0B" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const BotanicalWheatSVG = ({ className = "w-64 h-80" }) => (
  <svg viewBox="0 0 260 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Wheat & Rye Stalks Line Art on Dark Banner */}
    <path d="M190 310C185 240 160 150 115 65" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
    <path d="M225 310C220 220 205 130 175 40" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
    <path d="M140 315C130 260 95 200 50 155" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
    {/* Wheat kernels along stalk 1 */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <g key={`s1-${i}`} transform={`translate(${120 + i * 9}, ${75 + i * 24}) rotate(-25)`}>
        <ellipse cx="-10" cy="0" rx="12" ry="5" transform="rotate(-30 -10 0)" stroke="#5A3E36" strokeWidth="1.6" />
        <ellipse cx="12" cy="-4" rx="12" ry="5" transform="rotate(30 12 -4)" stroke="#5A3E36" strokeWidth="1.6" />
        <path d="M-20 -6L-32 -14M20 -10L32 -20" stroke="#5A3E36" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    ))}
    {/* Wheat kernels along stalk 2 */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <g key={`s2-${i}`} transform={`translate(${178 + i * 6}, ${55 + i * 26}) rotate(-12)`}>
        <ellipse cx="-10" cy="0" rx="11" ry="4.5" transform="rotate(-35 -10 0)" stroke="#5A3E36" strokeWidth="1.6" />
        <ellipse cx="10" cy="-3" rx="11" ry="4.5" transform="rotate(35 10 -3)" stroke="#5A3E36" strokeWidth="1.6" />
      </g>
    ))}
    {/* Textured Corn / Bread Loaf Ear on lower left of botanical group */}
    <g transform="translate(85, 195) rotate(-32)">
      <rect x="0" y="0" width="38" height="110" rx="19" stroke="#5A3E36" strokeWidth="1.8" />
      <path d="M6 20H32M4 36H34M4 52H34M4 68H34M6 84H32" stroke="#5A3E36" strokeWidth="1.4" />
      <path d="M13 6V104M25 6V104" stroke="#5A3E36" strokeWidth="1.4" />
    </g>
  </svg>
);

const BittenCookieBadge = ({ className = "w-9 h-9" }) => (
  <span className={`inline-flex items-center justify-center rounded-full bg-[#FF6B2B] text-white shadow-sm align-middle ${className}`}>
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <path
        d="M25 17C25 21.9706 20.9706 26 16 26C11.0294 26 7 21.9706 7 17C7 12.0294 11.0294 8 16 8C16.8 8 17.5 8.1 18.2 8.3C17.8 9.8 18.6 11.5 20.2 12C20.8 12.2 21.5 12.1 22 11.9C22.2 13.6 23.4 15 25 15.3C25 15.9 25 16.4 25 17Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="14" r="1.3" fill="white" />
      <circle cx="15" cy="20" r="1.4" fill="white" />
      <circle cx="11" cy="18" r="1.1" fill="white" />
      <circle cx="19" cy="17" r="1.3" fill="white" />
      <circle cx="18" cy="22" r="1.1" fill="white" />
    </svg>
  </span>
);

const WavySquiggleSVG = ({ className = "w-16 h-4" }) => (
  <svg viewBox="0 0 80 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12C9 4 15 4 21 12C27 20 33 20 39 12C45 4 51 4 57 12C63 20 69 20 76 10"
      stroke="#8CD0E3"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

const BakerAvatarSVG = ({ className = "w-12 h-12" }) => (
  <div className={`rounded-full bg-[#FDE624] border-2 border-[#331B15] flex items-center justify-center overflow-hidden shadow-sm ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      {/* Friendly illustrated vintage baker */}
      <circle cx="32" cy="32" r="30" fill="#FDE624" />
      {/* Shirt */}
      <path d="M14 62C16 49 24 46 32 46C40 46 48 49 50 62" fill="#75421E" stroke="#331B15" strokeWidth="2.2" />
      {/* Collar */}
      <path d="M24 47L32 53L40 47" fill="#FFF" stroke="#331B15" strokeWidth="2" />
      {/* Neck & Face */}
      <rect x="28" y="38" width="8" height="10" fill="#FCD5B5" stroke="#331B15" strokeWidth="2" />
      <path d="M21 26C21 19 25 15 32 15C39 15 43 19 43 26V32C43 38 38 42 32 42C26 42 21 38 21 32V26Z" fill="#FCD5B5" stroke="#331B15" strokeWidth="2.2" />
      {/* White Hair */}
      <path d="M19 26C18 18 24 12 32 12C40 12 46 18 45 26C43 22 39 20 32 20C25 20 21 22 19 26Z" fill="#FFFFFF" stroke="#331B15" strokeWidth="2" />
      {/* Eyes & Smile */}
      <circle cx="28" cy="28" r="1.6" fill="#331B15" />
      <circle cx="36" cy="28" r="1.6" fill="#331B15" />
      <path d="M28 35C30 37 34 37 36 35" stroke="#331B15" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

const RotatingStampBadge = ({ className = "" }) => (
  <div className={`relative w-28 h-28 flex items-center justify-center select-none ${className}`}>
    <svg viewBox="0 0 120 120" className="w-full h-full animate-[spin_18s_linear_infinite]">
      <defs>
        <path
          id="circlePath"
          d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
        />
      </defs>
      <text fill="#331B15" fontSize="10.5" fontWeight="800" letterSpacing="2.6px">
        <textPath href="#circlePath" startOffset="0%">
          • FOR THE WHOLE FAMILY • FUN
        </textPath>
      </text>
    </svg>
    <div className="absolute w-14 h-14 rounded-full bg-[#FDE624] flex items-center justify-center shadow-inner border border-[#331B15]/20">
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path
          d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C16.7 8 17.4 8.1 18 8.3C17.7 9.6 18.4 11 19.8 11.5C20.3 11.7 20.9 11.6 21.4 11.4C21.6 12.9 22.6 14.1 24 14.4V16Z"
          stroke="#331B15"
          strokeWidth="2"
        />
        <circle cx="13" cy="14" r="1.2" fill="#331B15" />
        <circle cx="15" cy="19" r="1.3" fill="#331B15" />
        <circle cx="18" cy="16" r="1.2" fill="#331B15" />
      </svg>
    </div>
  </div>
);

// Organic Hand-Drawn Yellow Button matching ROLLIN.'s signature convex pill shape
const OrganicYellowButton = ({
  children,
  onClick,
  showDot = false,
  size = "md",
  className = ""
}) => {
  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-xs sm:text-sm",
    lg: "px-8 py-3.5 text-sm sm:text-base"
  };

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center font-black uppercase tracking-wider text-[#331B15] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses[size]} ${className}`}
    >
      {/* Custom SVG hand-drawn organic barrel-pill background */}
      <svg
        viewBox="0 0 200 64"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full drop-shadow-[0_3px_0_rgba(51,27,21,0.18)] group-hover:drop-shadow-[0_5px_0_rgba(51,27,21,0.25)] transition-all"
      >
        <path
          d="M28 6 C75 1, 125 1, 172 6 C190 8, 197 20, 197 32 C197 44, 190 56, 172 58 C125 63, 75 63, 28 58 C10 56, 3 44, 3 32 C3 20, 10 8, 28 6 Z"
          fill="#F7E31B"
          stroke="#331B15"
          strokeWidth="3"
           className="group-hover:fill-[#FFE924] transition-colors"
        />
      </svg>
      <span className="relative z-10 flex items-center gap-2">
        {showDot && <span className="w-2 h-2 rounded-full bg-white inline-block shadow-sm" />}
        {children}
      </span>
    </button>
  );
};

const CATEGORIES = [
  { id: 'COOKIES', label: 'COOKIES', count: 12, bg: 'bg-[#D7C4BE]', text: 'text-[#331B15]', badgeBg: 'bg-[#331B15]' },
  { id: 'CAKE', label: 'CAKE', count: 27, bg: 'bg-[#9DCAD4]', text: 'text-[#0B4F5E]', badgeBg: 'bg-[#0B4F5E]' },
  { id: 'BRETZEL', label: 'BRETZEL', count: 8, bg: 'bg-[#DCD0FF]', text: 'text-[#2D1963]', badgeBg: 'bg-[#2D1963]' },
  { id: 'PASTRIES', label: 'PASTRIES', count: 23, bg: 'bg-[#E3E7E8]', text: 'text-[#243238]', badgeBg: 'bg-[#243238]' },
  { id: 'CROISSANT', label: 'CROISSANT', count: 21, bg: 'bg-[#F7E31B]', text: 'text-[#331B15]', badgeBg: 'bg-[#331B15]' },
  { id: 'BAGEL', label: 'BAGEL', count: 13, bg: 'bg-[#FFCBB5]', text: 'text-[#521D08]', badgeBg: 'bg-[#521D08]' },
];

const DAILY_PRODUCTS = [
  {
    id: 'bagel-seeds',
    title: 'BAGEL WITH SEEDS',
    category: 'BAGEL',
    price: 14,
    cardBg: 'bg-[#FFA977]',
    subtitle: 'Toasted sesame & poppy seed NYC-style rings',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=85',
    badge: 'FRESH'
  },
  {
    id: 'sliced-bread',
    title: 'SLICED PIECE BREAD',
    category: 'PASTRIES',
    price: 18,
    cardBg: 'bg-[#99D9EA]',
    subtitle: '72-hour fermented country walnut sourdough',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85',
    badge: 'ARTISAN'
  },
  {
    id: 'cookies-glucose',
    title: 'COOKIES GLUCOSE',
    category: 'COOKIES',
    price: 16,
    cardBg: 'bg-[#FDE624]',
    subtitle: 'Belgian dark chunk & browned butter sea salt',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85',
    badge: 'CRUNCHY'
  },
  {
    id: 'butter-croissant',
    title: 'FLAKY CROISSANT',
    category: 'CROISSANT',
    price: 15,
    cardBg: 'bg-[#FFCBB5]',
    subtitle: 'Isigny Sainte-Mère cultured butter layers',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85',
    badge: 'TASTY'
  },
  {
    id: 'bavarian-bretzel',
    title: 'BAVARIAN BRETZEL',
    category: 'BRETZEL',
    price: 12,
    cardBg: 'bg-[#DCD0FF]',
    subtitle: ' Malted crust with coarse flaky sea salt',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=85',
    badge: 'WARM'
  },
  {
    id: 'velvet-cake',
    title: 'PLAIN BUTTER CAKE',
    category: 'CAKE',
    price: 22,
    cardBg: 'bg-[#9DCAD4]',
    subtitle: 'Madagascar vanilla bean & golden crumb',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85',
    badge: 'SWEET'
  }
];

const FEATURED_ITEMS = [
  {
    id: 'bagel-buns',
    name: 'Bagel Buns',
    note: 'Gluten free',
    price: 16,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80',
    desc: 'All cookies should have a show-stopping German chocolate cake in their repertoire and this is one of our favourites.'
  },
  {
    id: 'wheat-cookies',
    name: 'Wheat Cookies',
    note: 'Organic Oat',
    price: 16,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
    desc: 'Hand-tied stacks of real whole-wheat dark chocolate chunk cookies baked on stone hearths every morning.'
  }
];

export default function App() {
  // View switcher so the user can experience the Full Landing Page, the "Art of Baking" Hero (Image 1), or the Dual Mobile Preview (Image 6)
  const [viewMode, setViewMode] = useState('full'); // 'full' | 'art-hero' | 'mobile-dual'
  const [heroStyle, setHeroStyle] = useState('cookies'); // 'cookies' ("BAKE THE COOKIES") | 'art' ("THE ART OF BAKING.") | 'hand' ("MADE BY HAND")
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [darkBannerSlide, setDarkBannerSlide] = useState(0); // 0: "WHY IS BAKING CONSIDERED AS ART FORM?" | 1: "MADE BY HAND, FROM SCRATCH, WITH LOVE."
  const [featuredIdx, setFeaturedIdx] = useState(0);

  // Cart & Interactive Modals
  const [cart, setCart] = useState([
    { id: 'wheat-baked', name: 'Real Wheat Baked Cookies (Pack)', price: 16, qty: 1, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80' },
    { id: 'bagel-buns', name: 'Bagel Buns (Gluten Free)', price: 16, qty: 1, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80' }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedReviewTag, setSelectedReviewTag] = useState('COOKIES');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    triggerToast(`Added "${item.name || item.title}" to your bakery bag!`);
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Filter products for daily section
  const filteredProducts =
    activeCategory === 'ALL'
      ? DAILY_PRODUCTS
      : [
          ...DAILY_PRODUCTS.filter((p) => p.category === activeCategory),
          ...DAILY_PRODUCTS.filter((p) => p.category !== activeCategory)
        ];

  const visibleProducts = [
    filteredProducts[carouselIndex % filteredProducts.length],
    filteredProducts[(carouselIndex + 1) % filteredProducts.length],
    filteredProducts[(carouselIndex + 2) % filteredProducts.length]
  ];

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % filteredProducts.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);

  const renderThreeCardCollage = (showQuote = true) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end pt-10">
      {/* LEFT CARD: Tall Stack of Chocolate Chip Cookies breaking out of frame */}
      <div className="md:col-span-4 relative pt-12 group">
        <div className="relative bg-[#F5D6B4] rounded-[38px] p-5 pb-0 min-h-[290px] flex flex-col justify-end overflow-visible shadow-sm border border-[#331B15]/5">
          {/* Hand-drawn sketched cookie on right edge */}
          <div className="absolute right-2 top-8 opacity-85 pointer-events-none">
            <SketchedCookieSVG className="w-20 h-20" />
          </div>

          {/* Towering Cookie Stack Pop-Out Image */}
          <div className="relative -mt-24 z-10 flex justify-center items-end">
            <div className="relative w-56 sm:w-60 h-[320px] flex flex-col items-center justify-end">
              {/* Custom stacked cookie visual combining crisp food photography and layered cookie slices */}
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=85"
                alt="Tall Stack of Artisanal Chocolate Chip Cookies"
                className="w-52 h-72 object-cover rounded-[28px] shadow-xl border-4 border-[#F5D6B4] transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Front Hero Cookie Overlay */}
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=85"
                alt="Crunchy Cookie Closeup"
                className="w-28 h-28 object-cover rounded-full shadow-2xl border-4 border-[#F5D6B4] -mt-20 ml-24 transform rotate-12 group-hover:rotate-6 transition-all"
              />
            </div>
          </div>

          <div className="py-3 flex items-center justify-between text-xs font-bold text-[#331B15]/80">
            <span>8-STACK CHOCO CHIP</span>
            <button
              onClick={() =>
                addToCart({
                  id: 'stack-cookies',
                  name: '8-Stack Choco Chip Cookies',
                  price: 14,
                  image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80'
                })
              }
              className="underline hover:text-[#FF6B2B] font-extrabold"
            >
              + Add ($14)
            </button>
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: Optional mini green card + Rich Brown "CRUNCHY" $16 Card */}
      <div className="md:col-span-4 flex flex-col items-center gap-5">
        {showQuote && (
          <div className="w-40 h-28 rounded-[24px] bg-[#2D7A53] p-2.5 relative shadow-md self-center md:self-end md:mr-4 overflow-hidden group cursor-pointer"
               onClick={() => addToCart({ id: 'baked-loaf-tray', name: 'Twin Ceramic Loaf Bake', price: 19, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' })}>
            <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#A3E635] text-[#1A4731] flex items-center justify-center text-[10px] font-black z-10 shadow">
              🍃
            </span>
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
              alt="Baked Ceramic Trays"
              className="w-full h-full object-cover rounded-[18px] group-hover:scale-105 transition-transform"
            />
          </div>
        )}

        <div className="relative w-full bg-[#7A441E] rounded-[38px] p-6 sm:p-7 text-white shadow-md overflow-visible min-h-[285px] flex flex-col justify-between group">
          {/* Top Center Floating Orange Pill: CRUNCHY */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B2B] text-white font-display text-sm sm:text-base tracking-wider uppercase px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
            CRUNCHY
          </div>

          <div className="mt-2 z-10">
            <h3 className="font-display text-xl sm:text-2xl leading-[1.15] tracking-wide uppercase text-white">
              TASTE THE REAL
              <br />
              WHEAT BAKED
              <br />
              ITEMS.
            </h3>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display text-3xl text-[#FF7A2F]">$16</span>
              <button
                onClick={() =>
                  addToCart({
                    id: 'wheat-baked',
                    name: 'Real Wheat Baked Cookies (Pack)',
                    price: 16,
                    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80'
                  })
                }
                className="text-xs uppercase font-extrabold bg-white/15 hover:bg-[#F7E31B] hover:text-[#331B15] px-3 py-1 rounded-full transition-colors"
              >
                + Add to Bag
              </button>
            </div>
          </div>

          {/* Bottom-left hand-drawn swirl pastry illustration */}
          <div className="absolute bottom-0 left-0 opacity-70 pointer-events-none">
            <SketchedSwirlPastrySVG className="w-28 h-24" />
          </div>

          {/* Bottom-right twine-tied cookies image */}
          <div className="relative self-end -mr-2 -mb-2 z-10">
            <div className="w-36 h-28 rounded-2xl overflow-hidden border-2 border-[#9C5C30] shadow-lg transform group-hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=85"
                alt="Twine tied wheat cookies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Yellow Chef Card with Pop-Out Baker + Optional Customer Quote */}
      <div className="md:col-span-4 flex flex-col gap-5 pt-10">
        {!showQuote && (
          <div className="self-end mb-1 mr-2">
            <WavySquiggleSVG className="w-20 h-5" />
          </div>
        )}

        <div className="relative bg-[#FDE624] rounded-[38px] p-6 pb-0 min-h-[260px] flex flex-col justify-end overflow-visible shadow-sm group">
          {/* Background Hand-Drawn Sketches inside Yellow Card */}
          <div className="absolute -left-2 top-3 opacity-85 pointer-events-none transform -rotate-12">
            <SketchedLoafSVG className="w-28 h-20" />
          </div>
          <div className="absolute right-2 bottom-4 opacity-80 pointer-events-none">
            <SketchedCookieSVG className="w-20 h-20" />
          </div>

          {/* Floating COMBO Badge */}
          <div
            onClick={() =>
              addToCart({
                id: 'chef-combo',
                name: 'Master Baker Artisan Bread Combo Bag',
                price: 24,
                image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80'
              })
            }
            className={`cursor-pointer absolute top-6 right-5 z-20 ${
              showQuote ? 'bg-[#1F7A4C]' : 'bg-[#573012]'
            } hover:scale-105 transition-transform text-white font-display text-xs sm:text-sm tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md`}
          >
            COMBO
          </div>

          {/* Baker & Baguette Paper Bag Pop-out Composition */}
          <div className="relative -mt-20 z-10 flex items-end justify-center">
            <div className="relative w-64 h-64 flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=85"
                alt="Happy Master Baker holding fresh bread"
                className="w-52 h-64 object-cover object-top rounded-t-[36px] shadow-lg border-x-4 border-t-4 border-white/70"
              />
              {/* Paper bag of baguettes overlay */}
              <div className="absolute -bottom-1 right-1 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#FDE624] shadow-xl transform rotate-6 group-hover:rotate-3 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=85"
                  alt="Bag of Baguettes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Quote under Chef card (shown in full-page Section 5) */}
        {showQuote && (
          <div className="pt-2 pl-2 pr-4 relative">
            <span className="font-display text-3xl text-[#FF6B2B] leading-none absolute -left-2 top-1">“</span>
            <p className="text-xs sm:text-sm font-semibold text-[#331B15]/90 leading-relaxed pl-4">
              Baking is a craft in itself, and we bake these delicious and crumbly flavours bakery items.
            </p>
            <p className="text-right text-xs font-extrabold text-[#331B15] mt-2">— Ashton Cooper</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderButterReviewBanner = () => (
    <section className="mt-12 bg-[#9DC9D1] rounded-[36px] p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
      {/* Real Chocolate Chip Cookie peeking in top-right corner */}
      <img
        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80"
        alt="Corner Cookie"
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full absolute -top-6 -right-6 shadow-lg border-4 border-[#9DC9D1]"
      />

      {/* Decorative Soft Yellow Loop behind WITH ENOUGH */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className="w-28 h-28 absolute top-3 left-2 pointer-events-none opacity-80"
      >
        <path
          d="M10 95 C45 105, 85 80, 75 45 C68 20, 35 15, 25 40 C15 65, 50 95, 95 85"
          stroke="#E8F086"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Half */}
        <div className="lg:col-span-6 lg:border-r lg:border-[#084B59]/25 lg:pr-8">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] leading-[1.12] text-[#084B59] uppercase tracking-wide">
            WITH ENOUGH BUTTER,
            <br />
            ANYTHING IS GOOD!
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5">
              <BakerAvatarSVG className="w-12 h-12 shrink-0" />
              <p className="text-xs sm:text-sm font-bold text-[#084B59] max-w-[190px] leading-snug">
                Our master plan to freshen up a 200-year-old.
              </p>
            </div>

            <button
              onClick={() => setIsBlogModalOpen(true)}
              className="text-xs sm:text-sm font-extrabold text-[#084B59] underline decoration-2 underline-offset-4 hover:text-[#331B15] transition-colors text-left"
            >
              What we
              <br />
              are dishing out ?
            </button>
          </div>
        </div>

        {/* Right Half: 3.73 Rating & 6 Pill Tags */}
        <div className="lg:col-span-6 lg:pl-6">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-display text-4xl sm:text-5xl text-[#084B59]">3.73</span>
            <div>
              <div className="flex items-center gap-1 text-white">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-white text-white drop-shadow-sm" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#084B59] mt-1">
                Based on 4350 reviews.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-lg">
            {['PLAIN CAKE', 'CROISSANT', 'LOAF BREAD', 'COOKIES', 'BRETZEL', 'APPLE PIE'].map((tag) => {
              const isSelected = selectedReviewTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedReviewTag(tag);
                    triggerToast(`Showing top customer reviews for ${tag}`);
                  }}
                  className={`py-2 px-3 rounded-[50%] border-[1.5px] border-[#084B59] font-display text-xs tracking-wider uppercase transition-all ${
                    isSelected
                      ? 'bg-[#084B59] text-white shadow-sm scale-[1.02]'
                      : 'bg-transparent text-[#084B59] hover:bg-[#084B59]/10'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  const renderMobileDualPreview = () => (
    <div className="py-10 px-4 flex flex-col items-center">
      <div className="mb-6 text-center">
        <span className="inline-block bg-[#F7E31B] text-[#331B15] font-display text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-2">
          Interactive Mobile Showcase (Image 6)
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
          ROLLIN. Mobile Responsive Experience
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 max-w-5xl w-full">
        {/* PHONE 1: "BAKE THE COOKIES" Mobile Hero */}
        <div className="w-full max-w-[360px] bg-[#FAF5F0] rounded-[44px] p-5 shadow-2xl border-[6px] border-[#261713] relative overflow-hidden">
          {/* Top White Pill Header */}
          <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm mb-5">
            <span className="font-display text-xl tracking-tight text-[#331B15]">
              ROLLIN<span className="text-[#FF6B2B]">.</span>
            </span>
            <button
              onClick={() => setIsBlogModalOpen(true)}
              className="flex flex-col gap-1.5 items-end p-1"
            >
              <span className="w-5 h-0.5 bg-[#331B15] rounded-full" />
              <span className="w-3.5 h-0.5 bg-[#331B15] rounded-full" />
            </button>
          </div>

          {/* Steam + Title */}
          <div className="text-center relative pt-2">
            <div className="flex justify-center -mb-1">
              <SteamLinesSVG className="w-7 h-7" />
            </div>
            <h1 className="font-display text-[44px] leading-[0.95] text-[#331B15] uppercase">
              BAKE THE
              <br />
              COOKIES
            </h1>
          </div>

          {/* Stacked Bread Image Card with Badges */}
          <div className="relative mt-6 pt-8">
            {/* TASTY badge */}
            <span className="absolute top-1 left-0 z-20 bg-[#1F7A4C] text-white font-display text-xs px-3.5 py-1.5 rounded-full shadow">
              TASTY
            </span>
            {/* FRESH badge */}
            <span className="absolute top-2 right-1 z-20 bg-[#129CEB] text-white font-display text-xs px-3.5 py-1.5 rounded-full shadow transform rotate-3">
              • FRESH
            </span>

            <div className="bg-[#FDE624] rounded-[28px] p-4 pt-0 relative shadow-sm">
              <div className="absolute right-2 top-2 opacity-75">
                <SketchedLoafSVG className="w-16 h-12" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=85"
                alt="Stacked Bread"
                className="w-full h-44 object-cover rounded-2xl -mt-6 shadow-md border-2 border-white"
              />
              <span className="absolute -bottom-3.5 right-6 bg-[#FF6B2B] text-white font-display text-xs px-4 py-1.5 rounded-full shadow">
                CRUNCHY
              </span>
            </div>
          </div>

          {/* Copy & Order Button */}
          <div className="mt-8">
            <h2 className="font-display text-lg leading-tight text-[#331B15] uppercase">
              PREMIUM COOKIES MADE
              <br />
              FROM SCRATCH
            </h2>
            <p className="text-xs font-semibold text-[#331B15]/80 mt-2.5 leading-relaxed">
              We’re literally obsessed with giving more of what you love!
            </p>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setViewMode('full')}
                className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#331B15] hover:bg-[#F7E31B] transition-colors"
              >
                <ArrowDown className="w-5 h-5" />
              </button>

              <div className="relative">
                <div className="absolute -top-5 -right-2 z-20 pointer-events-none">
                  <CookieCrumbsSVG className="w-9 h-9" />
                </div>
                <OrganicYellowButton
                  showDot
                  size="md"
                  onClick={() =>
                    addToCart({
                      id: 'scratch-loaf',
                      name: 'Scratch Baked Loaf & Cookies',
                      price: 18,
                      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'
                    })
                  }
                >
                  ORDER NOW
                </OrganicYellowButton>
              </div>
            </div>
          </div>
        </div>

        {/* PHONE 2: "PRODUCT WE BAKE HERE DAILY" Floating Pills Mobile Screen */}
        <div className="w-full max-w-[360px] bg-[#FAF5F0] rounded-[44px] p-5 shadow-2xl border-[6px] border-[#261713] relative overflow-hidden lg:mt-14">
          {/* Top White Pill Header */}
          <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm mb-6 relative z-10">
            <span className="font-display text-xl tracking-tight text-[#331B15]">
              ROLLIN<span className="text-[#FF6B2B]">.</span>
            </span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 text-[#331B15]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#FF6B2B]" />
            </button>
          </div>

          {/* Hand-drawn Baguette top right */}
          <div className="absolute -top-2 -right-6 opacity-85 pointer-events-none">
            <SketchedLoafSVG className="w-36 h-28" />
          </div>

          <div className="mt-4">
            <BittenCookieBadge className="w-11 h-11 mb-4" />
            <h2 className="font-display text-2xl leading-[1.1] text-[#331B15] uppercase">
              PRODUCT WE
              <br />
              BAKE HERE DAILY
            </h2>
          </div>

          {/* Staggered Floating Category Pills */}
          <div className="mt-7 space-y-4 pb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveCategory('COOKIES');
                  setViewMode('full');
                }}
                className="bg-[#D7C4BE] px-5 py-3.5 rounded-full flex items-center gap-5 shadow-sm hover:scale-105 transition-transform"
              >
                <span className="font-display text-base text-[#331B15]">COOKIES</span>
                <span className="bg-[#331B15] text-white text-xs font-extrabold px-2.5 py-1 rounded-full">12</span>
              </button>

              <button
                onClick={() => {
                  setActiveCategory('BAGEL');
                  setViewMode('full');
                }}
                className="bg-[#FFCBB5] px-5 py-3.5 rounded-full flex items-center gap-4 shadow-sm hover:scale-105 transition-transform -mr-10"
              >
                <span className="font-display text-base text-[#521D08]">BAGEL</span>
                <span className="bg-[#521D08] text-white text-xs font-extrabold px-2.5 py-1 rounded-full">13</span>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  setActiveCategory('BRETZEL');
                  setViewMode('full');
                }}
                className="bg-[#DCD0FF] px-6 py-3.5 rounded-full flex items-center gap-5 shadow-sm hover:scale-105 transition-transform"
              >
                <span className="font-display text-base text-[#2D1963]">BRETZEL</span>
                <span className="bg-[#2D1963] text-white text-xs font-extrabold px-3 py-1 rounded-full">8</span>
              </button>
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setActiveCategory('PASTRIES');
                  setViewMode('full');
                }}
                className="bg-[#E3E7E8] px-5 py-3.5 rounded-full flex items-center gap-4 shadow-sm hover:scale-105 transition-transform -ml-8"
              >
                <span className="font-display text-base text-[#243238]">PASTRIES</span>
                <span className="bg-[#243238] text-white text-xs font-extrabold px-2.5 py-1 rounded-full">23</span>
              </button>

              <button
                onClick={() => {
                  setActiveCategory('CAKE');
                  setViewMode('full');
                }}
                className="bg-[#9DCAD4] px-5 py-3.5 rounded-full flex items-center gap-4 shadow-sm hover:scale-105 transition-transform"
              >
                <span className="font-display text-base text-[#0B4F5E]">CAKES</span>
                <span className="bg-[#0B4F5E] text-white text-xs font-extrabold px-2.5 py-1 rounded-full">27</span>
              </button>
            </div>

            <div className="flex justify-center pt-1">
              <button
                onClick={() => {
                  setActiveCategory('CROISSANT');
                  setViewMode('full');
                }}
                className="bg-[#F7E31B] px-6 py-3.5 rounded-full flex items-center gap-5 shadow-sm hover:scale-105 transition-transform"
              >
                <span className="font-display text-base text-[#331B15]">CROISSANT</span>
                <span className="bg-[#331B15] text-white text-xs font-extrabold px-2.5 py-1 rounded-full">21</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#38231E] py-4 sm:py-8 px-2 sm:px-6 lg:px-10 font-sans selection:bg-[#F7E31B] selection:text-[#331B15]">
      {/* Injecting Authentic Display & Body Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        .font-display {
          font-family: 'Lilita One', cursive, sans-serif;
          letter-spacing: 0.02em;
        }
        .font-sans {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#331B15] text-white px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-[#F7E31B] flex items-center gap-3 animate-bounce">
          <span className="w-6 h-6 rounded-full bg-[#F7E31B] text-[#331B15] flex items-center justify-center font-black text-xs">
            ✓
          </span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Interactive View Switcher Toolbar (Allows inspecting all 6 reference screenshot layouts effortlessly!) */}
      <div className="max-w-[1220px] mx-auto mb-3 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-2xl bg-[#271713]/90 text-white/90 text-xs border border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F7E31B]" />
          <span className="font-bold text-white">ROLLIN. Design Switcher:</span>
          <span className="hidden md:inline text-white/60">
            Explore all reference variants from your uploaded shots
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => {
              setViewMode('full');
              setHeroStyle('cookies');
            }}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'full' && heroStyle === 'cookies'
                ? 'bg-[#F7E31B] text-[#331B15]'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Full Page ("Bake The Cookies")
          </button>
          <button
            onClick={() => {
              setViewMode('full');
              setHeroStyle('art');
            }}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'full' && heroStyle === 'art'
                ? 'bg-[#F7E31B] text-[#331B15]'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Hero 1 ("The Art of Baking")
          </button>
          <button
            onClick={() => {
              setViewMode('full');
              setHeroStyle('hand');
            }}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'full' && heroStyle === 'hand'
                ? 'bg-[#F7E31B] text-[#331B15]'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            Hero 2 ("Made By Hand")
          </button>
          <button
            onClick={() => setViewMode('mobile-dual')}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'mobile-dual'
                ? 'bg-[#F7E31B] text-[#331B15]'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Mobile Dual View
          </button>
        </div>
      </div>

      {viewMode === 'mobile-dual' ? (
        renderMobileDualPreview()
      ) : (
        /* MAIN WEBSITE CANVAS */
        <div className="max-w-[1220px] mx-auto bg-[#FAF6F1] rounded-none sm:rounded-[18px] shadow-2xl overflow-hidden border border-white/10">
          {/* TOP PURPLE PROMO BAR (Shown in Images 2, 3, 4, 5) */}
          {heroStyle !== 'art' && (
            <div className="bg-[#5D19B8] text-white px-4 py-2 text-[11px] sm:text-xs font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#F7E31B] text-[#331B15] font-black flex items-center justify-center text-[10px]">
                  %
                </span>
                <span>
                  <strong>15% Off</strong> on <strong>$100+</strong> <em>Purchase</em>
                </span>
              </div>

              <button
                onClick={() => setIsSubscribeOpen(true)}
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <span className="bg-[#FF8A00] text-white px-1.5 py-0.5 rounded text-[10px]">✉️</span>
                <span>
                  <em>Subscribe & Save 15%</em>
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#F7E31B] text-[#331B15] font-black flex items-center justify-center text-[10px]">
                  %
                </span>
                <span>
                  <strong>15% Off</strong> on <strong>$100+</strong> <em>Purchase</em>
                </span>
              </div>
            </div>
          )}

          {/* NAVIGATION HEADER */}
          <header className="px-5 sm:px-10 lg:px-14 pt-6 pb-4 bg-[#F5EFE8]">
            <div className="flex items-center justify-between gap-4">
              {/* Brand Logo */}
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  setHeroStyle('cookies');
                }}
                className="font-display text-2xl sm:text-3xl tracking-tight text-[#331B15] flex items-baseline"
              >
                ROLLIN<span className="text-[#FF6B2B] text-3xl sm:text-4xl leading-none ml-0.5">.</span>
              </a>

              {/* Center Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8 text-xs font-display tracking-wider uppercase text-[#331B15]">
                <button
                  onClick={() => {
                    setActiveCategory('CAKE');
                    document.getElementById('daily-products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6B2B] transition-colors"
                >
                  CAKE
                </button>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('bakery')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-[#FF6B2B] transition-colors py-2">
                    BAKERY <ChevronDown className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                  {activeDropdown === 'bakery' && (
                    <div className="absolute top-full left-0 w-44 bg-white rounded-2xl shadow-xl border border-[#331B15]/10 p-2 z-40">
                      {['Sourdough Loaves', 'Baguettes', 'Bavarian Bretzels', 'Seeded Bagels'].map((sub) => (
                        <button
                          key={sub}
                          onClick={() => {
                            triggerToast(`Browsing ${sub}`);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#FAF6F1] text-xs font-sans font-bold text-[#331B15]"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => document.getElementById('art-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#FF6B2B] transition-colors"
                >
                  ABOUT US
                </button>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('cookies')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-[#FF6B2B] transition-colors py-2">
                    COOKIES <ChevronDown className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                  {activeDropdown === 'cookies' && (
                    <div className="absolute top-full left-0 w-44 bg-white rounded-2xl shadow-xl border border-[#331B15]/10 p-2 z-40">
                      {['Choco Chip Stack', 'Wheat Baked $16', 'Cookies Glucose', 'Oatmeal Raisin'].map((sub) => (
                        <button
                          key={sub}
                          onClick={() => {
                            triggerToast(`Selected ${sub}`);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#FAF6F1] text-xs font-sans font-bold text-[#331B15]"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsSubscribeOpen(true)}
                  className="hover:text-[#FF6B2B] transition-colors"
                >
                  CONTACT
                </button>
              </nav>

              {/* Right CTA + Shopping Bag Button */}
              <div className="flex items-center gap-3 sm:gap-4">
                <OrganicYellowButton
                  size="sm"
                  onClick={() =>
                    document.getElementById('daily-products')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {heroStyle === 'art' ? 'SHOP ONLINE' : 'START BAKING'}
                </OrganicYellowButton>

                <button
                  onClick={() => setIsCartOpen(true)}
                  aria-label="Open shopping bag"
                  className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-[#331B15] hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FF6B2B] border-2 border-white" />
                  {cartCount > 0 && (
                    <span className=" -bottom-1 -right-1 absolute bg-[#331B15] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </header>

          {}
          {heroStyle === 'art' ? (
            /* HERO VARIANT 1 (From Image 1): "THE ART OF BAKING." + 3-Card Collage + Butter Review Banner */
            <div className="px-5 sm:px-10 lg:px-14 pb-14 bg-gradient-to-b from-[#F5EFE8] to-[#FAF6F1]">
              {/* Giant Display Headline: THE ART OF BAKING. */}
              <div className="relative pt-6 pb-2 text-center select-none">
                {/* Orange Steam Lines above 'OF' */}
                <div className="flex justify-center mb-1">
                  <SteamLinesSVG className="w-9 h-9" />
                </div>

                <h1 className="font-display text-[44px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.92] tracking-tight text-[#331B15] uppercase relative inline-block">
                  <span className="relative inline-block mr-3 sm:mr-5">
                    THE
                    {/* Blue • FRESH pill badge over E */}
                    <span className="absolute right-[-14px] sm:right-[-18px] top-1/2 -translate-y-1/2 rotate-[4deg] bg-[#129CEB] text-white font-display text-[10px] sm:text-base lg:text-lg px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md tracking-wider">
                      • FRESH
                    </span>
                  </span>
                  <span className="mr-3 sm:mr-5">ART</span>
                  <span className="mr-3 sm:mr-5">OF</span>
                  <span className="relative inline-block">
                    BAKING.
                    {/* Green TASTY pill badge over IN */}
                    <span className="absolute left-[46%] top-1/2 -translate-y-1/2 -rotate-[8deg] bg-[#1F7A4C] text-white font-display text-[10px] sm:text-base lg:text-lg px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md tracking-wider">
                      TASTY
                    </span>
                  </span>
                </h1>
              </div>

              {/* 3-Card Collage directly below headline (Image 1 layout) */}
              {renderThreeCardCollage(false)}

              {/* Butter Review Banner directly below (Image 1 layout) */}
              {renderButterReviewBanner()}
            </div>
          ) : (
            /* MAIN FULL-PAGE FLOW (Images 2, 3, 4, 5) */
            <div>
              {/* TOP HERO SECTION */}
              <div className="px-4 sm:px-8 lg:px-12 pb-8 bg-[#F5EFE8]">
                {heroStyle === 'hand' ? (
                  /* HERO VARIANT 2 (From Image 2): Dark Espresso Banner at top */
                  <div className="bg-[#311E1A] rounded-[40px] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-xl">
                    <div className="absolute right-0 bottom-0 opacity-90 pointer-events-none">
                      <BotanicalWheatSVG className="w-64 h-80" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                      {/* Left Slider Indicator + Baker Image */}
                      <div className="lg:col-span-6 flex items-center gap-4">
                        <div className="flex flex-col gap-2 items-center">
                          <span className="w-1.5 h-6 rounded-full bg-[#FF6B2B]" />
                          <span className="w-1.5 h-2 rounded-full bg-white/60" />
                          <span className="w-1.5 h-2 rounded-full bg-white/60" />
                        </div>

                        <div className="relative w-full">
                          {/* Orange curved accent rays top-right */}
                          <svg
                            viewBox="0 0 50 50"
                            fill="none"
                            className="w-11 h-11 absolute -top-5 -right-5 z-20"
                          >
                            <path
                              d="M10 8 C28 8, 40 20, 40 38"
                              stroke="#FF6B2B"
                              strokeWidth="4.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16 20 C24 20, 30 26, 30 34"
                              stroke="#FF6B2B"
                              strokeWidth="4.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85"
                            alt="Artisan Baker Kneading Dough"
                            className="w-full h-[260px] sm:h-[310px] object-cover rounded-[32px] shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Right Copy */}
                      <div className="lg:col-span-6 lg:pl-6">
                        <h1 className="font-display text-3xl sm:text-5xl leading-[1.05] uppercase tracking-wide">
                          MADE BY HAND,
                          <br />
                          FROM SCRATCH,
                          <br />
                          WITH LOVE.
                        </h1>
                        <p className="text-white/80 text-xs sm:text-sm font-medium mt-4 max-w-md leading-relaxed">
                          Their experience plays a role in the way they work. Bakers use flavours.
                        </p>
                        <div className="mt-7">
                          <OrganicYellowButton
                            showDot
                            size="md"
                            onClick={() =>
                              addToCart({
                                id: 'scratch-loaf',
                                name: 'Handmade Scratch Sourdough Loaf',
                                price: 18,
                                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'
                              })
                            }
                          >
                            ORDER NOW
                          </OrganicYellowButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* HERO VARIANT 3 (Main Default from Images 3, 4, 5): "BAKE THE COOKIES" White Card */
                  <div className="bg-white rounded-[38px] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-visible">
                    {/* Giant Headline Row: BAKE THE COOKIES */}
                    <div className="relative text-center select-none pt-2">
                      {/* Steam lines over E in BAKE */}
                      <div className="hidden sm:block absolute left-[21%] -top-4">
                        <SteamLinesSVG className="w-8 h-8" />
                      </div>

                      <h1 className="font-display text-[42px] sm:text-[72px] md:text-[88px] lg:text-[106px] leading-[0.92] tracking-tight text-[#331B15] uppercase">
                        <span className="relative inline-block mr-3 sm:mr-5">
                          BAKE
                          {/* Green TASTY rotated badge over E */}
                          <span className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 -rotate-[12deg] bg-[#1F7A4C] text-white font-display text-[10px] sm:text-base lg:text-lg px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md tracking-wider">
                            TASTY
                          </span>
                        </span>
                        <span className="mr-3 sm:mr-5">THE</span>
                        <span className="relative inline-block">
                          COOKIES
                          {/* Orange CRUNCHY pill badge over ES */}
                          <span className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-[#FF6B2B] text-white font-display text-[10px] sm:text-base lg:text-lg px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md tracking-wider">
                            CRUNCHY
                          </span>
                        </span>
                      </h1>
                    </div>

                    {/* Lower Hero Grid: Left Copy + Right Stacked Sliced Bread on Yellow Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-6 sm:mt-8">
                      {/* Left Column */}
                      <div className="lg:col-span-5 pb-2">
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] leading-[1.12] text-[#331B15] uppercase">
                          PREMIUM BREAD
                          <br />
                          AND COOKIES MADE
                          <br />
                          FROM SCRATCH{' '}
                          <span className="inline-block align-middle bg-[#129CEB] text-white font-display text-xs sm:text-sm px-3.5 py-1 rounded-full rotate-[3deg] shadow-sm ml-1">
                            • FRESH
                          </span>
                        </h2>

                        <p className="text-xs sm:text-sm font-bold text-[#331B15]/80 mt-4 max-w-xs leading-relaxed">
                          We’re literally obsessed with giving more of what you love!
                        </p>

                        {/* Buttons Row */}
                        <div className="mt-8 flex flex-wrap items-center gap-5">
                          <div className="relative">
                            {/* Hand-drawn bursting cookie crumbs top-right of button */}
                            <div className="absolute -top-6 -right-4 z-20 pointer-events-none">
                              <CookieCrumbsSVG className="w-10 h-10" />
                            </div>
                            <OrganicYellowButton
                              showDot
                              size="md"
                              onClick={() =>
                                addToCart({
                                  id: 'scratch-loaf',
                                  name: 'Scratch Baked Multigrain Loaf',
                                  price: 18,
                                  image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'
                                })
                              }
                            >
                              ORDER NOW
                            </OrganicYellowButton>
                          </div>

                          <button
                            onClick={() => setIsBlogModalOpen(true)}
                            className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#331B15] hover:text-[#FF6B2B] flex items-center gap-1 transition-colors"
                          >
                            COOKING BLOG <ChevronRight className="w-4 h-4 stroke-[3]" />
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Yellow Card with Pop-Out Stacked Sliced Bread */}
                      <div className="lg:col-span-7 relative pt-6 sm:pt-10">
                        <div className="bg-[#FDE624] rounded-[34px] p-4 sm:p-6 pb-0 relative min-h-[250px] sm:min-h-[275px] flex flex-col justify-end shadow-sm overflow-visible">
                          {/* Hand-drawn loaf sketch in top right corner */}
                          <div className="absolute right-3 top-3 opacity-85 pointer-events-none">
                            <SketchedLoafSVG className="w-24 sm:w-28 h-20" />
                          </div>

                          {/* Tall Stacked Bread Pop-Out Composition */}
                          <div className="relative -mt-16 sm:-mt-24 z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pb-4">
                            <div className="relative group">
                              <img
                                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85"
                                alt="Tall Stack of Artisanal Sliced Bread"
                                className="w-64 sm:w-80 h-60 sm:h-72 object-cover rounded-[28px] shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform"
                              />
                              {/* Side half-loaf slice */}
                              <img
                                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=85"
                                alt="Artisan Sourdough Crumb Slice"
                                className="w-36 sm:w-44 h-28 sm:h-36 object-cover rounded-t-[70px] rounded-b-2xl shadow-xl border-4 border-[#FDE624] absolute -bottom-2 -right-6 sm:-right-12 transform rotate-2"
                              />
                            </div>
                          </div>

                          {/* Wood Cutting Board Base Strip */}
                          <div className="h-8 w-full bg-gradient-to-r from-[#C89666] via-[#D9A773] to-[#B37D4E] rounded-b-[30px] -mx-4 sm:-mx-6 px-6 flex items-center justify-between text-[11px] font-bold text-[#331B15]/80 border-t border-[#8C5A32]/30">
                            <span>STONE-MILLED WHOLE WHEAT</span>
                            <span>BAKED FRESH EVERY MORNING</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {}
              <section className="px-5 sm:px-10 lg:px-14 py-14 bg-[#FAF6F1]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Sky-Blue Card with Tall Scored Baguettes + Rotating Family Stamp */}
                  <div className="lg:col-span-6 relative flex justify-center pt-8">
                    <div className="relative w-full max-w-[400px]">
                      {/* Rotating Stamp Badge overlapping top-left corner */}
                      <div className="absolute -top-10 -left-4 sm:-left-8 z-20">
                        <RotatingStampBadge />
                      </div>

                      {/* Sky Blue Backdrop Square */}
                      <div className="bg-[#9AD9EA] rounded-[34px] p-6 pb-0 min-h-[300px] flex flex-col justify-end relative overflow-visible shadow-sm group">
                        {/* Scored Artisan Baguettes breaking above top border */}
                        <div className="relative -mt-20 z-10 flex justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=85"
                            alt="Scored Artisan Baguettes in Wire Basket"
                            className="w-72 sm:w-80 h-80 object-cover rounded-[28px] shadow-xl border-4 border-white group-hover:scale-[1.02] transition-transform"
                          />
                        </div>
                        <div className="py-3 text-center text-xs font-extrabold text-[#084B59] tracking-wider uppercase">
                          CRUSTY SCORED BAGUETTES • WIRE BASKET
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: "YOUR ONLY DOSE OF DELIGHT" & Bagel Buns $16 Card */}
                  <div className="lg:col-span-6">
                    <div className="relative inline-block">
                      <h2 className="font-display text-3xl sm:text-5xl leading-[1.06] text-[#331B15] uppercase">
                        YOUR {heroStyle === 'hand' ? 'DAILY' : 'ONLY'}{' '}
                        <span className="inline-block relative align-middle mx-1">
                          <img
                            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=160&q=80"
                            alt="Cookie icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#331B15] inline-block"
                          />
                          {/* Orange splash rays top-right of cookie */}
                          <svg
                            viewBox="0 0 36 36"
                            fill="none"
                            className="w-7 h-7 absolute -top-4 -right-5 pointer-events-none"
                          >
                            <path d="M6 16C8 10 14 8 16 12" stroke="#FF6B2B" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M16 20C22 17 26 20 23 25" stroke="#FF6B2B" strokeWidth="3.5" strokeLinecap="round" />
                            <circle cx="24" cy="10" r="2.5" fill="#FF6B2B" />
                          </svg>
                        </span>
                        <br />
                        DOSE OF DELIGHT
                      </h2>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center justify-between max-w-md">
                        <span className="text-xs font-extrabold text-[#331B15]/70 uppercase tracking-wider">
                          Featured Item -
                        </span>
                        <button
                          onClick={() => setFeaturedIdx((prev) => (prev + 1) % FEATURED_ITEMS.length)}
                          className="text-xs font-bold text-[#FF6B2B] hover:underline"
                        >
                          Swap Featured ↻
                        </button>
                      </div>

                      {/* Featured Mini Horizontal Card */}
                      <div
                        onClick={() =>
                          addToCart({
                            id: FEATURED_ITEMS[featuredIdx].id,
                            name: FEATURED_ITEMS[featuredIdx].name,
                            price: FEATURED_ITEMS[featuredIdx].price,
                            image: FEATURED_ITEMS[featuredIdx].image
                          })
                        }
                        className="mt-3 flex items-center gap-5 bg-white/90 hover:bg-white p-3.5 rounded-3xl shadow-sm border border-[#331B15]/10 max-w-md cursor-pointer group transition-all"
                      >
                        {/* Ceramic Paddle Board Thumbnail */}
                        <div className="w-24 h-16 rounded-2xl bg-[#EAEAEA] overflow-hidden shrink-0 relative flex items-center justify-center shadow-inner">
                          <img
                            src={FEATURED_ITEMS[featuredIdx].image}
                            alt={FEATURED_ITEMS[featuredIdx].name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>

                        <div className="flex-1 flex items-center justify-between pr-3">
                          <div>
                            <h3 className="font-extrabold text-base text-[#331B15] group-hover:text-[#FF6B2B] transition-colors">
                              {FEATURED_ITEMS[featuredIdx].name}
                            </h3>
                            <p className="text-xs font-semibold text-[#331B15]/60">
                              {FEATURED_ITEMS[featuredIdx].note}
                            </p>
                          </div>

                          <div className="h-8 w-[1.5px] bg-[#331B15]/20 mx-2" />

                          <span className="font-display text-2xl sm:text-3xl text-[#591C10]">
                            ${heroStyle === 'hand' ? '13' : FEATURED_ITEMS[featuredIdx].price}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 text-xs sm:text-sm font-semibold text-[#331B15]/80 max-w-md leading-relaxed">
                        {FEATURED_ITEMS[featuredIdx].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {}
              <section id="daily-products" className="px-5 sm:px-10 lg:px-14 py-12 bg-[#FAF6F1]">
                {/* Header & 6 Colorful Category Filter Pills */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl leading-[1.08] text-[#331B15] uppercase">
                      PRODUCT WE BAKE
                      <br />
                      HERE DAILY— <BittenCookieBadge className="w-9 h-9 ml-1" />
                    </h2>
                  </div>

                  {/* 6 Category Pills Grid (3x2 matching reference) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {CATEGORIES.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveCategory(isActive ? 'ALL' : cat.id);
                            setCarouselIndex(0);
                          }}
                          className={`${cat.bg} ${cat.text} px-4 py-2.5 rounded-full flex items-center justify-between gap-4 transition-all ${
                            isActive
                              ? 'ring-2 ring-[#331B15] scale-105 shadow-md'
                              : 'hover:scale-[1.03] shadow-sm'
                          }`}
                        >
                          <span className="font-display text-xs sm:text-sm tracking-wider uppercase">
                            {cat.label}
                          </span>
                          <span
                            className={`${cat.badgeBg} text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3-Card Product Showcase Carousel */}
                <div className="relative mt-12">
                  {/* Left Arrow Button */}
                  <button
                    onClick={prevSlide}
                    aria-label="Previous bakery product"
                    className="absolute -left-3 sm:-left-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-[#331B15]/10 flex items-center justify-center text-[#331B15] hover:bg-[#F7E31B] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    onClick={nextSlide}
                    aria-label="Next bakery product"
                    className="absolute -right-3 sm:-right-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-[#331B15]/10 flex items-center justify-center text-[#331B15] hover:bg-[#F7E31B] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-6">
                    {visibleProducts.map((product, idx) => (
                      <div key={`${product.id}-${idx}`} className="group flex flex-col items-center">
                        {/* Colored Rounded Card */}
                        <div
                          onClick={() => addToCart(product)}
                          className={`w-full ${product.cardBg} rounded-[34px] p-5 pt-0 min-h-[250px] flex flex-col justify-end relative overflow-visible shadow-sm cursor-pointer transition-transform duration-300 group-hover:-translate-y-1`}
                        >
                          {/* Hand-drawn background doodles specific to each card */}
                          {idx === 0 && (
                            <div className="absolute right-4 top-4 flex flex-wrap gap-1.5 w-12 opacity-60 pointer-events-none">
                              {[...Array(8)].map((_, s) => (
                                <span key={s} className="w-1.5 h-0.5 bg-[#331B15] rounded-full rotate-45" />
                              ))}
                            </div>
                          )}
                          {idx === 1 && (
                            <div className="absolute right-2 top-2 opacity-75 pointer-events-none">
                              <SketchedCookieSVG className="w-16 h-16" strokeColor="#0B4F5E" />
                            </div>
                          )}
                          {idx === 2 && (
                            <div className="absolute right-2 top-2 opacity-75 pointer-events-none">
                              <SketchedCookieSVG className="w-16 h-16" />
                            </div>
                          )}

                          {/* Product Image Popping Out of Top Frame */}
                          <div className="relative -mt-10 z-10 flex justify-center">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-60 h-52 object-cover rounded-[26px] shadow-lg border-4 border-white/85 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Hover Quick-Add Pill */}
                          <div className="mt-3 flex items-center justify-between text-xs font-extrabold text-[#331B15]/90 px-1">
                            <span className="truncate max-w-[180px]">{product.subtitle}</span>
                            <span className="bg-white/90 text-[#331B15] px-2.5 py-1 rounded-full shadow-sm shrink-0">
                              +${product.price}
                            </span>
                          </div>
                        </div>

                        {/* Product Title Below Card */}
                        <h3 className="font-display text-base sm:text-lg uppercase tracking-wider text-[#331B15] mt-4 text-center group-hover:text-[#FF6B2B] transition-colors">
                          {product.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {}
              <section id="art-form-section" className="px-4 sm:px-8 lg:px-12 py-6 bg-[#FAF6F1]">
                <div className="bg-[#311E1A] rounded-[40px] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-lg">
                  {/* Dried wheat stalks illustration on right */}
                  <div className="absolute right-0 bottom-0 opacity-60 pointer-events-none">
                    <img
                      src="/images/wheat-stalks-line-art.png"
                      alt=""
                      aria-hidden="true"
                      width={1400}
                      height={992}
                      loading="lazy"
                      decoding="async"
                      className="h-[240px] w-auto max-w-none select-none sm:h-[320px] lg:h-[380px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    {/* Left: Vertical Slide Indicator Dots + Smiling Baker Image */}
                    <div className="lg:col-span-6 flex items-center gap-4">
                      <div className="flex flex-col gap-2 items-center">
                        <button
                          onClick={() => setDarkBannerSlide(0)}
                          aria-label="Slide 1"
                          className={`w-1.5 rounded-full transition-all ${
                            darkBannerSlide === 0 ? 'h-6 bg-[#FF6B2B]' : 'h-2 bg-white/60'
                          }`}
                        />
                        <button
                          onClick={() => setDarkBannerSlide(1)}
                          aria-label="Slide 2"
                          className={`w-1.5 rounded-full transition-all ${
                            darkBannerSlide === 1 ? 'h-6 bg-[#FF6B2B]' : 'h-2 bg-white/60'
                          }`}
                        />
                        <button
                          onClick={() => setDarkBannerSlide(0)}
                          aria-label="Slide 3"
                          className="w-1.5 h-2 rounded-full bg-white/60"
                        />
                      </div>

                      <div className="relative w-full">
                        {/* Orange double-curved accent rays top-right */}
                        <svg
                          viewBox="0 0 50 50"
                          fill="none"
                          className="w-11 h-11 absolute -top-5 -right-5 z-20"
                        >
                          <path
                            d="M10 8 C28 8, 40 20, 40 38"
                            stroke="#FF6B2B"
                            strokeWidth="4.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16 20 C24 20, 30 26, 30 34"
                            stroke="#FF6B2B"
                            strokeWidth="4.5"
                            strokeLinecap="round"
                          />
                        </svg>

                        <img
                          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85"
                          alt="Smiling Woman Baker Rolling Dough"
                          className="w-full h-[250px] sm:h-[300px] object-cover rounded-[32px] shadow-md"
                        />
                      </div>
                    </div>

                    {/* Right: Headline, Copy & LEARN BAKING Button */}
                    <div className="lg:col-span-6 lg:pl-6">
                      {darkBannerSlide === 0 ? (
                        <>
                          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] uppercase tracking-wide">
                            WHY IS BAKING
                            <br />
                            CONSIDERED AS
                            <br />
                            ART FORM ?
                          </h2>
                          <p className="text-white/80 text-xs sm:text-sm font-medium mt-4 max-w-md leading-relaxed">
                            Their experience plays a role in the way they work. Bakers use flavours and visual appeal to produce an edible art piece.
                          </p>
                        </>
                      ) : (
                        <>
                          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] uppercase tracking-wide">
                            MADE BY HAND,
                            <br />
                            FROM SCRATCH,
                            <br />
                            WITH LOVE.
                          </h2>
                          <p className="text-white/80 text-xs sm:text-sm font-medium mt-4 max-w-md leading-relaxed">
                            Every loaf is slow-fermented for 48 hours and shaped by hand on stone hearths for an unforgettable crust.
                          </p>
                        </>
                      )}

                      <div className="mt-7">
                        <OrganicYellowButton
                          showDot
                          size="md"
                          onClick={() => setIsBlogModalOpen(true)}
                        >
                          LEARN BAKING
                        </OrganicYellowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {}
              <section className="px-5 sm:px-10 lg:px-14 py-12 bg-[#FAF6F1]">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="relative">
                    <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-[#331B15] uppercase">
                      WHY BEKERY’S <BittenCookieBadge className="w-8 h-8 mx-1" />
                      <br />
                      <span className="inline-flex flex-wrap items-center gap-3">
                        ITEMS IS SO SPECIAL
                        <WavySquiggleSVG className="w-16 h-4" />
                      </span>
                      <br />
                      TO CUSTOMER?
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 self-start md:self-center">
                    <span className="hidden sm:inline-block w-16 h-[1.5px] bg-[#331B15]/40" />
                    <OrganicYellowButton
                      showDot
                      size="sm"
                      onClick={() =>
                        document.getElementById('daily-products')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    >
                      SHOP NOW
                    </OrganicYellowButton>
                  </div>
                </div>

                {/* 3-Card Bento Collage + Customer Quote */}
                {renderThreeCardCollage(true)}

                {/* Section 6: Light-Teal Butter & Reviews Banner */}
                {renderButterReviewBanner()}
              </section>

              {}
              <footer className="px-4 sm:px-8 lg:px-12 pb-8 pt-2 bg-[#FAF6F1]">
                <div className="bg-[#311E1A] rounded-2xl px-6 py-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-white/75 font-medium">
                    Designed by <span className="text-white font-bold">@ui-collective</span>
                  </p>

                  <a
                    href="#top"
                    className="font-display text-2xl tracking-tight text-white flex items-baseline"
                  >
                    ROLLIN<span className="text-[#FF6B2B] text-3xl leading-none ml-0.5">.</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/75 font-medium mr-1">Follow us on :</span>
                    {[
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Twitter, label: 'Twitter' }
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        onClick={() => triggerToast(`Following ROLLIN. on ${label}!`)}
                        aria-label={label}
                        className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center hover:bg-[#F7E31B] hover:text-[#331B15] hover:border-[#F7E31B] transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>
              </footer>
            </div>
          )}
        </div>
      )}

      {}
      {/* SHOPPING BAG SLIDE-OVER DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#FAF6F1] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l-4 border-[#331B15]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#331B15]/15">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-6 h-6 text-[#FF6B2B]" />
                  <h3 className="font-display text-2xl text-[#331B15] uppercase">
                    YOUR BAKERY BAG ({cartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#331B15] hover:bg-[#FF6B2B] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center">
                  <BittenCookieBadge className="w-14 h-14 mx-auto mb-3" />
                  <p className="font-display text-xl text-[#331B15] uppercase">Your bag is empty!</p>
                  <p className="text-xs text-[#331B15]/70 mt-1">
                    Add some warm sourdough loaves or crunchy wheat cookies.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-4 max-h-[58vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-2xl flex items-center gap-4 shadow-xs border border-[#331B15]/10"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-sm text-[#331B15] truncate">{item.name}</h4>
                        <p className="font-display text-lg text-[#FF6B2B]">${item.price * item.qty}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-[#FAF6F1] px-2.5 py-1.5 rounded-xl border border-[#331B15]/10">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="text-[#331B15] hover:text-[#FF6B2B]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-extrabold w-4 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="text-[#331B15] hover:text-[#FF6B2B]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-5 border-t border-[#331B15]/15">
                {cartTotal >= 100 ? (
                  <div className="mb-3 bg-[#1F7A4C] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-between">
                    <span>🎉 15% Off ($100+ Promo Applied!)</span>
                    <span>-${(cartTotal * 0.15).toFixed(2)}</span>
                  </div>
                ) : (
                  <div className="mb-3 bg-[#DCD0FF] text-[#2D1963] text-xs font-bold px-3.5 py-2 rounded-xl">
                    Add <strong>${100 - cartTotal}</strong> more for <strong>15% OFF</strong>!
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#331B15]/70 uppercase">Subtotal</span>
                  <span className="font-display text-3xl text-[#331B15]">
                    ${cartTotal >= 100 ? (cartTotal * 0.85).toFixed(2) : cartTotal.toFixed(2)}
                  </span>
                </div>

                <OrganicYellowButton
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setIsCartOpen(false);
                    setCart([]);
                    triggerToast('Order placed! Warm bread & cookies are on the way!');
                  }}
                >
                  CHECKOUT NOW
                </OrganicYellowButton>
              </div>
            )}
          </div>
        </div>
      )}

      {/* COOKING BLOG / BAKING SECRETS MODAL */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF6F1] max-w-xl w-full rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#331B15] relative">
            <button
              onClick={() => setIsBlogModalOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#331B15] hover:bg-[#FF6B2B] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="bg-[#129CEB] text-white font-display text-xs px-3.5 py-1 rounded-full uppercase">
              • ROLLIN. BAKING JOURNAL
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#331B15] uppercase mt-3">
              HOW WE REFRESHED OUR 200-YEAR-OLD SOURDOUGH STARTER
            </h3>
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
              alt="Artisan Baking"
              className="w-full h-48 object-cover rounded-2xl my-4 shadow-md"
            />
            <p className="text-xs sm:text-sm font-semibold text-[#331B15]/85 leading-relaxed">
              At ROLLIN., we believe with enough cultured Normandy butter and stone-ground heirloom wheat, anything is good! Every morning at 4:00 AM, our bakers hand-score each loaf and tie warm bundles of chocolate chunk cookies with natural jute twine.
            </p>
            <div className="mt-6 flex justify-end">
              <OrganicYellowButton size="sm" onClick={() => setIsBlogModalOpen(false)}>
                BACK TO BAKERY
              </OrganicYellowButton>
            </div>
          </div>
        </div>
      )}

      {/* SUBSCRIBE & SAVE 15% MODAL */}
      {isSubscribeOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#311E1A] text-white max-w-md w-full rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#F7E31B] relative overflow-hidden">
            <button
              onClick={() => setIsSubscribeOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF6B2B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <BittenCookieBadge className="w-12 h-12 mb-3" />
            <h3 className="font-display text-2xl sm:text-3xl uppercase">
              SUBSCRIBE & SAVE 15% ON DAILY BAKES
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
              Join 4,350+ bread and cookie lovers for warm-out-of-the-oven alerts and secret recipes.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribeOpen(false);
                triggerToast('Welcome to the ROLLIN. family! Code ROLLIN15 unlocked.');
              }}
              className="mt-5 space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 rounded-2xl bg-white text-[#331B15] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F7E31B]"
              />
              <OrganicYellowButton size="md" className="w-full">
                UNLOCK 15% OFF
              </OrganicYellowButton>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}