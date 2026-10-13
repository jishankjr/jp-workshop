
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  CalendarCheck,
  CheckCircle2,
  CircleHelp,
  Cog,
  Disc3,
  Droplets,
  Gauge,
  ShieldCheck,
  Settings,
  Zap,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../../components/LanguageProvider";
import { serviceCategories } from "../../data/services";

const nepaliServiceNames: Record<string, string> = {
  "General Bike & Scooter Servicing": "बाइक तथा स्कुटर सामान्य सर्भिसिङ",
  "Engine Oil Change": "इन्जिन आयल परिवर्तन",
  "Engine Repair": "इन्जिन मर्मत",
  "Brake Repair": "ब्रेक मर्मत",
  "Electrical Repair": "इलेक्ट्रिकल मर्मत",
  "Tyre Repair": "टायर मर्मत",
  "Battery Check & Replacement": "ब्याट्री जाँच तथा परिवर्तन",
  "Chain Adjustment & Lubrication": "चेन मिलाउने तथा लुब्रिकेशन",
  "Clutch Repair": "क्लच मर्मत",
  "Accelerator Repair": "एक्सेलेरेटर मर्मत",
  "Carburetor Cleaning": "कार्बुरेटर सफा गर्ने",
  "Air Filter Cleaning": "एयर फिल्टर सफा गर्ने",
  "Spark Plug Replacement": "स्पार्क प्लग परिवर्तन",
  "Coolant Replacement": "कुल्यान्ट परिवर्तन",
  "Suspension Repair": "सस्पेन्सन मर्मत",
  "Wheel Alignment": "ह्विल अलाइनमेन्ट",
  "Puncture Repair": "पन्चर मर्मत",
  "Tyre Replacement": "टायर परिवर्तन",
  "Headlight Repair": "हेडलाइट मर्मत",
  "Indicator Repair": "इन्डिकेटर मर्मत",
  "Horn Repair": "हर्न मर्मत",
  "Self Start Repair": "सेल्फ स्टार्ट मर्मत",
  "Bike Washing": "बाइक धुने",
  "Full Body Washing": "पूरै बाइक धुने",
  "Pickup & Power Problem": "पिकअप तथा पावर समस्या",
  "General Inspection": "सामान्य जाँच",
};

function getServiceIcon(name: string) {
  const service = name.toLowerCase();

  if (service.includes("oil") || service.includes("lubrication")) {
    return Droplets;
  }

  if (service.includes("brake") || service.includes("disc")) {
    return Disc3;
  }

  if (service.includes("battery")) {
    return BatteryCharging;
  }

  if (
    service.includes("electrical") ||
    service.includes("headlight") ||
    service.includes("indicator") ||
    service.includes("horn") ||
    service.includes("spark plug")
  ) {
    return Zap;
  }

  if (
    service.includes("tyre") ||
    service.includes("tire") ||
    service.includes("wheel") ||
    service.includes("puncture")
  ) {
    return Gauge;
  }

  if (
    service.includes("engine") ||
    service.includes("clutch") ||
    service.includes("carburetor") ||
    service.includes("pickup") ||
    service.includes("power")
  ) {
    return Cog;
  }

  if (
    service.includes("chain") ||
    service.includes("suspension") ||
    service.includes("accelerator")
  ) {
    return Settings;
  }

  if (service.includes("wash") || service.includes("clean")) {
    return Droplets;
  }

  if (service.includes("inspection")) {
    return ShieldCheck;
  }

  if (service.includes("bike") || service.includes("scooter")) {
    return Bike;
  }

  return Wrench;
}

export default function ServicesPage() {
  const { language } = useLanguage();
  const isNepali = language === "np";

  const services = serviceCategories.flatMap((category: any) => {
    if (Array.isArray(category.services)) {
      return category.services;
    }

    return [category];
  });

  return (
    <main className="min-h-screen bg-[#F5F8FC] pb-32 text-[#173B63] md:pb-12">
      {/* Page heading */}
      <section className="px-4 pb-5 pt-5 sm:px-6 sm:pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[24px] bg-[#173B63] px-5 py-6 shadow-[0_12px_32px_rgba(23,59,99,0.10)] sm:px-8 sm:py-8">
            <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border-[36px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-24 right-24 h-48 w-48 rounded-full bg-[#2878E5]/15 blur-2xl" />

            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A9CCFF]">
                <Wrench size={15} />
                JP WORKSHOP
              </div>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {isNepali ? "हाम्रा सेवाहरू" : "Our Services"}
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#D5E5F6] sm:text-base sm:leading-7">
                {isNepali
                  ? "तपाईंको बाइक तथा स्कुटरका लागि भरपर्दो सर्भिसिङ र मर्मत।"
                  : "Reliable servicing and repairs for your bike or scooter."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service list */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-[#173B63] sm:text-2xl">
                {isNepali ? "मर्मत तथा सर्भिसिङ" : "Repair & Servicing"}
              </h2>

              <p className="mt-1 text-xs leading-5 text-[#71849A] sm:text-sm">
                {isNepali
                  ? "सेवा र अनुमानित मूल्य हेर्नुहोस्।"
                  : "Find the service you need and check its price."}
              </p>
            </div>

            <div className="mb-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-[#DCE7F4] bg-white px-3 py-2 text-[11px] font-bold text-[#526D89] sm:text-xs">
              <Bike size={15} className="text-[#2878E5]" />
              {isNepali ? "बाइक / स्कुटर" : "Bike / Scooter"}
            </div>
          </div>

          {/* Redesigned service cards */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
            {services.map((service: any, index: number) => {
              const serviceName =
                service.name ?? service.title ?? "Service";

              const servicePrice =
                service.price ?? "Contact for price";

              const Icon = getServiceIcon(serviceName);

              return (
                <article
                  key={`${serviceName}-${index}`}
                  className="group flex min-w-0 flex-col rounded-2xl border border-[#DFE8F3] bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-[#AFCDF1] hover:shadow-[0_8px_24px_rgba(23,59,99,0.07)] sm:p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#2878E5] transition group-hover:bg-[#2878E5] group-hover:text-white sm:h-11 sm:w-11">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <span className="rounded-full bg-[#F0F8F2] px-2 py-1 text-[9px] font-bold text-[#16804A] sm:text-[10px]">
                      {isNepali ? "सेवा" : "SERVICE"}
                    </span>
                  </div>

                  <h3 className="mt-4 min-h-[40px] text-[13px] font-extrabold leading-5 text-[#173B63] sm:min-h-[44px] sm:text-sm">
                    {isNepali
                      ? nepaliServiceNames[serviceName] ?? serviceName
                      : serviceName}
                  </h3>

                  <div className="mt-3 border-t border-[#EAF0F6] pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[#91A2B5]">
                      {isNepali ? "अनुमानित मूल्य" : "PRICE"}
                    </p>

                    <p className="mt-1 break-words text-sm font-extrabold leading-5 text-red-600 sm:text-base">
                      {servicePrice}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pricing note */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F0E1D1] bg-[#FFF9F3] p-4 sm:mt-6 sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCEBD9] text-[#C7752B]">
              <CircleHelp size={20} />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-extrabold text-[#62472E]">
                {isNepali
                  ? "मूल्य सम्बन्धी जानकारी"
                  : "A quick note about pricing"}
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#856F59] sm:text-sm sm:leading-6">
                {isNepali
                  ? "देखाइएका मूल्यहरू अनुमानित हुन्। वास्तविक लागत बाइकको मोडेल, पार्ट्स र आवश्यक मर्मतअनुसार फरक हुन सक्छ। अन्तिम मूल्यका लागि हामीलाई सम्पर्क गर्नुहोस्।"
                  : "Prices are estimates where applicable. The final cost may vary depending on your bike model, parts, and required repairs. Contact us to confirm your price."}
              </p>
            </div>
          </div>

          {/* Desktop booking CTA */}
          <section className="mt-6 hidden items-center justify-between gap-6 rounded-[24px] bg-[#173B63] p-6 text-white sm:p-8 md:flex">
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold tracking-tight lg:text-2xl">
                {isNepali
                  ? "आफ्नो बाइक सर्भिस गर्न तयार हुनुहुन्छ?"
                  : "Ready to service your bike?"}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#D5E5F6]">
                {isNepali
                  ? "आफ्नो आवश्यकता बताउनुहोस् र सर्भिसिङको समय तय गर्नुहोस्।"
                  : "Tell us what your bike needs and arrange a convenient appointment."}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F28A3D] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#E87829] active:scale-[0.98]"
            >
              <CalendarCheck size={18} />
              {isNepali ? "सर्भिसिङ बुक गर्नुहोस्" : "Book Servicing"}
              <ArrowRight size={17} />
            </Link>
          </section>
        </div>
      </section>

      {/* Mobile booking CTA */}
      <div className="fixed inset-x-3 bottom-[76px] z-30 md:hidden">
        <Link
          href="/contact"
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#F28A3D] px-4 py-3 text-sm font-extrabold text-white shadow-[0_8px_24px_rgba(242,138,61,0.28)] transition hover:bg-[#E87829] active:scale-[0.98]"
        >
          <CalendarCheck size={18} />
          {isNepali ? "सर्भिसिङ बुक गर्नुहोस्" : "Book Servicing"}
          <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
