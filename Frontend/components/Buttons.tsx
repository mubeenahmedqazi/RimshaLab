"use client";

import { motion } from "framer-motion";

export default function Buttons() {
  const buttonData = [
    {
      text: "Health Card",
      image: "/HealthCard.jpg",
    },
    {
      text: "Book Appointment",
      image: "/BookAppointment.jpg",
    },
    {
      text: "Gallery",
      image: "/Gallery.jpg",
    },
    {
      text: "Contact Us",
      image: "/Contactus.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-center overflow-hidden">
      {/* 🌈 Decorative Glows */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-indigo-300/40 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-300/40 blur-[180px]" />

      {/* 🩺 Button Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-8 relative z-10 cursor-pointer">
        {buttonData.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 50px rgba(79, 70, 229, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
          >
            {/* 🖼 Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* 🌌 Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-800/60 to-indigo-900/80"></div>

            {/* ✨ Shimmer line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out"></div>

            {/* 💬 Text */}
            <div className="relative z-10 flex items-center justify-center py-16 text-white text-3xl font-bold tracking-wide uppercase">
              {item.text}
            </div>

            {/* 🌟 Border glow */}
            <div className="absolute inset-0 border border-indigo-400/20 group-hover:border-indigo-300/50 rounded-3xl transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
