import Section from "../../components/common/Section";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for utilizing services, software platforms, and digital resources provided by SkilledHyre Labs.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const currentDate = "March 19, 2026";

  return (
    <div className="pt-20">
      <Section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          📜 Terms & Conditions
        </h1>
        <p className="text-gray-400 mb-8 italic">
          Effective Date: {currentDate}
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <p>
              By accessing or using our website (skilledhyrelabs.com), you agree
              to the following terms:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Services
            </h2>
            <p className="mb-2 font-medium text-indigo-300">
              SkilledHyre Labs provides:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>AI Engineering Solutions</li>
              <li>Software Development</li>
              <li>Automation & Analytics</li>
              <li>Digital Transformation Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Use of Website
            </h2>
            <p className="mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website for illegal purposes</li>
              <li>Attempt to hack, disrupt, or misuse the platform</li>
              <li>Copy or reproduce content without permission</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Such restrictions are standard to protect platforms and users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Intellectual Property
            </h2>
            <p className="mb-2">All content including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-indigo-300">
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Case studies</li>
            </ul>
            <p>
              …belongs to SkilledHyre Labs and cannot be reused without
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Project Engagement Terms
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                All services are subject to mutual agreement / proposal approval
              </li>
              <li>
                Pricing, timelines, and deliverables will be defined in
                contracts
              </li>
              <li>Advance payments may be required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Limitation of Liability
            </h2>
            <p className="mb-2 font-medium">We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect or consequential damages</li>
              <li>Loss of data or business</li>
              <li>Delays caused by third-party tools or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Third-Party Services
            </h2>
            <p className="mb-2 font-medium text-indigo-300">
              We may use tools like:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud hosting (AWS, etc.)</li>
              <li>Analytics tools</li>
              <li>CRM systems</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              These are governed by their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Termination
            </h2>
            <p className="mb-2 font-medium">We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Restrict access</li>
              <li>Terminate services</li>
            </ul>
            <p>…if terms are violated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Governing Law
            </h2>
            <p>These terms are governed by the laws of India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We may update these terms anytime. Continued use = acceptance.
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Contact Information
            </h2>
            <p className="mb-1">
              📧{" "}
              <a
                href="mailto:team.skilledhyre@gmail.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                team.skilledhyre@gmail.com
              </a>
            </p>
            <p>
              📞{" "}
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
