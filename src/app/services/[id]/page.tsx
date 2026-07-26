import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  MessageSquare,
  Layers,
} from "lucide-react";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/916297902962?text=Hello%20Subhamaity%20Associates,%20I%20need%20assistance%20with%20${encodeURIComponent(service.title)}.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-32 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors mb-8 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>

            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {service.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </section>

              {service.serviceTypes && service.serviceTypes.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Types & Categories
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.serviceTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors"
                      >
                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                          {type.name}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Required Documents
                  </h2>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <ul className="space-y-4">
                    {service.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Common Mistakes to Avoid
                  </h2>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
                  <ul className="space-y-4">
                    {service.mistakes.map((mistake, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5"></div>
                        <span className="text-slate-700">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-slate-900 rounded-3xl p-8 text-white shadow-xl border border-slate-800">
                <h3 className="text-xl font-bold mb-2">
                  Need help with {service.title}?
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Our experts are ready to assist you with fast processing and
                  100% compliance.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 mb-4"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <p className="text-xs text-center text-slate-500">
                  Usually replies within 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
