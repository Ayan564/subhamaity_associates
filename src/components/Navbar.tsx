"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Briefcase,
  Users,
  Star,
  Mail,
  Home,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [promo, setPromo] = useState({ show: false, text: "", link: "" });

  const pathname = usePathname();
  const whatsappUrl =
    "https://wa.me/917602077133?text=Hello%20Subhamaity%20Associates,%20I%20need%20assistance.";

  // Group services by category for the Mega Menu
  const groupedServices = servicesData.reduce(
    (acc, service) => {
      if (!acc[service.category]) acc[service.category] = [];
      acc[service.category].push(service);
      return acc;
    },
    {} as Record<string, typeof servicesData>,
  );

  // Added "Home" to the navigation links
  const navLinks = [
    { name: "Home", href: "/#home", id: "home", icon: Home },
    {
      name: "Calculator",
      href: "/#calculator",
      id: "calculator",
      icon: Calculator,
    },
    { name: "Services", href: "/#services", id: "services", icon: Briefcase },
    { name: "About", href: "/#about", id: "about", icon: Users },
    { name: "Reviews", href: "/#testimonials", id: "testimonials", icon: Star },
    { name: "Contact", href: "/#contact", id: "contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    fetch("/promo.json")
      .then((res) => res.json())
      .then((data) => setPromo(data))
      .catch(() => console.log("No promo data"));

    if (pathname === "/") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px" },
      );

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    } else {
      setActiveSection("");
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      {promo.show && (
        <div className="bg-slate-900 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2">
          <span>{promo.text}</span>
          {promo.link && (
            <Link
              href={promo.link}
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 flex items-center gap-1"
            >
              Act Now <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
        >
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-md group-hover:shadow-emerald-500/20 group-hover:scale-105 transition-all">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-none">
                Subhamaity
              </span>
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mt-0.5 block">
                Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              // 🌟 IF THE LINK IS "SERVICES", RENDER THE MEGA MENU 🌟
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="relative group py-6">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1.5 font-semibold text-sm transition-colors ${
                        isActive
                          ? "text-emerald-600"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                      <ChevronDown className="w-3 h-3 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />

                      <span
                        className={`absolute -bottom-2 left-0 h-[2px] bg-emerald-500 transition-all duration-300 rounded-full ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>

                    {/* The Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden grid grid-cols-3 gap-8">
                        {/* Decorative Background inside dropdown */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-bl-full -z-10"></div>

                        {Object.entries(groupedServices).map(
                          ([category, svcs]) => (
                            <div key={category}>
                              <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                {category}
                              </h4>
                              <ul className="space-y-3">
                                {svcs.map((svc) => (
                                  <li key={svc.id}>
                                    <Link
                                      href={`/services/${svc.id}`}
                                      className="group/link flex items-start"
                                    >
                                      <span className="text-sm font-bold text-slate-700 group-hover/link:text-emerald-600 transition-colors">
                                        {svc.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Normal Links
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 font-semibold text-sm transition-colors py-6 group ${
                    isActive
                      ? "text-emerald-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  <span
                    className={`absolute bottom-4 left-0 h-[2px] bg-emerald-500 transition-all duration-300 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917602077133"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+91 7602077133</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp Us</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg bg-slate-100"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[80vh] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-emerald-600 py-3.5 rounded-xl shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
