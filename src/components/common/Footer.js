import Link from "next/link";
import { useEffect, useState } from "react";
import SkilledHyreLogo from "@/components/common/SkilledHyreLogo";

function AnimatedSaaSTiles() {
  const totalTiles = 24;
  const [activeStates, setActiveStates] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = { ...activeStates };
      for (let i = 0; i < 4; i++) {
        const randIdx = Math.floor(Math.random() * totalTiles);
        const glowStyles = [
          "bg-white/[0.03] border-white/[0.06]",
          "bg-[#38bdf8]/20 border-[#38bdf8]/45 shadow-[0_0_15px_rgba(56,189,248,0.35)] scale-105",
          "bg-[#6366f1]/25 border-[#6366f1]/55 shadow-[0_0_18px_rgba(99,102,241,0.4)] scale-105",
          "bg-[#a855f7]/20 border-[#a855f7]/45 shadow-[0_0_15px_rgba(168,85,247,0.35)] scale-105",
        ];
        updated[randIdx] = glowStyles[Math.floor(Math.random() * glowStyles.length)];
      }
      setActiveStates(updated);
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 w-64 sm:w-80">
      {Array.from({ length: totalTiles }).map((_, i) => {
        const activeStyle = activeStates[i] || "bg-white/[0.03] border-white/[0.06]";
        return (
          <div
            key={i}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border transition-all duration-700 ease-in-out ${activeStyle}`}
          />
        );
      })}
    </div>
  );
}

const footerNavigation = {
  solutions: [
    { name: "AI Engineering", href: "/ai-engineering" },
    { name: "Custom Software", href: "/services" },
    { name: "Web & App Development", href: "/services" },
    { name: "Tech Talent on Demand", href: "/tech-talent" },
  ],
  company: [
    { name: "Innovation", href: "/innovation" },
    { name: "Industries", href: "/industries" },
    { name: "Process", href: "/end-to-end" },
    { name: "Contact", href: "/contact" },
  ],
  industries: [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "FinTech & Banking", href: "/industries/fintech-banking" },
    { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Real Estate", href: "/industries/real-estate" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/SkilledhyreLabs",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/skilledhyrelabs/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@SKILLEDHYRELABS",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.501 6.186C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/skilledhyrelabs/?viewAsMember=true",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-b from-[#080d1a] via-[#0a1124] to-[#060914] text-[#f1f0ec] overflow-hidden border-t border-[#6366f1]/20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Rich vibrant ambient background lighting & blueprint grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left Indigo Nebula Glow */}
        <div className="absolute -top-24 -left-20 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(99,102,241,0.22)_0%,_rgba(124,58,237,0.12)_45%,_transparent_70%)] blur-3xl pointer-events-none" />
        {/* Top-right Cyan Nebula Glow */}
        <div className="absolute top-10 -right-20 w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(99,102,241,0.22)_0%,_rgba(124,58,237,0.12)_45%,_transparent_70%)] blur-3xl pointer-events-none" />
        {/* Fine technical blueprint grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50" />
      </div>

      <div className="relative container mx-auto px-6 pt-12 pb-6 max-w-[1200px]">
        {/* Pre-Footer Luminous Glass Card Banner */}
        <div className="relative mb-14 p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#0f172a]/95 via-[#131d36]/90 to-[#0b1120]/95 border border-[#6366f1]/35 shadow-[0_0_50px_rgba(99,102,241,0.22)] backdrop-blur-2xl overflow-hidden group">
          {/* Right-Side Live Animated SaaS Glass Tiles Grid Matrix */}
          <div className="absolute right-[-10px] sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_right,white_45%,transparent_85%)] opacity-80">
            {/* Ambient soft glow highlight behind action button */}
            <div className="absolute top-2 right-12 w-72 h-72 bg-[#6366f1]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            {/* Live Animated SaaS Tiles Grid */}
            <AnimatedSaaSTiles />
          </div>

          <div className="relative z-10 flex flex-col gap-8 sm:gap-10">
            {/* Top Row: Logo Emblem (Left) & Capsule Action Button (Right) */}
            <div className="flex items-center justify-between gap-6">
              {/* Brand Logo */}
              <Link href="/" className="inline-flex items-center group">
                <img
                  src="/logo_new (2).png"
                  alt="SkilledHyre Labs Logo"
                  className="h-16 sm:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Glowing Glass Capsule CTA Button ("Let's Collaborate ▲") */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white/[0.12] hover:bg-white/[0.2] border border-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
              >
                <span>Let’s Collaborate</span>
                <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 group-hover/btn:bg-cyan-300 group-hover/btn:shadow-[0_0_15px_rgba(56,189,248,0.6)] overflow-hidden">
                  <span className="inline-block animate-arrow-delay-launch">
                    ▲
                  </span>
                </span>
              </Link>
            </div>

            {/* Middle Row: Large Editorial Headline */}
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.16] max-w-3xl">
                Design & Engineering Partner for High-Quality SaaS, AI & Digital Products
              </h2>
            </div>

            {/* Bottom Row: Verification Pill Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Badge 1: 50+ Projects Completed */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 text-xs sm:text-sm font-medium text-gray-200 backdrop-blur-md">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#38bdf8] ring-2 ring-[#080b13]" />
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#6366f1] ring-2 ring-[#080b13]" />
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#a855f7] ring-2 ring-[#080b13]" />
                </div>
                <span className="font-semibold text-white">50+ Projects Completed</span>
              </div>

              {/* Badge 2: 5.0 Verified Excellence */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 text-xs sm:text-sm font-medium text-gray-200 backdrop-blur-md">
                <span className="font-bold text-amber-400">5.0</span>
                <span>Verified by</span>
                <span className="font-bold text-white tracking-wide">Clutch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sleek Horizontal Divider Line below CTA Banner */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/45 to-transparent mb-10" />

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Brand Info & Live System Status */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center group">
              <img
                src="/logo_new (2).png"
                alt="SkilledHyre Labs Logo"
                className="h-20 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Engineering Digital Innovation with AI & Technology to help startups and enterprise organizations build, modernize, and scale.
            </p>

            {/* Live Operational System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/35 text-[0.7rem] font-medium text-[#818cf8]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#38bdf8]" />
              </span>
              SkilledHyre Labs • All Systems Operational
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0e1426] border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#6366f1]/60 hover:bg-[#6366f1]/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-4">
                Solutions
              </h4>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-xs sm:text-sm text-gray-300 hover:text-white font-medium transition-all duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-xs sm:text-sm text-gray-300 hover:text-white font-medium transition-all duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-4">
                Industries
              </h4>
              <ul className="space-y-3">
                {footerNavigation.industries.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-xs sm:text-sm text-gray-300 hover:text-white font-medium transition-all duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-xs sm:text-sm text-gray-300 hover:text-white font-medium transition-all duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & locations bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkilledHyre Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>London • New York • Remote</span>
          </div>
        </div>

        {/* Compact Watermark Typography with Minimal Left-to-Right Light Shimmer */}
        <div className="pt-6 text-center pointer-events-none select-none overflow-hidden">
          <span className="text-3xl sm:text-5xl lg:text-[6vw] font-extrabold tracking-tighter uppercase leading-none block animate-shimmer-sweep">
            SKILLEDHYRE LABS
          </span>
        </div>
      </div>
    </footer>
  );
}
