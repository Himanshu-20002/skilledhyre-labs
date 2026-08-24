import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Card({
  title,
  description,
  icon: Icon,
  className = "",
  href,
  id,
}) {
  const CardContent = () => (
    <div
      id={id}
      className={`p-6 rounded-2xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#0a0c16] border border-[#6366f1]/20 hover:border-[#6366f1]/50 hover:shadow-[0_12px_30px_rgba(99,102,241,0.22)] transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/25 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform duration-300">
              <Icon className="w-5 h-5 text-[#38bdf8]" />
            </div>
          )}
          {href && (
            <ArrowUpRightIcon className="w-4 h-4 text-gray-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          )}
        </div>

        <h3 className="text-base font-bold text-white group-hover:text-[#818cf8] transition-colors mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
