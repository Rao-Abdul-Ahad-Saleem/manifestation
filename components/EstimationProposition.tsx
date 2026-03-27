import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function EstimationProposition() {
  const points = [
    { label: "Precision-Driven Accuracy", detail: "Meticulous takeoffs with zero-error assurance." },
    { label: "Market-Competitive Insights", detail: "Locally adjusted pricing for winning margins." },
    { label: "Rapid 24-48 Hour Turnaround", detail: "Meet every tender deadline with speed." },
    { label: "Scalable Expertise", detail: "Top-tier estimators without the in-house overhead." },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#262324]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-10 xl:gap-16 lg:justify-between lg:items-center px-5 lg:px-10">
        {/* Left Side: Professional Visual House Sketch Image*/}
        <div className="relative w-full max-w-md mx-auto aspect-4/5 rounded-2xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-[#3d3a3b] shadow-lg">
          <Image 
            src="/house-sketch.jpg" 
            alt="Professional at work"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Structured Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Your Bids Should Work <br /> 
              <span className="text-blue-600 dark:text-blue-400">As Hard As You Do</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Most estimates fail at their primary job—providing accuracy you can bank on. 
              We provide data-driven takeoffs that eliminate guesswork.
            </p>
          </div>

          {/* Feature List */}
          <div className="bg-slate-50 dark:bg-[#2d2a2b] rounded-xl px-8 py-6 space-y-6 border border-slate-100 dark:border-[#3d3a3b] shadow-sm">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <Check className="w-5 h-5 text-emerald-500 stroke-3" />
                </div>
                <p className="text-slate-700 dark:text-slate-200">
                  <span className="font-bold text-slate-900 dark:text-slate-100">{item.label} — </span>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <button className="w-full md:w-max bg-[#124191] hover:bg-blue-800 text-white font-bold py-5 px-12 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
            GET MY FREE ESTIMATE
          </button>
        </div>
      </div>
    </section>
  );
}