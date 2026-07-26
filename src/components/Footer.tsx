import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted to a balanced 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white leading-none block">
                  Subhamaity
                </span>
                <span className="text-[9px] font-bold tracking-widest text-emerald-500 uppercase block">
                  Associates
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for tax consulting, company incorporation,
              and financial compliance in West Bengal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#calculator"
                  className="hover:text-emerald-400 transition-colors"
                >
                  GST Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Firm
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Jalkhabar, Contai,
                  <br />
                  Banamali Pur, WB 721401
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+916297902962" className="hover:text-emerald-400">
                  +91 6297902962
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="mailto:taxoffice.co.in@gmail.com"
                  className="hover:text-emerald-400"
                >
                  taxoffice.co.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Subhamaity Associates. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
