"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-slate-300 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                Ready to Streamline Your Taxes?
              </h2>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                Whether you have a quick question about GST or need a
                comprehensive financial consultation, our team is here to help.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Call Us Directly
                  </h4>
                  <a
                    href="tel:+917602077133"
                    className="text-slate-400 hover:text-emerald-400 transition-colors mt-1 block"
                  >
                    +91 7602077133
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Email Address
                  </h4>
                  <a
                    href="mailto:subhamaityassociates@yahoo.com"
                    className="text-slate-400 hover:text-emerald-400 transition-colors mt-1 block"
                  >
                    subhamaityassociates@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Head Office</h4>
                  <p className="text-slate-400 mt-1">
                    1st Floor, Rik Das Bazaar, Near State Bank of India
                    <br />
                    Satmile, Contai, Purba Medinipur, West Bengal 721401
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative text-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="subject"
                value="New Inquiry from Subhamaity Associates Website"
              />
              <input
                type="hidden"
                name="from_name"
                value="Subhamaity Associates System"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  How can we help?
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                  placeholder="I am looking for assistance with..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/30"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p>Message sent successfully! We will contact you soon.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>
                    Something went wrong. Please try calling or using WhatsApp
                    instead.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 🌟 SWIGGY / ZOMATO STYLE CUSTOM MAP CONTAINER 🌟 */}
        <div className="w-full h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
          {/* The Google Map iframe */}
          <iframe
            src="https://maps.google.com/maps?q=QQH2+6P+Contai,+West+Bengal&t=&z=17&ie=UTF8&iwloc=near&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Subhamaity Associates Office Location"
            className="w-full h-full"
          ></iframe>

          {/* 🌟 CUSTOM THEMED BRAND PIN MARKER OVERLAY (Center of Map) 🌟 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {/* Pulsing ring matching theme */}
              <div className="absolute w-14 h-14 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
              {/* Core Pin Icon */}
              <div className="relative w-11 h-11 bg-slate-900 border-2 border-emerald-400 rounded-full flex items-center justify-center shadow-2xl">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            {/* Custom Label Tag */}
            <div className="mt-2.5 bg-slate-900/95 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl border border-emerald-500/50 shadow-2xl whitespace-nowrap backdrop-blur-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Subhamaity Associates Head Office
            </div>
          </div>

          {/* Floating App-Like Card Overlay at Bottom Left */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-between gap-4 z-20">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                Exact Location
              </span>
              <h4 className="text-white font-bold text-base mt-1">
                Subhamaity Associates
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                1st Floor, Rik Das Bazaar, Near State Bank of India, Satmile,
                Contai, Purba Medinipur, West Bengal 721401
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=QQH2+6P+Contai,+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition-all shadow-lg shrink-0 flex items-center justify-center group-hover:scale-105"
              aria-label="Open in Google Maps"
            >
              <Navigation className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
