import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) {
  const Component = href ? Link : "button";

  if (variant === "primary") {
    return (
      <Component
        href={href}
        className={`inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap group/btn ${className}`}
      >
        <span className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#090d18] text-white font-semibold text-sm sm:text-base transition-colors group-hover/btn:bg-[#0f1424]">
          <SparklesIcon className="w-4 h-4 text-[#38bdf8]" />
          <span>{children}</span>
          {Icon ? (
            <Icon className="w-4 h-4 text-[#38bdf8] transition-transform duration-300 group-hover/btn:translate-x-1" />
          ) : (
            <ArrowRightIcon className="w-4 h-4 text-[#38bdf8] transition-transform duration-300 group-hover/btn:translate-x-1" />
          )}
        </span>
      </Component>
    );
  }

  if (variant === "secondary") {
    return (
      <Component
        href={href}
        className={`inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#121624]/90 border border-[#6366f1]/35 text-gray-200 font-semibold text-sm sm:text-base hover:text-white hover:border-[#6366f1]/70 hover:bg-[#6366f1]/15 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap ${className}`}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
      </Component>
    );
  }

  return (
    <Component
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#6366f1]/40 text-[#818cf8] font-semibold text-sm hover:bg-[#6366f1]/10 hover:text-white transition-all duration-300 ${className}`}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 ml-2" />}
    </Component>
  );
}
