import Section from "../../components/common/Section";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data governance standards of SkilledHyre Labs. Learn how we manage enterprise data, client confidentiality, and security.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const currentDate = "March 19, 2026";

  return (
    <div className="pt-20">
      <Section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          🔐 Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8 italic">
          Effective Date: {currentDate}
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <p className="mb-4">
              At SkilledHyre Labs (“we”, “our”, “us”), we are committed to
              protecting your privacy and ensuring transparency in how your data
              is handled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-2 font-medium text-indigo-300">
              Personal Information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Project requirements</li>
            </ul>
            <p className="mb-2 font-medium text-indigo-300">
              Non-Personal Information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device details</li>
              <li>Website usage data</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              This type of data collection is standard for improving services
              and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to inquiries and provide services</li>
              <li>Improve website performance and user experience</li>
              <li>Send updates, proposals, or marketing communication</li>
              <li>Analyze trends and optimize our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Data Sharing & Disclosure
            </h2>
            <p className="mb-4">We do NOT sell your data.</p>
            <p className="mb-2">We may share information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trusted service providers (hosting, analytics, CRM tools)</li>
              <li>Legal authorities if required by law</li>
              <li>Internal teams for project execution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Cookies & Tracking Technologies
            </h2>
            <p className="mb-2">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Understand user behavior</li>
              <li>Improve website performance</li>
              <li>
                Run marketing campaigns (e.g., Meta Pixel, Google Analytics)
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Data Security
            </h2>
            <p className="mb-2 font-medium">We implement:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Secure servers</li>
              <li>SSL encryption</li>
              <li>Access control measures</li>
            </ul>
            <p className="mt-4 text-sm text-red-400/80">
              However, no system is 100% secure, and users should also take
              precautions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              These rights align with global data protection practices (like
              GDPR concepts)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with an updated date.
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contact Us
            </h2>
            <p className="mb-1">
              📧 Email:{" "}
              <a
                href="mailto:team.skilledhyre@gmail.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                team.skilledhyre@gmail.com
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <a
                href="tel:+917070633784"
                className="text-indigo-400 hover:text-indigo-300"
              >
                +91 7070633784
              </a>
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
