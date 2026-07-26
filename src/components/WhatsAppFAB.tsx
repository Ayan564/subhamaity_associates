"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFAB() {
  const whatsappUrl =
    "https://wa.me/917602077133?text=Hello%20Subhamaity%20Associates,%20I%20need%20quick%20assistance.";

  return (
    <div className="fixed bottom-6 right-6 z-[99] group cursor-pointer">
      {/* LAYER 1: The Spreading Ripple (Shoots outward and fades to catch the eye) */}
      <div className="absolute -inset-1 bg-emerald-400 rounded-full animate-ping opacity-60 duration-1000"></div>

      {/* LAYER 2: The Deep Ambient Glow (Stays wide and constantly illuminates) */}
      <div className="absolute -inset-3 bg-emerald-500/60 rounded-full blur-xl animate-pulse"></div>

      {/* The Main Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-slate-900 text-white pl-2 pr-4 sm:pr-5 py-2 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-300 border border-slate-700 hover:border-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        {/* Icon Container with slight hover rotation */}
        <div className="bg-emerald-500 text-slate-950 p-2.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xs font-bold text-emerald-400 leading-none mb-0.5">
            Need Help?
          </span>
          <span className="text-sm font-extrabold text-white leading-none">
            Chat with us
          </span>
        </div>
      </a>
    </div>
  );
}
