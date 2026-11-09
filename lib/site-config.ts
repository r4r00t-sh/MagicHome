export const siteConfig = {
  name: "Dubai Magic Home",
  tagline: "Professional Cleaning Across Dubai. A Home That Feels Like Magic.",
  phone: "+971 50 555 0142",
  phoneHref: "tel:+971505550142",
  email: "hello@dubaimagichome.ae",
  emailHref: "mailto:hello@dubaimagichome.ae",
  address: "Marina Plaza, Dubai Marina, Dubai, UAE",
  hours: "Sat–Thu 8:00 AM – 7:00 PM (GST)",
  url: "https://dubaimagichome.ae",
  ogImage: "/og-image.svg",
  googleReviewsUrl: "https://www.google.com/maps/place/Dubai",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
  analyticsId: "",
  bookingEmbedUrl: "https://cal.com",
  currency: "AED",
  currencyLocale: "en-AE",
  depositAmount: 50,
  /**
   * Home Cleaning booking flow pricing (AED).
   * Only apply discounts/fees that are set here.
   * Fields marked isPlaceholder must be updated with real business rates before go-live.
   */
  booking: {
    serviceId: "regular",
    cleanerOptions: [1, 2, 3, 4] as const,
    durationOptions: [2, 3, 4, 5, 6, 7, 8] as const,
    defaultCleaners: 1,
    defaultHours: 2,
    /** Labor base uses Standard Clean starting price (AED 199). */
    laborBasePrice: 199,
    referenceCleaners: 1,
    /**
     * Hours assumed for the Standard Clean starting price.
     * Adjust so laborBasePrice ÷ referenceHours matches your real hourly rate.
     */
    referenceHours: {
      value: 4,
      isPlaceholder: false,
      note: "Standard Clean assumes ~4 hours for a typical Dubai apartment.",
    },
    materials: {
      fee: 25 as number | null,
      isPlaceholder: false,
      note: "AED 25 materials fee when supplies are provided by our team.",
    },
    taxRatePercent: {
      /** UAE VAT */
      value: 5 as number | null,
      isPlaceholder: false,
      note: "5% UAE VAT applied to the discounted subtotal.",
    },
    serviceFee: {
      value: null as number | null,
      isPlaceholder: true,
      note: "Service fee not configured — AED 0 until set.",
    },
    frequencies: [
      {
        id: "once" as const,
        label: "Once",
        description: "One-time cleaning.",
        discountPercent: 0,
      },
      {
        id: "weekly" as const,
        label: "Weekly",
        description: "Recurring weekly cleaning.",
        discountPercent: 15,
      },
      {
        id: "multi-weekly" as const,
        label: "Multiple Times a Week",
        description: "More frequent recurring cleaning for busy Dubai homes.",
        discountPercent: 20 as number | null,
      },
    ],
    specialInstructionsMax: 200,
  },
  seo: {
    title: "Dubai Magic Home | Professional Home Cleaning in Dubai",
    description:
      "Reliable, professional home cleaning across Dubai — Marina, Downtown, Palm Jumeirah, JLT, and more. Book Dubai Magic Home for regular, deep, move-in/out, and villa cleaning in AED.",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Areas", href: "/#areas" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Quote", href: "/#quote" },
    { label: "FAQ", href: "/faq" },
  ],
  hero: {
    eyebrow: "DUBAI HOME CLEANING",
    heading: "Dubai Homes, A Little More Magic.",
    supporting:
      "Trusted villa, apartment, and maid-service cleaning across Dubai. Book in minutes, pay in AED, and come home to a space that feels brand new.",
    primaryCta: "Book a Cleaning",
    secondaryCta: "Get a Free Quote",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Professional cleaner wiping a bright modern living room table",
  },
  floatingBadges: [
    { id: "rating", label: "5.0 Customer Rating", icon: "star" as const },
    { id: "homes", label: "Trusted by 800+ Dubai Homes", icon: "home" as const },
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
        "Weekly, biweekly or monthly cleaning for Dubai apartments and villas.",
      details:
        "Dusting, floors, kitchens, baths, and tidy living spaces on a schedule that fits your Dubai lifestyle.",
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
      startingPrice: 199,
    },
    {
      id: "deep",
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      description:
        "Detailed cleaning for homes that need a full Dubai reset.",
      details:
        "Baseboards, fixtures, inside appliances, and hard-to-reach spots — ideal after travel season or before guests arrive.",
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
      startingPrice: 399,
    },
    {
      id: "move",
      slug: "move-in-move-out-cleaning",
      title: "Move In / Move Out Cleaning",
      description:
        "Get your Dubai property spotless before handover or Ejari inspection.",
      details:
        "Empty-home detail cleaning so landlord inspections and first nights feel effortless.",
      included: [
        "Empty-home deep clean",
        "Cabinets inside and out",
        "Appliance interiors",
        "Closets and shelves",
        "Handover-ready finish",
      ],
      notIncluded: ["Junk removal", "Repairs"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Bright empty modern home ready for move-in",
      icon: "truck" as const,
      href: "/services/move-in-move-out-cleaning",
      startingPrice: 499,
    },
    {
      id: "apartment",
      slug: "apartment-cleaning",
      title: "Apartment Cleaning",
      description: "Professional cleaning for Dubai apartments and studios.",
      details:
        "Efficient routines sized for Marina, JLT, Downtown, and Business Bay apartments without cutting corners.",
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
      startingPrice: 169,
    },
    {
      id: "kitchen-bath",
      slug: "kitchen-bathroom-cleaning",
      title: "Kitchen & Bathroom Cleaning",
      description:
        "Detailed cleaning for the areas that need it most in Dubai’s heat and humidity.",
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
      startingPrice: 149,
    },
    {
      id: "custom",
      slug: "custom-cleaning",
      title: "Custom Cleaning",
      description:
        "Flexible cleaning plans for villas, offices-at-home, and maid’s room extras.",
      details:
        "Build a checklist around pets, guests, Ramadan refreshes, or seasonal villa deep cleans.",
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
      startingPrice: 229,
    },
  ],
  pricing: [
    {
      id: "standard",
      name: "Standard Clean",
      price: 199,
      frequency: "from / visit",
      description: "Ideal for weekly or biweekly Dubai apartment upkeep.",
      features: [
        "Kitchen & bathrooms",
        "Dusting & floors",
        "Trash emptied",
        "Flexible scheduling",
      ],
      popular: false,
      href: "/book?service=regular",
    },
    {
      id: "deep",
      name: "Deep Clean",
      price: 399,
      frequency: "from / visit",
      description: "A thorough reset for villas and seasonal cleans.",
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
      price: 499,
      frequency: "from / visit",
      description: "Empty-home detail for handovers and Ejari-ready finishes.",
      features: [
        "Cabinets inside & out",
        "Appliance interiors",
        "Closets & shelves",
        "Handover-ready finish",
      ],
      popular: false,
      href: "/#quote",
    },
  ],
  addOns: [
    { id: "oven", name: "Inside oven", price: 55 },
    { id: "fridge", name: "Inside fridge", price: 49 },
    { id: "windows", name: "Interior windows", price: 65 },
    { id: "laundry", name: "Laundry fold", price: 40 },
  ],
  features: [
    {
      id: "trusted",
      title: "Trusted Professionals",
      description:
        "Vetted Dubai cleaning teams who treat apartments and villas with care.",
      icon: "users" as const,
    },
    {
      id: "ontime",
      title: "Reliable & On-Time",
      description:
        "Clear arrival windows across Marina, Downtown, Palm, and beyond.",
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
      description: "Liability coverage on every Dubai visit.",
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
      description: "Choose your Dubai community, service, and what you need.",
    },
    {
      number: "02",
      title: "We Make It Sparkle",
      description:
        "Our professional team arrives on time and takes care of everything.",
    },
    {
      number: "03",
      title: "Enjoy Your Fresh Home",
      description: "Relax and enjoy a cleaner, cooler, healthier Dubai space.",
    },
  ],
  areas: [
    {
      id: "dubai-marina",
      slug: "dubai-marina",
      name: "Dubai Marina",
      communities: ["Dubai Marina", "Marina Walk", "Marina Gate"],
      blurb: "Reliable apartment and penthouse cleaning across Dubai Marina.",
    },
    {
      id: "jbr",
      slug: "jbr",
      name: "JBR",
      communities: ["Jumeirah Beach Residence", "The Walk"],
      blurb: "Weekly and deep cleans for busy JBR apartments and beach homes.",
    },
    {
      id: "downtown",
      slug: "downtown-dubai",
      name: "Downtown Dubai",
      communities: ["Downtown Dubai", "Burj Khalifa area", "City Walk nearby"],
      blurb: "Premium cleans for Downtown apartments and residences.",
    },
    {
      id: "business-bay",
      slug: "business-bay",
      name: "Business Bay",
      communities: ["Business Bay", "Canal Residence"],
      blurb: "Flexible schedules for Business Bay professionals and families.",
    },
    {
      id: "palm-jumeirah",
      slug: "palm-jumeirah",
      name: "Palm Jumeirah",
      communities: ["Palm Jumeirah", "Shoreline", "Frond villas"],
      blurb: "Villa and apartment detail cleaning across the Palm.",
    },
    {
      id: "jlt",
      slug: "jlt",
      name: "JLT",
      communities: ["Jumeirah Lake Towers", "Cluster A–W"],
      blurb: "Apartment cleaning tuned for JLT towers and lake-view homes.",
    },
    {
      id: "dubai-hills",
      slug: "dubai-hills",
      name: "Dubai Hills",
      communities: ["Dubai Hills Estate", "Park Ridge"],
      blurb: "Family-friendly villa and townhouse cleans in Dubai Hills.",
    },
    {
      id: "arabian-ranches",
      slug: "arabian-ranches",
      name: "Arabian Ranches",
      communities: ["Arabian Ranches 1", "Arabian Ranches 2", "Arabian Ranches 3"],
      blurb: "Thorough villa cleaning for Arabian Ranches communities.",
    },
    {
      id: "jumeirah",
      slug: "jumeirah",
      name: "Jumeirah",
      communities: ["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim"],
      blurb: "Classic villa and family-home care throughout Jumeirah.",
    },
    {
      id: "al-barsha",
      slug: "al-barsha",
      name: "Al Barsha",
      communities: ["Al Barsha 1", "Al Barsha South", "Tecom nearby"],
      blurb: "Dependable house and apartment cleaning in Al Barsha.",
    },
  ],
  beforeAfter: [
    {
      id: "1",
      title: "Kitchen refresh",
      caption: "Grease and clutter cleared for a cook-ready Dubai kitchen.",
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
      name: "Sara Al M.",
      role: "Homeowner · Dubai Marina",
      quote:
        "Dubai Magic Home completely transformed our Marina apartment. The team was professional, friendly, and incredibly thorough.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    },
    {
      id: "2",
      name: "James K.",
      role: "Busy Parent · Arabian Ranches",
      quote:
        "We finally have weekends back. Recurring villa cleans are consistent, on time, and the house always smells fresh.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    {
      id: "3",
      name: "Priya R.",
      role: "Apartment Resident · JLT",
      quote:
        "Move-out cleaning was spotless. Our landlord was impressed and the handover went smoothly.",
      rating: 5,
      source: "Google",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    },
  ],
  stats: [
    { id: "homes", value: 800, suffix: "+", label: "Dubai Homes Cleaned" },
    { id: "rating", value: 5.0, suffix: "", label: "Average Rating", decimals: 1 },
    { id: "happy", value: 98, suffix: "%", label: "Happy Customers" },
    { id: "years", value: 6, suffix: "+", label: "Years in Dubai" },
  ],
  blogPosts: [
    {
      id: "1",
      slug: "how-often-should-you-deep-clean",
      title: "How Often Should You Deep Clean Your Dubai Home?",
      excerpt:
        "A practical guide to deep-clean cadence for Dubai apartments, villas, and high-traffic rooms.",
      body: [
        "Most Dubai households benefit from a deep clean every 3–6 months, with kitchens and bathrooms getting attention more often in the humid months.",
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
      title: "Simple Ways to Keep Your Dubai Home Fresh",
      excerpt:
        "Small daily habits that keep surfaces tidy between professional visits in Dubai’s climate.",
      body: [
        "Clear counters before bed, wipe bathroom sinks after use, and do a two-minute nightly reset in the kitchen.",
        "Keep a small caddy of microfiber cloths in each bathroom so quick wipe-downs become automatic.",
        "Pair these habits with a recurring Dubai Magic Home visit and your home stays guest-ready with far less stress.",
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
      title: "Professional Cleaning vs DIY Cleaning in Dubai",
      excerpt:
        "When to handle it yourself—and when bringing in pros saves time in a busy Dubai week.",
      body: [
        "DIY works for light maintenance, but deep corners, move-outs, and post-party resets are where professionals shine.",
        "Compare the value of your time: a few hours of your weekend versus a trained team that brings supplies and systems.",
        "Many Dubai Magic Home clients keep a DIY midweek tidy and book pros for the thorough weekly or biweekly clean.",
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
      question: "What cleaning services do you offer in Dubai?",
      answer:
        "We offer regular house cleaning, deep cleaning, move-in/move-out, apartment cleaning, kitchen & bathroom detail work, and fully custom villa plans across Dubai.",
    },
    {
      question: "How much does a cleaning cost in AED?",
      answer:
        "Standard cleans start around AED 199, deep cleans around AED 399, and move-in/out around AED 499 depending on home size. Prices include UAE VAT where shown. Use our estimate calculator or request a free quote for an exact number.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No—our teams arrive fully equipped. If you prefer specific eco products, let us know and we’ll accommodate when possible. A small materials fee may apply.",
    },
    {
      question: "Do you offer recurring cleaning?",
      answer:
        "Yes. Choose weekly, biweekly, or multiple times a week and we’ll keep your Dubai home consistently fresh.",
    },
    {
      question: "How long does a cleaning take?",
      answer:
        "Most standard apartment cleans take 2–4 hours depending on size and checklist depth. Villas usually take longer. We’ll set expectations when you book.",
    },
    {
      question: "Are your cleaners insured?",
      answer:
        "Yes. Dubai Magic Home teams are fully insured and background-checked for your peace of mind.",
    },
    {
      question: "Can I customize my cleaning service?",
      answer:
        "Absolutely. Tell us priorities—pet areas, maid’s room, offices, extras—and we’ll build a checklist around your needs.",
    },
    {
      question: "What areas of Dubai do you serve?",
      answer:
        "We currently serve Dubai Marina, JBR, Downtown, Business Bay, Palm Jumeirah, JLT, Dubai Hills, Arabian Ranches, Jumeirah, Al Barsha, and nearby communities. Select your area on the quote form to confirm coverage.",
    },
  ],
  social: [
    { id: "instagram", label: "Instagram", href: "https://instagram.com" },
    { id: "facebook", label: "Facebook", href: "https://facebook.com" },
    { id: "google", label: "Google", href: "https://www.google.com/maps/place/Dubai" },
  ],
  footer: {
    blurb: "Professional cleaning that makes your Dubai home feel magical.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Areas We Serve", href: "/#areas" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog/how-often-should-you-deep-clean" },
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
    heading: "Ready for a Dubai Home That Feels Like Magic?",
    text: "Let us take cleaning off your to-do list — apartments and villas across Dubai.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Friendly professional cleaner smiling in a branded apron",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function isCommunityServed(communitySlug: string): boolean {
  const normalized = communitySlug.trim().toLowerCase();
  return siteConfig.areas.some((a) => a.slug === normalized || a.id === normalized);
}

/** @deprecated Use isCommunityServed — kept for transitional imports */
export function isZipServed(zipOrCommunity: string): boolean {
  return isCommunityServed(zipOrCommunity);
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

/** Rough estimate helper for the calculator UI (AED) */
export function estimatePrice(input: {
  serviceId: string;
  bedrooms: number;
  bathrooms: number;
  frequency: "one-time" | "weekly" | "biweekly" | "monthly";
  addOnIds: string[];
}): number {
  const service = siteConfig.services.find((s) => s.id === input.serviceId);
  const base = service?.startingPrice ?? 199;
  const roomAddon =
    Math.max(0, input.bedrooms - 2) * 35 + Math.max(0, input.bathrooms - 1) * 25;
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
