import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GSTCalculator from "@/components/GSTCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative">
      <div className="pt-28">
        <section id="home">
          <Hero />
        </section>

        <section
          id="calculator"
          className="py-16 bg-white border-y border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 justify-between bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <div className="max-w-xl text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  Free Tool
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-5 mb-4 tracking-tight">
                  Calculate GST Instantly
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Whether you are invoicing a client, checking a purchase, or
                  filing your returns, use our quick calculator to find the
                  exact net and gross amounts in seconds.
                </p>
                <a
                  href="#contact"
                  className="inline-flex font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Need help filing your GST? &rarr;
                </a>
              </div>

              <div className="w-full lg:w-[420px] shrink-0">
                <GSTCalculator />
              </div>
            </div>
          </div>
        </section>

        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
