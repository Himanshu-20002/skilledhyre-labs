export const countries = {
  usa: {
    code: "usa",
    iso: "US",
    name: "United States",
    badge: "🇺🇸 US Market",
    flag: "🇺🇸",
    currency: "USD ($)",
    timezone: "EST / PST (4+ hrs daily team overlap)",
    hubTitle: "Software & AI Engineering for US Enterprises",
    hubDescription:
      "High-velocity engineering teams, autonomous AI systems, and scalable product architecture built for US companies with dedicated timezone alignment.",
  },
  uk: {
    code: "uk",
    iso: "GB",
    name: "United Kingdom",
    badge: "🇬🇧 UK Market",
    flag: "🇬🇧",
    currency: "GBP (£)",
    timezone: "GMT / BST (Full afternoon overlap)",
    hubTitle: "Software & AI Engineering for UK Businesses",
    hubDescription:
      "Enterprise software, AI automation, and cloud engineering tailored for UK companies with full GDPR compliance.",
  },
  au: {
    code: "au",
    iso: "AU",
    name: "Australia",
    badge: "🇦🇺 Australia Market",
    flag: "🇦🇺",
    currency: "AUD ($)",
    timezone: "AEST / AWST (Extensive morning overlap)",
    hubTitle: "SaaS & Cloud Engineering for Australian Enterprises",
    hubDescription:
      "Agile product discovery, rapid MVP builds, and enterprise cloud migrations for Australian fast-growth companies.",
  },
  uae: {
    code: "uae",
    iso: "AE",
    name: "UAE / Dubai",
    badge: "🇦🇪 UAE Market",
    flag: "🇦🇪",
    currency: "AED (د.إ)",
    timezone: "GST (Direct 3-4 hrs business overlap)",
    hubTitle: "Enterprise AI & ERP Solutions for UAE & Middle East",
    hubDescription:
      "Custom ERP extensions, enterprise AI solutions, and bilingual workflow automation for UAE businesses.",
  },
};

export const getCountry = (code) => countries[code?.toLowerCase()] || null;
export const getAllCountries = () => Object.values(countries);
