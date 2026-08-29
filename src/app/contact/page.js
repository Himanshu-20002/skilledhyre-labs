import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/common/Section";
import Button from "../../components/common/Button";
import JsonLd from "@/components/common/JsonLd";

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
      streetAddress: "Tower - A, Office No, i-Thum, 602 Sector 62",
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
      <Section className="text-center pb-0">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
          <PhoneIcon className="w-4 h-4" />
          <span>Contact Us</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Let’s Build Something <br />{" "}
          <span className="text-gradient-primary">Exceptional</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          Whether you need AI solutions, software development, or a dedicated
          tech team — SkilledHyre Labs is ready.
        </p>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-indigo-500/20">
                    <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">team.skilledhyre@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-indigo-500/20">
                    <PhoneIcon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">+91 7070633784</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-indigo-500/20">
                    <MapPinIcon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Office</h4>
                    <p className="text-gray-400">
                      Tower - A, Office No, i-Thum, 602 Sector 62, Noida, Uttar
                      Pradesh 201309
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to start?
              </h3>
              <p className="text-indigo-100 mb-6">
                Book a free consultation with our experts today.
              </p>
              <Button
                href="#"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 border-none"
              >
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
