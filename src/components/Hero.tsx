import React from "react";
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  Lock,
  Award,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Govt. Authorized Tax Intermediary
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Smart Financial Solutions <br className="hidden md:block" />
          <span className="text-emerald-600">For Growing Businesses.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          From GST registration to ITR filing and Company Incorporation, we
          handle the complex tax compliance so you can focus on scaling your
          business.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
          >
            Explore Our Services <ArrowRight className="w-5 h-5" />
          </Link>

          {/* 🌟 NEW: Calculate GST Button 🌟 */}
          <Link
            href="#calculator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold px-8 py-4 rounded-xl transition-all border border-emerald-200 hover:-translate-y-0.5"
          >
            <Calculator className="w-5 h-5" /> Calculate GST Instantly
          </Link>
        </div>

        {/* 🌟 NEW: Trust Badges Strip 🌟 */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Why Businesses Trust Us
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span className="font-bold text-sm sm:text-base">
                Govt. Authorized
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Lock className="w-6 h-6 text-emerald-600" />
              <span className="font-bold text-sm sm:text-base">
                100% Data Privacy
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <FileCheck className="w-6 h-6 text-emerald-600" />
              <span className="font-bold text-sm sm:text-base">
                Error-Free Filing
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Award className="w-6 h-6 text-emerald-600" />
              <span className="font-bold text-sm sm:text-base">
                ISO Certified Process
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
