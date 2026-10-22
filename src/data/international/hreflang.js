const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

/**
 * Hreflang Groups mapping related regional landing pages together.
 * When a page belongs to a group, reciprocal language tags are automatically generated.
 */
export const hreflangGroups = {
  "ai-development": {
    "en-US": `${BASE_URL}/usa/ai-development`,
    "en-GB": `${BASE_URL}/uk/ai-development`,
    "en-AE": `${BASE_URL}/uae/ai-development`,
    "x-default": `${BASE_URL}/ai-engineering`,
  },
  "saas-development": {
    "en-US": `${BASE_URL}/usa/saas-development`,
    "en-AU": `${BASE_URL}/au/saas-development`,
    "x-default": `${BASE_URL}/services/product-engineering`,
  },
  "custom-software": {
    "en-GB": `${BASE_URL}/uk/software-development`,
    "x-default": `${BASE_URL}/services/custom-software`,
  },
  "cloud-engineering": {
    "en-AU": `${BASE_URL}/au/cloud-engineering`,
    "x-default": `${BASE_URL}/services/cloud-devops`,
  },
  "erp-development": {
    "en-AE": `${BASE_URL}/uae/erp-development`,
    "x-default": `${BASE_URL}/services/erp`,
  },
};

/**
 * Returns the reciprocal hreflang alternate URL map for a given group.
 * @param {string} groupKey
 * @returns {Record<string, string>}
 */
export function getHreflangAlternates(groupKey) {
  if (!groupKey || !hreflangGroups[groupKey]) {
    return {
      "x-default": `${BASE_URL}/services`,
    };
  }
  return hreflangGroups[groupKey];
}
