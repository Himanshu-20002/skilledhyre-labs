const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80";

// Global Edge WebP acceleration: converts raw PNGs into lean WebPs via Cloudflare Edge
export const getOptimizedImageUrl = (url, width = 640) => {
  if (!url || typeof url !== "string") return FALLBACK_IMAGE;
  if (url.startsWith("/") || url.includes("images.unsplash.com")) {
    return url;
  }
  if (url.includes("ibb.co") || url.includes("picsum.photos")) {
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=80`;
  }
  return url;
};
