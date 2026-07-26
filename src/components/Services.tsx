import React from "react";
import Link from "next/link";
import {
  Building2,
  Award,
  Check,
  ArrowUpRight,
  Calculator,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      category: "Taxation & Financial Filings",
      description:
        "Timely, accurate, and penalty-free filing for individuals, firms, and corporations.",
      icon: <Calculator className="w-6 h-6 text-emerald-600" />,
      items: [
        {
          title: "Income Tax Return (ITR)",
          desc: "E-filing for salaried persons, freelancers, self-employed, and corporate entities with maximum tax savings.",
          slug: "income-tax-return",
        },
        {
          title: "GST Return Filing",
          desc: "Monthly and quarterly GSTR-1, GSTR-3B, and annual GSTR-9 filings with 100% reconciliation.",
          slug: "gst-return-filing",
        },
        {
          title: "TDS & TCS Returns",
          desc: "Quarterly TDS/TCS statement preparation, challan validation, and Form 16/16A generation.",
          slug: "tds-tcs-returns",
        },
        {
          title: "ROC Compliance & Filing",
          desc: "Annual ROC filings, director KYC, minutes keeping, and statutory compliance for Private Limited firms.",
          slug: "roc-compliance",
        },
        {
          title: "Payroll Management",
          desc: "End-to-end salary processing, PF/ESIC compliance, pay-slip generation, and tax deductibility handling.",
          slug: "payroll-management",
        },
      ],
    },
    {
      category: "Business Setup & Registrations",
      description:
        "Turnkey business incorporation and government registration services to launch your venture legally.",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      items: [
        {
          title: "GST Registration",
          desc: "Fast-track online GST state registration, amendment, and cancellation handling for all business types.",
          slug: "gst-registration",
        },
        {
          title: "Company Registration",
          desc: "Pvt Ltd, LLP, One Person Company (OPC), and Partnership firm incorporation with PAN/TAN setup.",
          slug: "company-registration",
        },
        {
          title: "MSME / Udyam Registration",
          desc: "Unlock government subsidies, priority loans, and tender benefits with official MSME certificates.",
          slug: "msme-registration",
        },
        {
          title: "Startup India Registration",
          desc: "DPIIT recognition to gain tax exemptions, government grant eligibility, and investor advantages.",
          slug: "startup-india",
        },
        {
          title: "Trademark & Intellectual Property",
          desc: "Protect your brand name, logo, and identity with expert trademark search, filing, and objection handling.",
          slug: "trademark-registration",
        },
      ],
    },
    {
      category: "Certifications & Business Reports",
      description:
        "Official licenses, international quality standard certifications, and bank project documentation.",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      items: [
        {
          title: "FSSAI Food License",
          desc: "Basic, State, and Central FSSAI registrations for food businesses, restaurants, and cloud kitchens.",
          slug: "fssai-license",
        },
        {
          title: "Project Report for Bank Loans",
          desc: "CMA Data and detailed project viability reports engineered for quick bank loan approvals.",
          slug: "project-report",
        },
        {
          title: "IEC (Import Export Code)",
          desc: "Lifetime DGFT Import Export Code registration for expanding your products globally.",
          slug: "iec-code",
        },
        {
          title: "ISO Certification",
          desc: "ISO 9001, 27001, and quality management system certifications to build customer credibility.",
          slug: "iso-certification",
        },
        {
          title: "PWD Contractor Registration",
          desc: "Enlistment and document verification services for government civil and PWD tender bidding.",
          slug: "pwd-registration",
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Tax & Financial Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We handle your legal tax filings, registrations, and accounting
            duties so you can focus 100% on growing your business.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="p-2 bg-emerald-100/60 rounded-lg">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {cat.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, itemIdx) => (
                  <Link
                    href={`/services/${item.slug}`}
                    key={itemIdx}
                    className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-500/50 transition-all group flex flex-col justify-between cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h4>
                        <div className="p-1 rounded bg-slate-50 group-hover:bg-emerald-50 group-hover:text-emerald-600 text-slate-400 transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <Check className="w-3.5 h-3.5" /> Fast Processing
                      </span>
                      <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">
                        View Details &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
