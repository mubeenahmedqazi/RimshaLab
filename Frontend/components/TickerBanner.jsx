"use client";

export default function TickerBanner() {
  return (
    <div className="fixed top-30 z-50 w-full bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden shadow-2xl border-t-2 border-indigo-600 border-b-2">
      <div className="whitespace-nowrap animate-marquee py-1 text-2xl md:text-2xl font-bold tracking-wide">
        <span className="mx-20">
          🩺 Rimsha Lab proudly launches the <span className="text-yellow-300 font-extrabold">Health Card</span> — 
          an exclusive initiative offering <span className="text-green-400 font-extrabold">20% Discount</span> for our valued patients!
        </span>
        <span className="mx-20">
          🌟 Enroll in the <span className="text-yellow-300 font-extrabold">Health Card Program</span> today — 
          trusted care, advanced diagnostics, and affordable healthcare for all!
        </span>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          90% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
