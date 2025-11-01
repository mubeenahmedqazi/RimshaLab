"use client";

import Image from "next/image";

export default function LabQualityPolicy() {
  return (
    <section className="py-24 bg-indigo-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">Lab Quality Policy</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Rimsha Lab, quality and patient safety are our top priorities. Our lab policies ensure
            that every test meets international standards of accuracy, reliability, and efficiency.
            We continuously monitor, train, and upgrade our procedures to provide the best diagnostics
            for our patients.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/quality-policy.jpg"
            alt="Lab Quality"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
