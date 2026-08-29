import JsonLd from "./JsonLd";

export default function BreadcrumbJsonLd({ items = [] }) {
  // items: [{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, ...]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://skilledhyrelabs.com${item.url}`,
    })),
  };

  return <JsonLd data={schema} />;
}
