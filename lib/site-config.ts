export const siteConfig = {
  name: "Magic Home",
  tagline: "Professional Cleaning. A Home That Feels Like Magic.",
  phone: "(512) 555-0142",
  phoneHref: "tel:+15125550142",
  email: "hello@magichome.example",
  emailHref: "mailto:hello@magichome.example",
  address: "1200 Clean Street, Austin, TX 78701",
  hours: "Mon–Sat 8:00 AM – 6:00 PM",
  url: "https://magichome.example",
  ogImage: "/og-image.svg",
  googleReviewsUrl: "https://www.google.com/maps",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
  analyticsId: "",
  bookingEmbedUrl: "https://cal.com",
  depositAmount: 25,
  seo: {
    title: "Magic Home | Professional Home Cleaning Services",
    description:
      "Reliable, professional home cleaning in Austin and nearby neighborhoods. Book Magic Home for regular, deep, move-in/out, and custom cleaning that feels like magic.",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Areas", href: "/#areas" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/#blog" },
  ],
  hero: {
    eyebrow: "PROFESSIONAL HOME CLEANING",
    heading: "Come Home to a Little More Magic.",
    supporting:
      "Reliable, professional home cleaning services designed to give you more time, more comfort, and a home you’ll love coming back to.",
    primaryCta: "Book a Cleaning",
    secondaryCta: "Get a Free Quote",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Professional cleaner wiping a bright modern living room table",
  },
  floatingBadges: [
    { id: "rating", label: "5.0 Customer Rating", icon: "star" as const },
    { id: "homes", label: "Trusted by 500+ Homes", icon: "home" as const },
    { id: "eco", label: "Eco-Friendly Cleaning", icon: "leaf" as const },
    { id: "insured", label: "Fully Insured", icon: "shield" as const },
  ],
  avatarStack: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80",
  ],
  services: [
    {
      id: "regular",
      slug: "regular-house-cleaning",
      title: "Regular House Cleaning",
      description:
        "Weekly, biweekly or monthly cleaning to keep your home fresh.",
      details:
        "Dusting, floors, kitchens, baths, and tidy living spaces on a schedule that fits your life.",
      included: [
        "Dusting all reachable surfaces",
        "Kitchen counters and sink",
        "Bathroom sanitizing",
        "Floor vacuuming and mopping",
        "Trash emptied",
      ],
      notIncluded: ["Inside oven", "Inside fridge", "Windows exterior"],
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Cleaner vacuuming a light-filled living room",
      icon: "sparkles" as const,
      href: "/services/regular-house-cleaning",
      startingPrice: 129,
    },
    {
      id: "deep",
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      description:
        "Detailed cleaning for homes that need extra attention.",
      details:
        "Baseboards, fixtures, inside appliances, and hard-to-reach spots for a true reset.",
      included: [
        "Everything in regular cleaning",
        "Baseboards and door frames",
        "Light fixtures and vents",
        "Detailed bathroom scrub",
        "Kitchen appliance exteriors",
      ],
      notIncluded: ["Carpet shampooing", "Wall washing"],
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sparkling clean modern bathroom",
      icon: "droplets" as const,
      href: "/services/deep-cleaning",
      startingPrice: 249,
    },
    {
      id: "move",
      slug: "move-in-move-out-cleaning",
      title: "Move In / Move Out Cleaning",
      description:
        "Get your property spotless before moving in or handing over the keys.",
      details:
        "Empty-home detail cleaning so inspections and first nights feel effortless.",
      included: [
        "Empty-home deep clean",
        "Cabinets inside and out",
        "Appliance interiors",
        "Closets and shelves",
        "Deposit-ready finish",
      ],
      notIncluded: ["Junk removal", "Repairs"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Bright empty modern home ready for move-in",
      icon: "truck" as const,
      href: "/services/move-in-move-out-cleaning",
      startingPrice: 299,
    },
    {
      id: "apartment",
      slug: "apartment-cleaning",
      title: "Apartment Cleaning",
      description: "Professional cleaning for apartments and condos.",
      details:
        "Efficient routines sized for compact spaces without cutting corners.",
      included: [
        "Full kitchen and bath detail",
        "Living areas dusted",
        "Floors cleaned",
        "Flexible scheduling",
      ],
      notIncluded: ["Balcony pressure wash"],
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Modern apartment living room with soft natural light",
      icon: "building" as const,
      href: "/services/apartment-cleaning",
      startingPrice: 109,
    },
    {
      id: "kitchen-bath",
      slug: "kitchen-bathroom-cleaning",
      title: "Kitchen & Bathroom Cleaning",
      description:
        "Detailed cleaning for the areas that need it most.",
      details:
        "Counters, sinks, tile, glass, and fixtures left gleaming and hygienic.",
      included: [
        "Counters and backsplash",
        "Sinks and fixtures",
        "Tile and glass",
        "Toilet sanitizing",
      ],
      notIncluded: ["Grease hood duct cleaning"],
      image:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Bright modern kitchen with clean white counters",
      icon: "sink" as const,
      href: "/services/kitchen-bathroom-cleaning",
      startingPrice: 89,
    },
    {
      id: "custom",
      slug: "custom-cleaning",
      title: "Custom Cleaning",
      description:
        "Flexible cleaning plans based on your specific needs.",
      details:
        "Build a checklist around pets, offices, extras, or seasonal refreshes.",
      included: [
        "Personalized checklist",
        "Add-on friendly",
        "One-time or recurring",
        "Priority room focus",
      ],
      notIncluded: ["Hazardous material cleanup"],
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Organized home interior ready for custom cleaning",
      icon: "sliders" as const,
      href: "/services/custom-cleaning",
      startingPrice: 149,
    },
  ],
  pricing: [
    {
      id: "standard",
      name: "Standard Clean",
      price: 129,
      frequency: "from / visit",
      description: "Ideal for weekly or biweekly upkeep.",
      features: [
        "Kitchen & bathrooms",
        "Dusting & floors",
        "Trash emptied",
        "Flexible scheduling",
      ],
      popular: false,
      href: "/#quote",
    },
    {
      id: "deep",
      name: "Deep Clean",
      price: 249,
      frequency: "from / visit",
      description: "A thorough reset for neglected or seasonal cleans.",
      features: [
        "Everything in Standard",
        "Baseboards & details",
        "Appliance exteriors",
        "Extra bathroom attention",
      ],
      popular: true,
      href: "/#quote",
    },
    {
      id: "move",
      name: "Move In / Out",
      price: 299,
      frequency: "from / visit",
      description: "Empty-home detail for handovers and first nights.",
      features: [
        "Cabinets inside & out",
        "Appliance interiors",
        "Closets & shelves",
        "Deposit-ready finish",
      ],
      popular: false,
      href: "/#quote",
    },
  ],
  addOns: [
    { id: "oven", name: "Inside oven", price: 35 },
    { id: "fridge", name: "Inside fridge", price: 30 },
    { id: "windows", name: "Interior windows", price: 40 },
    { id: "laundry", name: "Laundry fold", price: 25 },
  ],
  features: [
    {
      id: "trusted",
      title: "Trusted Professionals",
      description:
        "Background-checked teams who treat your home with care and respect.",
      icon: "users" as const,
    },
    {
      id: "ontime",
      title: "Reliable & On-Time",
      description:
        "Clear arrival windows and consistent quality you can count on.",
      icon: "clock" as const,
    },
    {
      id: "eco",
      title: "Eco-Friendly Products",
      description:
        "Effective, thoughtful products that are kinder to your family and pets.",
      icon: "leaf" as const,
    },
    {
      id: "guarantee",
      title: "Satisfaction Guaranteed",
      description:
        "If something isn’t right, we’ll make it right—quickly and kindly.",
      icon: "badge" as const,
    },
  ],
  trustBadges: [
    {
      id: "insured",
      title: "Fully Insured",
      description: "Liability coverage on every visit.",
      icon: "shield" as const,
    },
    {
      id: "background",
      title: "Background-Checked",
      description: "Vetted professionals you can trust.",
      icon: "users" as const,
    },
    {
      id: "eco",
      title: "Eco-Conscious",
      description: "Safer products for pets and family.",
      icon: "leaf" as const,
    },
    {
      id: "bonded",
      title: "Bonded Teams",
      description: "Extra peace of mind with every clean.",
      icon: "badge" as const,
    },
  ],
  steps: [
    {
      number: "01",
      title: "Tell Us About Your Home",
      description: "Choose your service and tell us what you need.",
    },
    {
      number: "02",
      title: "We Make It Sparkle",
      description:
        "Our professional team arrives and takes care of everything.",
    },
    {
      number: "03",
      title: "Enjoy Your Fresh Home",
      description: "Relax and enjoy a cleaner, healthier space.",
    },
  ],
  areas: [
    {
      id: "austin",
      slug: "austin",
      name: "Austin",
      zipPrefixes: ["787"],
      blurb: "Reliable home cleaning across central Austin neighborhoods.",
    },
    {
      id: "round-rock",
      slug: "round-rock",
      name: "Round Rock",
      zipPrefixes: ["78664", "78665", "78681"],
      blurb: "Weekly and deep cleans for busy Round Rock households.",
    },
    {
      id: "cedar-park",
      slug: "cedar-park",
      name: "Cedar Park",
      zipPrefixes: ["78613"],
      blurb: "Fresh, eco-friendly cleans for Cedar Park homes.",
    },
    {
      id: "georgetown",
      slug: "georgetown",
      name: "Georgetown",
      zipPrefixes: ["78626", "78628", "78633"],
      blurb: "Move-in ready and recurring service in Georgetown.",
    },
    {
      id: "pflugerville",
      slug: "pflugerville",
      name: "Pflugerville",
      zipPrefixes: ["78660"],
      blurb: "Apartment and house cleaning in Pflugerville.",
    },
    {
      id: "leander",
      slug: "leander",
      name: "Leander",
      zipPrefixes: ["78641"],
      blurb: "Flexible schedules for growing Leander families.",
    },
    {
      id: "lakeway",
      slug: "lakeway",
      name: "Lakeway",
      zipPrefixes: ["78734", "78738"],
      blurb: "Premium cleans for Lakeway properties.",
    },
    {
      id: "bee-cave",
      slug: "bee-cave",
      name: "Bee Cave",
      zipPrefixes: ["78738"],
      blurb: "Detailed home care throughout Bee Cave.",
    },
  ],
  servedZips: [
    "78701",
    "78702",
    "78703",
    "78704",
    "78705",
    "78717",
    "78721",
    "78722",
    "78723",
    "78724",
    "78725",
    "78726",
    "78727",
    "78728",
    "78729",
    "78730",
    "78731",
    "78732",
    "78733",
    "78734",
    "78735",
    "78736",
    "78737",
    "78738",
    "78739",
    "78741",
    "78742",
    "78744",
    "78745",
    "78746",
    "78747",
    "78748",
    "78749",
    "78750",
    "78751",
    "78752",
    "78753",
    "78754",
    "78756",
    "78757",
    "78758",
    "78759",
    "78613",
    "78626",
    "78628",
    "78633",
    "78641",
    "78660",
    "78664",
    "78665",
    "78681",
  ],
  beforeAfter: [
    {
      id: "1",
      title: "Kitchen refresh",
      caption: "Grease and clutter cleared for a cook-ready space.",
      before:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Bathroom glow-up",
      caption: "Tile, glass, and fixtures restored to a hotel finish.",
      before:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Living room reset",
      caption: "Dust-free surfaces and floors that feel brand new.",
      before:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah M.",
      role: "Homeowner · Austin",
      quote:
        "Magic Home completely transformed our house. The team was professional, friendly, and incredibly thorough.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    },
    {
      id: "2",
      name: "James K.",
      role: "Busy Parent · Round Rock",
      quote:
        "We finally have weekends back. Recurring cleans are consistent, on time, and the house always smells fresh.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    {
      id: "3",
      name: "Priya R.",
      role: "Apartment Resident · Cedar Park",
      quote:
        "Move-out cleaning was spotless. Our landlord was impressed and we got our full deposit back.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    },
  ],
  stats: [
    { id: "homes", value: 500, suffix: "+", label: "Homes Cleaned" },
    { id: "rating", value: 5.0, suffix: "", label: "Average Rating", decimals: 1 },
    { id: "happy", value: 98, suffix: "%", label: "Happy Customers" },
    { id: "years", value: 5, suffix: "+", label: "Years Experience" },
  ],
  blogPosts: [
    {
      id: "1",
      slug: "how-often-should-you-deep-clean",
      title: "How Often Should You Deep Clean Your Home?",
      excerpt:
        "A practical guide to deep-clean cadence for busy households and high-traffic rooms.",
      body: [
        "Most households benefit from a deep clean every 3–6 months, with high-traffic kitchens and bathrooms getting attention more often.",
        "If you have pets, allergies, or recently finished a renovation, schedule a deep clean sooner to reset dust and residue.",
        "Between deep cleans, a recurring standard service keeps surfaces manageable so resets stay faster and more affordable.",
      ],
      category: "Tips",
      date: "Mar 12, 2026",
      href: "/blog/how-often-should-you-deep-clean",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Cleaning supplies arranged neatly on a counter",
    },
    {
      id: "2",
      slug: "simple-ways-to-keep-your-home-fresh",
      title: "Simple Ways to Keep Your Home Fresh",
      excerpt:
        "Small daily habits that keep surfaces tidy between professional visits.",
      body: [
        "Clear counters before bed, wipe bathroom sinks after use, and do a two-minute nightly reset in the kitchen.",
        "Keep a small caddy of microfiber cloths in each bathroom so quick wipe-downs become automatic.",
        "Pair these habits with a recurring Magic Home visit and your home stays guest-ready with far less stress.",
      ],
      category: "Lifestyle",
      date: "Feb 28, 2026",
      href: "/blog/simple-ways-to-keep-your-home-fresh",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sunlit living room with fresh plants and tidy décor",
    },
    {
      id: "3",
      slug: "professional-cleaning-vs-diy",
      title: "Professional Cleaning vs DIY Cleaning",
      excerpt:
        "When to handle it yourself—and when bringing in pros saves time and stress.",
      body: [
        "DIY works for light maintenance, but deep corners, move-outs, and post-party resets are where professionals shine.",
        "Compare the value of your time: a few hours of your weekend versus a trained team that brings supplies and systems.",
        "Many Magic Home clients keep a DIY midweek tidy and book pros for the thorough weekly or biweekly clean.",
      ],
      category: "Guides",
      date: "Feb 10, 2026",
      href: "/blog/professional-cleaning-vs-diy",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Professional cleaner organizing a modern kitchen",
    },
  ],
  faqs: [
    {
      question: "What cleaning services do you offer?",
      answer:
        "We offer regular house cleaning, deep cleaning, move-in/move-out, apartment cleaning, kitchen & bathroom detail work, and fully custom plans.",
    },
    {
      question: "How much does a cleaning cost?",
      answer:
        "Standard cleans start around $129, deep cleans around $249, and move-in/out around $299 depending on home size. Use our estimate calculator or request a free quote for an exact number.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No—our teams arrive fully equipped. If you prefer specific eco products, let us know and we’ll accommodate when possible.",
    },
    {
      question: "Do you offer recurring cleaning?",
      answer:
        "Yes. Choose weekly, biweekly, or monthly service and we’ll keep your home consistently fresh.",
    },
    {
      question: "How long does a cleaning take?",
      answer:
        "Most standard cleans take 2–4 hours depending on square footage and checklist depth. We’ll set expectations when you book.",
    },
    {
      question: "Are your cleaners insured?",
      answer:
        "Yes. Magic Home teams are fully insured and background-checked for your peace of mind.",
    },
    {
      question: "Can I customize my cleaning service?",
      answer:
        "Absolutely. Tell us priorities—pet areas, offices, extras—and we’ll build a checklist around your needs.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve Austin and surrounding communities including Round Rock, Cedar Park, Georgetown, and nearby neighborhoods. Enter your ZIP on the quote form to confirm coverage.",
    },
  ],
  social: [
    { id: "instagram", label: "Instagram", href: "https://instagram.com" },
    { id: "facebook", label: "Facebook", href: "https://facebook.com" },
    { id: "google", label: "Google", href: "https://www.google.com/maps" },
  ],
  footer: {
    blurb: "Professional cleaning that makes your home feel magical.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Areas We Serve", href: "/#areas" },
      { label: "FAQ", href: "/#faq" },
      { label: "Blog", href: "/#blog" },
      { label: "Contact", href: "/contact" },
    ],
    serviceLinks: [
      { label: "Regular Cleaning", href: "/services/regular-house-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Move In / Move Out", href: "/services/move-in-move-out-cleaning" },
      { label: "Apartment Cleaning", href: "/services/apartment-cleaning" },
      { label: "Custom Cleaning", href: "/services/custom-cleaning" },
    ],
  },
  cta: {
    heading: "Ready for a Home That Feels Like Magic?",
    text: "Let us take cleaning off your to-do list.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Friendly professional cleaner smiling in a branded apron",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function isZipServed(zip: string): boolean {
  const normalized = zip.trim();
  return (siteConfig.servedZips as readonly string[]).includes(normalized);
}

export function getServiceBySlug(slug: string) {
  return siteConfig.services.find((s) => s.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return siteConfig.areas.find((a) => a.slug === slug);
}

export function getPostBySlug(slug: string) {
  return siteConfig.blogPosts.find((p) => p.slug === slug);
}

/** Rough estimate helper for the calculator UI */
export function estimatePrice(input: {
  serviceId: string;
  bedrooms: number;
  bathrooms: number;
  frequency: "one-time" | "weekly" | "biweekly" | "monthly";
  addOnIds: string[];
}): number {
  const service = siteConfig.services.find((s) => s.id === input.serviceId);
  const base = service?.startingPrice ?? 129;
  const roomAddon = Math.max(0, input.bedrooms - 2) * 20 + Math.max(0, input.bathrooms - 1) * 15;
  const addOnsTotal = input.addOnIds.reduce((sum, id) => {
    const addOn = siteConfig.addOns.find((a) => a.id === id);
    return sum + (addOn?.price ?? 0);
  }, 0);
  let total = base + roomAddon + addOnsTotal;
  if (input.frequency === "weekly") total *= 0.85;
  if (input.frequency === "biweekly") total *= 0.9;
  if (input.frequency === "monthly") total *= 0.95;
  return Math.round(total);
}
