"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  Wrench,
  Droplets,
  Settings,
  ShieldCheck,
  Zap,
  Disc3,
  Clock,
  CheckCircle2,
  MapPin,
  Award,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";

const workshopPhone = "9779767926586";
const workshopMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=JP+Workshop+Kalikasthan+Dillibazar+Kathmandu";

export default function Home() {
  const { language } = useLanguage();
  const isNepali = language === "np";

  const featuredServices = [
    {
      title: isNepali ? "बाइक तथा स्कुटर सर्भिसिङ" : "General Bike & Scooter Servicing",
      description: isNepali
        ? "नियमित मर्मतसम्भार र आवश्यक जाँच।"
        : "Routine maintenance and essential vehicle checks.",
      icon: Wrench,
      tone: "blue",
    },
    {
      title: isNepali ? "इन्जिन आयल परिवर्तन" : "Engine Oil Change",
      description: isNepali
        ? "इन्जिन आयल फेर्ने र आधारभूत जाँच।"
        : "Engine oil replacement and basic checks.",
      icon: Droplets,
      tone: "orange",
    },
    {
      title: isNepali ? "इन्जिन मर्मत" : "Engine Repair",
      description: isNepali
        ? "इन्जिन जाँच तथा मेकानिकल मर्मत।"
        : "Engine diagnosis and mechanical repairs.",
      icon: Settings,
      tone: "blue",
    },
    {
      title: isNepali ? "ब्रेक मर्मत तथा जाँच" : "Brake Repair & Maintenance",
      description: isNepali
        ? "ब्रेक निरीक्षण, सर्भिसिङ तथा मर्मत।"
        : "Brake inspection, servicing, and repairs.",
      icon: ShieldCheck,
      tone: "orange",
    },
    {
      title: isNepali ? "इलेक्ट्रिकल मर्मत" : "Electrical Repair",
      description: isNepali
        ? "विद्युतीय समस्या पहिचान र मर्मत।"
        : "Diagnosis of electrical faults and related repairs.",
      icon: Zap,
      tone: "blue",
    },
    {
      title: isNepali ? "टायर तथा पन्चर मर्मत" : "Tyre & Puncture Repair",
      description: isNepali
        ? "टायर जाँच तथा पन्चर मर्मत।"
        : "Tyre inspection and puncture repairs.",
      icon: Disc3,
      tone: "orange",
    },
  ];

  const whatsappMessage = isNepali
    ? "नमस्कार JP Workshop, मलाई बाइक सर्भिसिङबारे जानकारी चाहिन्छ।"
    : "Hello JP Workshop, I would like to enquire about bike servicing.";

  const whatsappUrl = `https://wa.me/${workshopPhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const workshopHighlights = [
    {
      icon: Wrench,
      label: isNepali ? "सर्भिसिङ" : "Servicing",
      detail: isNepali ? "नियमित हेरचाह" : "Routine care",
    },
    {
      icon: Settings,
      label: isNepali ? "मर्मत" : "Repairs",
      detail: isNepali ? "समस्या समाधान" : "Problem solving",
    },
    {
      icon: ShieldCheck,
      label: isNepali ? "हेरचाह" : "Maintenance",
      detail: isNepali ? "भरपर्दो सेवा" : "Reliable support",
    },
  ];

  const aboutValues = [
    {
      icon: CheckCircle2,
      title: isNepali ? "गुणस्तरीय काम" : "Quality Workmanship",
      description: isNepali
        ? "सावधानीपूर्वक सवारीको हेरचाह।"
        : "Careful attention to your motorcycle or scooter.",
    },
    {
      icon: ShieldCheck,
      title: isNepali ? "इमानदार सल्लाह" : "Honest Advice",
      description: isNepali
        ? "स्पष्ट जानकारी र भरपर्दो समाधान।"
        : "Straightforward guidance and dependable repairs.",
    },
    {
      icon: Clock,
      title: isNepali ? "अनुभवी सेवा" : "Experienced Care",
      description: isNepali
        ? "दुई दशकभन्दा बढीको अनुभव।"
        : "More than two decades of repair experience.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F3F7FC] px-3 pb-10 pt-4 text-[#173B63] sm:px-5 sm:pt-6 lg:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* HERO — dark, image-led section */}
        <section className="relative isolate min-h-[390px] overflow-hidden rounded-[26px] border border-[#23496F] bg-[#102F51] shadow-[0_14px_34px_rgba(16,47,81,0.20)] sm:min-h-[420px] lg:min-h-[470px]">
          <Image
            src="/workshop-banner.jpg"
            alt={
              isNepali
                ? "JP Workshop बाइक तथा स्कुटर मर्मत केन्द्र"
                : "JP Workshop motorcycle and scooter garage"
            }
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1279px) 94vw, 1200px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071D37]/95 via-[#102F51]/65 to-[#102F51]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D37]/45 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#102F51]/65 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:text-xs">
              <Wrench size={14} />
              {isNepali ? "JP Workshop" : "Motorcycle & Scooter Care"}
            </div>

            <h1 className="max-w-2xl text-[30px] font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {isNepali
                ? "तपाईंको बाइक, हाम्रो जिम्मेवारी।"
                : "Your Bike. Our Responsibility."}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50 sm:text-base sm:leading-7">
              {isNepali
                ? "भरपर्दो सर्भिसिङ, इमानदार मर्मत र उचित हेरचाह।"
                : "Reliable servicing, honest repairs, and professional care for your ride."}
            </p>

            <div className="mt-5 flex flex-col gap-3 min-[380px]:flex-row">
              <Link
                href="/contact#booking"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F28A3D] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition hover:bg-[#E8782B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <CalendarCheck size={17} />
                {isNepali ? "सर्भिसिङ बुक गर्नुहोस्" : "Book Servicing"}
                <ArrowRight size={16} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/45 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* LOCAL WORKSHOP — distinct light-blue panel */}
        <section className="relative overflow-hidden rounded-[26px] border border-[#C6DDF7] bg-gradient-to-br from-[#E2F0FF] via-[#EDF6FF] to-[#F8FBFF] p-5 shadow-[0_8px_24px_rgba(40,120,229,0.09)] sm:p-8 lg:p-9">
          <div className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 rounded-full bg-white/70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 left-1/3 h-32 w-32 rounded-full bg-[#CDE5FF]/60 blur-2xl" />

          <div className="relative md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div className="md:col-start-1">
              <div className="flex items-center gap-2">
                <span className="h-1 w-7 rounded-full bg-[#2878E5]" />
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#2878E5] sm:text-xs">
                  {isNepali ? "हामीलाई चिन्नुहोस्" : "WELCOME TO JP WORKSHOP"}
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-black leading-tight text-[#173B63] sm:text-3xl">
                {isNepali ? "तपाईंको स्थानीय वर्कशप" : "Your Local Workshop"}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#526D89] sm:text-base sm:leading-7">
                {isNepali
                  ? "तपाईंको मोटरसाइकल वा स्कुटरका लागि भरपर्दो सर्भिसिङ, मर्मत र नियमित हेरचाह।"
                  : "Your trusted neighbourhood workshop for motorcycle and scooter servicing, repairs, and regular maintenance."}
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#2878E5] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1D65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173B63] focus-visible:ring-offset-2"
              >
                {isNepali ? "हाम्रा सेवाहरू" : "Explore Our Services"}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2.5 md:col-start-2 md:row-start-1 md:mt-0 md:gap-3">
              {workshopHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex min-w-0 flex-col items-center rounded-2xl border border-white bg-white/85 px-2 py-4 text-center shadow-[0_4px_12px_rgba(23,59,99,0.04)] sm:py-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#2878E5] sm:h-12 sm:w-12">
                      <Icon size={22} />
                    </div>
                    <span className="mt-2 text-[11px] font-extrabold leading-4 text-[#173B63] sm:text-sm">
                      {item.label}
                    </span>
                    <span className="mt-1 text-[9px] leading-4 text-[#647B93] sm:text-[11px]">
                      {item.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED SERVICES — separate white section with individual cards */}
        <section
          id="services-preview"
          className="scroll-mt-24 rounded-[26px] border border-[#DCE6F1] bg-white p-5 shadow-[0_8px_24px_rgba(23,59,99,0.055)] sm:p-7 lg:p-9"
        >
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#2878E5] sm:text-xs">
                {isNepali ? "हामीले गर्ने काम" : "WHAT WE DO"}
              </p>
              <h2 className="mt-1.5 text-2xl font-black text-[#173B63] sm:text-3xl">
                {isNepali ? "हाम्रा सेवाहरू" : "Our Services"}
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-2 text-xs font-extrabold text-[#2878E5] transition hover:bg-[#EAF3FF] hover:text-[#173B63] sm:text-sm"
            >
              {isNepali ? "सबै हेर्नुहोस्" : "View all"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#647B93]">
            {isNepali
              ? "नियमित मर्मतसम्भारदेखि मेकानिकल मर्मतसम्म, तपाईंको बाइक वा स्कुटरलाई राम्रो अवस्थामा राख्न हामी सहयोग गर्छौँ।"
              : "From routine maintenance to mechanical repairs, we help keep your bike or scooter running smoothly."}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              const isOrange = service.tone === "orange";

              return (
                <article
                  key={service.title}
                  className={`group flex min-h-[132px] items-start gap-3.5 rounded-2xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${
                    isOrange
                      ? "border-[#F4D8C3] bg-[#FFFAF6] hover:border-[#EFB98F]"
                      : "border-[#D6E7FA] bg-[#F7FBFF] hover:border-[#AFCFF4]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isOrange
                        ? "bg-[#FFE9D8] text-[#D96920]"
                        : "bg-[#E2EFFF] text-[#2878E5]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-sm font-extrabold leading-5 text-[#173B63] sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-[#647B93] sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <Link
            href="/services"
            className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#BCD7F6] bg-[#EDF5FF] px-4 py-3 text-sm font-extrabold text-[#236BC1] transition hover:bg-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878E5]"
          >
            {isNepali ? "सबै सेवाहरू हेर्नुहोस्" : "Explore All Services"}
            <ArrowRight size={17} />
          </Link>
        </section>

        {/* ABOUT US — warm cream/orange panel, clearly different from services */}
        <section
          id="about"
          className="relative scroll-mt-24 overflow-hidden rounded-[26px] border border-[#F2D3BB] bg-gradient-to-br from-[#FFF0E3] via-[#FFF8F2] to-[#FFF4E9] p-5 shadow-[0_8px_24px_rgba(217,105,32,0.075)] sm:p-8 lg:p-9"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-36 w-36 rounded-full bg-[#FFE0C7]/50 blur-2xl" />

          <div className="relative md:grid md:grid-cols-[1fr_0.85fr] md:items-start md:gap-10 lg:gap-12">
            <div className="md:col-start-1">
              <div className="flex items-center gap-2">
                <Award size={17} className="text-[#D96920]" />
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#C45F20] sm:text-xs">
                  {isNepali ? "हामीलाई चिन्नुहोस्" : "EXPERIENCE YOU CAN TRUST"}
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-black text-[#173B63] sm:text-3xl">
                {isNepali ? "हाम्रो बारेमा" : "About Us"}
              </h2>

              <div className="mt-5 flex items-start gap-4 rounded-2xl border border-[#F3D9C5] bg-white/75 p-4">
                <div className="flex h-[72px] w-[78px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#F28A3D] text-white shadow-sm">
                  <span className="text-[27px] font-black leading-none">20+</span>
                  <span className="mt-1 text-[9px] font-black uppercase tracking-wider">
                    {isNepali ? "वर्ष" : "YEARS"}
                  </span>
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base font-black leading-6 text-[#173B63] sm:text-lg">
                    {isNepali
                      ? "दुई पाङ्ग्रे सवारीको हेरचाहमा २० वर्षभन्दा बढी अनुभव"
                      : "Over 20 Years of Experience in Two-Wheeler Care"}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#806A5B] sm:text-sm">
                    {isNepali
                      ? "मोटरसाइकल तथा स्कुटर मर्मतमा अनुभवी सेवा।"
                      : "Experienced motorcycle and scooter repair, led by Janak Rimal."}
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-[#EFCFB7]" />

              <p className="text-sm leading-7 text-[#705D50]">
                {isNepali ? (
                  <>
                    JP Workshop का सञ्चालक{" "}
                    <strong className="text-[#173B63]">जनक रिमाल</strong>{" "}
                    हुनुहुन्छ। उहाँलाई मोटरसाइकल तथा स्कुटर मर्मत र
                    मर्मतसम्भारमा २० वर्षभन्दा बढीको अनुभव छ।
                  </>
                ) : (
                  <>
                    JP Workshop is led by{" "}
                    <strong className="text-[#173B63">Janak Rimal</strong>, an
                    experienced two-wheeler mechanic with more than 20 years of
                    experience in motorcycle and scooter repair and maintenance.
                  </>
                )}
              </p>

              <p className="mt-3 text-sm leading-7 text-[#705D50]">
                {isNepali
                  ? "हामी गुणस्तरीय काम, इमानदार सल्लाह र भरपर्दो समाधानमा ध्यान दिँदै तपाईंको सवारीलाई सुरक्षित र राम्रो अवस्थामा राख्न सहयोग गर्छौँ।"
                  : "We focus on quality workmanship, honest advice, and dependable solutions to help keep your ride running smoothly and safely."}
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#F28A3D] px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#E8782B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173B63] focus-visible:ring-offset-2"
              >
                {isNepali ? "हामीलाई सम्पर्क गर्नुहोस्" : "Get in Touch"}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-[#F1D9C6] bg-white/75 p-4 sm:p-5 md:col-start-2 md:row-start-1 md:mt-0">
              {aboutValues.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-[#F6E7DA] bg-[#FFFCF9] p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFE9D8] text-[#D96920]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#173B63]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#806A5B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-xl border border-[#F2D3BB] bg-[#FFF0E3] p-3.5">
                <p className="text-sm font-bold leading-6 text-[#173B63]">
                  {isNepali
                    ? "तपाईंको विश्वास हाम्रो लागि महत्त्वपूर्ण छ।"
                    : "Your trust matters as much as your vehicle's performance."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA — dark panel with high-contrast actions */}
        <section className="overflow-hidden rounded-[26px] border border-[#23496F] bg-gradient-to-br from-[#173B63] to-[#0B2948] p-5 shadow-[0_12px_28px_rgba(16,47,81,0.17)] sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-9">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#A9CCFF] sm:text-xs">
              {isNepali ? "हामी सहयोग गर्न तयार छौँ" : "WE'RE HERE TO HELP"}
            </p>
            <h2 className="mt-2 text-xl font-black text-white sm:text-2xl lg:text-3xl">
              {isNepali ? "बाइकमा समस्या छ?" : "Need Help With Your Bike?"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
              {isNepali
                ? "सर्भिसिङ, मर्मतसम्भार तथा मर्मतसम्बन्धी जानकारीका लागि JP Workshop मा सम्पर्क गर्नुहोस्।"
                : "Contact JP Workshop for servicing, maintenance, and repair enquiries."}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F28A3D] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#E8782B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CalendarCheck size={18} />
              {isNepali ? "वर्कशपमा सम्पर्क गर्नुहोस्" : "Contact Workshop"}
              <ArrowRight size={16} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </section>

        {/* LOCATION — separate, clickable information panel */}
        <a
          href={workshopMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-[#C9DDF3] bg-white px-4 py-4 shadow-[0_4px_14px_rgba(23,59,99,0.045)] transition hover:border-[#91BCEB] hover:bg-[#F8FBFF] sm:px-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#2878E5]">
            <MapPin size={21} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2878E5]">
              {isNepali ? "हाम्रो स्थान" : "FIND OUR WORKSHOP"}
            </p>
            <p className="mt-1 text-sm font-extrabold text-[#173B63] sm:text-base">
              {isNepali
                ? "कालिकास्थान, डिल्लीबजार, काठमाडौं"
                : "Kalikasthan, Dillibazar, Kathmandu"}
            </p>
          </div>
          <ExternalLink
            size={17}
            className="shrink-0 text-[#647B93] transition group-hover:text-[#2878E5]"
          />
        </a>
      </div>
    </main>
  );
}
