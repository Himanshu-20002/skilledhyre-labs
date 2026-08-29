import JsonLd from "./JsonLd";

export default function ServiceJsonLd({
  name,
  description,
  serviceType = "Software Development",
  url,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    serviceType: serviceType,
    provider: {
      "@type": "Organization",
      name: "SkilledHyre Labs",
      url: "https://skilledhyrelabs.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    url: url ? `https://skilledhyrelabs.com${url}` : "https://skilledhyrelabs.com",
  };

  return <JsonLd data={schema} />;
}
