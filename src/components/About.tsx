import React from "react";
import { Target, Shield, Users, Lightbulb, CheckCircle } from "lucide-react";

export default function About() {
  const reasons = [
    {
      title: "5+ Years of Expertise",
      description:
        "Proven track record in tax, accounting, and complex business registrations.",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Tailored Financial Solutions",
      description:
        "We don't do 'one-size-fits-all'. Every strategy is customized for your specific business goals.",
      icon: <Target className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Personalized attention ensuring clarity, efficiency, and zero compliance headaches.",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Modern Technology",
      description:
        "Using the latest digital filing systems to ensure fast processing and complete data security.",
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Story & Mission */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Unlocking Growth with Expert Financial Guidance.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At{" "}
                <span className="font-semibold text-slate-900">
                  Subhamaity Associates
                </span>
                , we are more than just a tax service provider—we are your
                trusted partner in financial success. We specialize in
                comprehensive tax, accounting, and business registration
                services designed to streamline your financial processes.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                From proactive tax planning and flawless compliance to initial
                business setup and ongoing accounting support, we take the
                burden off your shoulders so you can focus on what matters most:
                growing your business.
              </p>
            </div>

            {/* Quick Stats / Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <h4 className="text-3xl font-extrabold text-slate-900">100%</h4>
                <p className="text-sm font-medium text-slate-500">
                  Compliance Rate
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl font-extrabold text-slate-900">5+</h4>
                <p className="text-sm font-medium text-slate-500">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us (Bento Grid Style) */}
          <div
            id="why-us"
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xs relative"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -z-10"></div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Why Choose Us?
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Start, grow, and thrive with a team that puts your financial
                health first.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-xs border border-slate-100 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Trust Note */}
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-700 bg-white p-4 rounded-xl border border-slate-100 shadow-xs">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <p>Registered and authorized financial service provider.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
