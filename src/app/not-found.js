import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "404 - Page Not Found | SkilledHyre Labs",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07040d] px-6 text-center text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <span className="inline-block text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 mb-4 tracking-tighter">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
          The page you requested could not be located. It may have been moved, renamed, or deleted.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services/custom-software"
            className="px-6 py-3 rounded-full text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
