export default function Section({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`py-15  mt-10 sm:py-20 relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl opacity-20 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20 mix-blend-screen" />
      </div>
      <div className="container mx-auto px-4 sm:px-1 lg:px-20 relative z-10">
        {children}
      </div>
    </section>
  );
}
