"use client";

import Image from "next/image";

export default function Certifications() {
  const certificates = [
    { title: "ISO 9001", image: "/cert1.jpg" },
    { title: "Accredited Lab", image: "/cert2.jpg" },
    { title: "Safety Compliance", image: "/cert3.jpg" },
    { title: "Quality Standards", image: "/cert4.jpg" },
  ];

  return (
    <section className="py-24 bg-indigo-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-indigo-900 mb-12">Certifications</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative w-full h-64">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-indigo-900">{cert.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
