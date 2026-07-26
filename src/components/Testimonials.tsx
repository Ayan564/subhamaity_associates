import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul S.",
      biz: "Retail Store Owner",
      text: "Got my GST registration done in just 3 days! Zero hassle, highly recommended.",
    },
    {
      name: "Priya M.",
      biz: "Freelance Designer",
      text: "They helped me file my ITR-4 and saved me over ₹40,000 in taxes this year.",
    },
    {
      name: "Amit T.",
      biz: "Tech Startup",
      text: "Subhamaity Associates handled our entire Pvt Ltd incorporation. Super professional.",
    },
    {
      name: "Vikram R.",
      biz: "Restaurant Owner",
      text: "Got my FSSAI State license and MSME certificate without stepping out of my office.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-slate-950 overflow-hidden relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Trusted by 500+ Businesses
        </h2>
        <p className="text-slate-400 mt-4">Don't just take our word for it.</p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right fading gradients to make it look smooth */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* The scrolling track (we duplicate the array to make it loop seamlessly) */}
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap gap-6 pl-6 hover:[animation-play-state:paused]">
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-80 shrink-0 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-4 whitespace-normal"
            >
              <div className="flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-xs text-slate-500">{review.biz}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
