import JsonLd from "@/components/common/JsonLd";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SkilledHyre Labs. Book a technical consultation for AI engineering, custom software development, cloud systems, and dedicated talent pods.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | SkilledHyre Labs",
    description:
      "Connect with SkilledHyre Labs for enterprise AI engineering, scalable software development, and technical consulting.",
    url: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact SkilledHyre Labs",
  url: "https://skilledhyrelabs.com/contact",
  description:
    "Contact SkilledHyre Labs for enterprise AI engineering, custom software, and technical consulting.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "SkilledHyre Labs",
    telephone: "+91-7070633784",
    email: "team.skilledhyre@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office no - 606 Tower A, I-thum Noida sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
