import { usaAiDevelopment } from "./pages/usa/ai-development.js";
import { usaSaasDevelopment } from "./pages/usa/saas-development.js";
import { ukSoftwareDevelopment } from "./pages/uk/software-development.js";
import { auSaasDevelopment } from "./pages/au/saas-development.js";
import { uaeErpDevelopment } from "./pages/uae/erp-development.js";
import { getCountry, getAllCountries } from "./countries.js";

// Master list of all registered international landing pages
const allPages = [
  usaAiDevelopment,
  usaSaasDevelopment,
  ukSoftwareDevelopment,
  auSaasDevelopment,
  uaeErpDevelopment,
];

/**
 * Returns a specific page object by country code and slug.
 * Returns null if not found or if published is false.
 */
export function getInternationalPage(country, slug) {
  if (!country || !slug) return null;
  const normalizedCountry = country.toLowerCase();
  const normalizedSlug = slug.toLowerCase();

  return (
    allPages.find(
      (page) =>
        page.published &&
        page.country.toLowerCase() === normalizedCountry &&
        page.slug.toLowerCase() === normalizedSlug,
    ) || null
  );
}

/**
 * Returns all active static params for Next.js dynamic routing:
 * e.g. [{ country: "usa", slug: "ai-development" }]
 */
export function getAllActivePageParams() {
  return allPages
    .filter((page) => page.published)
    .map((page) => ({
      country: page.country,
      slug: page.slug,
    }));
}

/**
 * Returns all active pages (full objects)
 */
export function getAllActivePages() {
  return allPages.filter((page) => page.published);
}

/**
 * Returns all active service pages for a given country.
 */
export function getPagesByCountry(countryCode) {
  const normalizedCountry = countryCode?.toLowerCase();
  return allPages.filter(
    (page) => page.published && page.country.toLowerCase() === normalizedCountry,
  );
}

/**
 * Returns all country codes for static generation:
 * e.g. [{ country: "usa" }, { country: "uk" }, ...]
 */
export function getAllCountryParams() {
  return getAllCountries().map((country) => ({
    country: country.code,
  }));
}

export { getCountry, getAllCountries };
