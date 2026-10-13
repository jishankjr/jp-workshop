
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CalendarDays,
  ArrowUpRight,
  Wrench,
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import { useLanguage } from "../../components/LanguageProvider";

const workshopPhone = "9779767926586";
const displayedPhone = "9767926586";
const workshopEmail = "jpworkshop.contact@gmail.com";
const workshopAddress = "Kalikasthan, Dillibazar, Kathmandu";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=JP+Workshop+Kalikasthan+Dillibazar+Kathmandu";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Kalikasthan%2C%20Dillibazar%2C%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed";

const translations = {
  en: {
    eyebrow: "JP WORKSHOP",
    title: "Need servicing or repair?",
    location: "Find Our Workshop",
    mapHint: "Easy to find. Ready to help.",
    address: "Our Location",
    directions: "Get Directions",
    contact: "Contact Information",
    contactHint: "Choose the easiest way to reach us.",
    call: "Call Us",
    whatsapp: "WhatsApp",
    email: "Email Us",
    hours: "Working Hours",
    hoursHint: "Plan your visit",
    weekdays: "Sunday – Friday",
    weekdayTime: "8:30 AM – 8:00 PM",
    saturday: "Saturday",
    saturdayTime: "8:30 AM – Evening",
    bookingEyebrow: "SERVICE APPOINTMENT",
    bookingTitle: "Schedule your visit.",
    bookingDescription:
      "Tell us about your ride and preferred time. We'll get in touch to follow up on your request.",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    phone: "Phone Number",
    phonePlaceholder: "98XXXXXXXX",
    vehicle: "Vehicle Type",
    selectVehicle: "Choose your vehicle",
    bike: "Motorcycle",
    scooter: "Scooter",
    model: "Brand & Model",
    modelPlaceholder: "e.g. Honda Hornet 160R",
    date: "Preferred Date",
    time: "Preferred Time",
    selectTime: "Choose a time",
    morning: "Morning · 8:30 AM – 12 PM",
    afternoon: "Afternoon · 12 PM – 4 PM",
    evening: "Evening · 4 PM – 8 PM",
    saturdayEvening: "Saturday evening availability may vary.",
    submit: "Request Servicing",
    submitting: "Sending Request...",
    privacy: "Your details are used to respond to your service request.",
    success:
      "Your request has been sent successfully! We'll contact you soon.",
    error:
      "We couldn't send your request. Please call or WhatsApp us instead.",
    required: "Please complete all required fields.",
    secure: "Your service request, made simple.",
  },
  np: {
    eyebrow: "JP WORKSHOP",
    title: "सर्भिसिङ वा मर्मत चाहिएको छ?",
    location: "हाम्रो वर्कशप",
    mapHint: "सजिलै आउनुहोस्, हामी सहयोग गर्न तयार छौँ।",
    address: "हाम्रो ठेगाना",
    directions: "बाटो हेर्नुहोस्",
    contact: "सम्पर्क विवरण",
    contactHint: "आफूलाई सजिलो हुने माध्यम छान्नुहोस्।",
    call: "फोन गर्नुहोस्",
    whatsapp: "व्हाट्सएप",
    email: "इमेल गर्नुहोस्",
    hours: "खुल्ने समय",
    hoursHint: "आफ्नो भ्रमणको समय मिलाउनुहोस्",
    weekdays: "आइतबार – शुक्रबार",
    weekdayTime: "बिहान ८:३० – बेलुका ८:००",
    saturday: "शनिबार",
    saturdayTime: "बिहान ८:३० देखि बेलुकासम्म",
    bookingEyebrow: "सर्भिस अपोइन्टमेन्ट",
    bookingTitle: "आफ्नो समय तय गर्नुहोस्।",
    bookingDescription:
      "आफ्नो सवारी र उपयुक्त समयबारे विवरण दिनुहोस्। तपाईंको अनुरोधबारे हामी सम्पर्क गर्नेछौँ।",
    name: "पूरा नाम",
    namePlaceholder: "आफ्नो पूरा नाम लेख्नुहोस्",
    phone: "फोन नम्बर",
    phonePlaceholder: "98XXXXXXXX",
    vehicle: "सवारीको प्रकार",
    selectVehicle: "सवारी छान्नुहोस्",
    bike: "मोटरसाइकल",
    scooter: "स्कुटर",
    model: "ब्रान्ड र मोडेल",
    modelPlaceholder: "जस्तै: Honda Hornet 160R",
    date: "उपयुक्त मिति",
    time: "उपयुक्त समय",
    selectTime: "समय छान्नुहोस्",
    morning: "बिहान · ८:३० – १२ बजे",
    afternoon: "दिउँसो · १२ – ४ बजे",
    evening: "बेलुका · ४ – ८ बजे",
    saturdayEvening: "शनिबार बेलुकाको उपलब्धता फरक हुन सक्छ।",
    submit: "सर्भिसिङ अनुरोध पठाउनुहोस्",
    submitting: "अनुरोध पठाउँदै...",
    privacy: "तपाईंको विवरण सर्भिसिङ अनुरोधको जवाफ दिन प्रयोग गरिनेछ।",
    success:
      "तपाईंको अनुरोध सफलतापूर्वक पठाइयो! हामी छिट्टै सम्पर्क गर्नेछौँ।",
    error:
      "अनुरोध पठाउन सकिएन। कृपया फोन वा व्हाट्सएप गर्नुहोस्।",
    required: "कृपया सबै आवश्यक विवरण भर्नुहोस्।",
    secure: "सर्भिसिङ अनुरोध अब अझ सजिलो।",
  },
};

const fieldClass =
  "mt-2.5 w-full min-w-0 rounded-xl border border-[#DCE5F0] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#173B63] outline-none transition placeholder:text-[#96A5B8] hover:border-[#B8CBE2] focus:border-[#2878E5] focus:bg-white focus:ring-4 focus:ring-[#2878E5]/10";

const labelClass = "block text-sm font-semibold text-[#203B5A]";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language === "np" ? "np" : "en"];

  const [today, setToday] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    setToday(`${year}-${month}-${day}`);
  }, []);

  const whatsappMessage =
    language === "np"
      ? "नमस्ते JP Workshop, मलाई बाइक/स्कुटर सर्भिसिङबारे जानकारी चाहियो।"
      : "Hello JP Workshop, I would like to enquire about bike/scooter servicing.";

  const whatsappUrl = `https://wa.me/${workshopPhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleBookingSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const requiredFields = [
      "Name",
      "Phone Number",
      "Vehicle Type",
      "Bike / Scooter Model",
      "Preferred Date",
      "Preferred Time",
    ];

    const missingField = requiredFields.some((field) => {
      const value = formData.get(field);
      return typeof value !== "string" || !value.trim();
    });

    if (missingField) {
      setStatus({ type: "error", message: t.required });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${workshopEmail}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            Object.fromEntries(formData.entries())
          ),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("Submission failed");
      }

      setStatus({ type: "success", message: t.success });
      form.reset();
    } catch {
      setStatus({ type: "error", message: t.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F6FA] text-[#173B63]">
      {/* Compact hero */}
      
      {/* Compact hero with contact actions */}
      <section className="px-4 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-[#173B63] p-5 shadow-[0_8px_24px_rgba(23,59,99,0.13)] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A9CCFF]">
              JP WORKSHOP
            </p>

            <h1 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              {t.title}
            </h1>

            {/* Call and WhatsApp: two columns */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={`tel:+${workshopPhone}`}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2878E5] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#3988F4] active:scale-[0.98]"
              >
                <Phone size={18} />
                <span>{t.call}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-3 text-sm font-bold text-[#103B24] transition hover:bg-[#49E17F] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                <span>{t.whatsapp}</span>
              </a>
            </div>

            {/* Email below both buttons */}
            {/* Centered email */}
            <a
              href={`mailto:${workshopEmail}`}
              className="mt-3 flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/15 bg-white/10 px-3 py-3 transition hover:bg-white/15"
            >
              <Mail
                size={20}
                strokeWidth={2.5}
                className="shrink-0 text-[#A9CCFF]"
              />

              <span className="whitespace-nowrap text-[clamp(11px,3.4vw,14px)] font-extrabold tracking-[-0.035em] text-white">
                {workshopEmail}
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          {/* Map card */}
          <div className="space-y-5">
            <section className="overflow-hidden rounded-[24px] border border-[#D5E5FA] bg-[#E5EFFF] shadow-[0_6px_22px_rgba(40,120,229,0.06)]">
              <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-5 sm:px-6">
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-[#173B63]">
                    {t.location}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#607994]">
                    {t.mapHint}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2878E5] text-white shadow-md shadow-[#2878E5]/20">
                  <MapPin size={21} />
                </div>
              </div>

              <div className="mx-3 overflow-hidden rounded-2xl border border-white bg-white p-1.5 sm:mx-4">
                <div className="h-52 overflow-hidden rounded-xl bg-[#DDE9F5] sm:h-56">
                  <iframe
                    title="JP Workshop location map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="m-3 flex items-center gap-3 rounded-2xl border border-white/90 bg-white/90 p-3.5 sm:m-4 sm:mt-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#2878E5]">
                  <Navigation size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#7890A9]">
                    {t.address}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#173B63]">
                    {workshopAddress}
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.directions}
                  title={t.directions}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2878E5] text-white transition hover:bg-[#1D64C4]"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </section>

            {/* Working hours card */}
            <section className="rounded-[24px] border border-[#F1DFC4] bg-[#FFF2DF] p-5 shadow-[0_6px_22px_rgba(201,123,36,0.05)] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F28A3D] text-white shadow-md shadow-[#F28A3D]/20">
                  <Clock size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-[#633F1D]">
                    {t.hours}
                  </h2>
                  <p className="mt-1 text-xs text-[#8B704F]">
                    {t.hoursHint}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/90 bg-white/85 p-4">
                <div className="flex items-start justify-between gap-3 py-1">
                  <p className="text-sm font-bold text-[#533D27]">
                    {t.weekdays}
                  </p>
                  <div className="rounded-lg bg-[#FFF0DD] px-2.5 py-2 text-right text-xs font-extrabold leading-5 text-[#A65D1D]">
                    {t.weekdayTime}
                  </div>
                </div>

                <div className="my-3 h-px bg-[#F0E2D0]" />

                <div className="flex items-start justify-between gap-3 py-1">
                  <p className="text-sm font-bold text-[#533D27]">
                    {t.saturday}
                  </p>
                  <div className="rounded-lg bg-[#FFF0DD] px-2.5 py-2 text-right text-xs font-extrabold leading-5 text-[#A65D1D]">
                    {t.saturdayTime}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Booking form card */}
          <section
            id="booking"
            className="relative overflow-hidden rounded-[26px] border border-[#D5E4F5] bg-white shadow-[0_12px_36px_rgba(23,59,99,0.08)] lg:sticky lg:top-5"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#2878E5] via-[#5A9CF0] to-[#F28A3D]" />

            <div className="p-5 sm:p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#2878E5]">
                  <CalendarDays size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#2878E5]">
                    {t.bookingEyebrow}
                  </div>
                  <h2 className="mt-1.5 text-2xl font-extrabold leading-tight tracking-tight text-[#173B63] sm:text-[28px]">
                    {t.bookingTitle}
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#647B93]">
                {t.bookingDescription}
              </p>

              <div className="mb-6 mt-5 h-px bg-[#E8EEF5]" />

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="_subject"
                  value="New JP Workshop Servicing Request"
                />
                <input
                  type="hidden"
                  name="_captcha"
                  value="true"
                />
                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <div>
                  <label htmlFor="booking-name" className={labelClass}>
                    {t.name}
                  </label>
                  <input
                    id="booking-name"
                    name="Name"
                    type="text"
                    autoComplete="name"
                    placeholder={t.namePlaceholder}
                    required
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className={labelClass}>
                    {t.phone}
                  </label>
                  <input
                    id="booking-phone"
                    name="Phone Number"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t.phonePlaceholder}
                    required
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-vehicle" className={labelClass}>
                    {t.vehicle}
                  </label>
                  <select
                    id="booking-vehicle"
                    name="Vehicle Type"
                    defaultValue=""
                    required
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      {t.selectVehicle}
                    </option>
                    <option value="Motorcycle">{t.bike}</option>
                    <option value="Scooter">{t.scooter}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-model" className={labelClass}>
                    {t.model}
                  </label>
                  <input
                    id="booking-model"
                    name="Bike / Scooter Model"
                    type="text"
                    placeholder={t.modelPlaceholder}
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="booking-date" className={labelClass}>
                      {t.date}
                    </label>
                    <input
                      id="booking-date"
                      name="Preferred Date"
                      type="date"
                      min={today || undefined}
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-time" className={labelClass}>
                      {t.time}
                    </label>
                    <select
                      id="booking-time"
                      name="Preferred Time"
                      defaultValue=""
                      required
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        {t.selectTime}
                      </option>
                      <option value="Morning">{t.morning}</option>
                      <option value="Afternoon">{t.afternoon}</option>
                      <option value="Evening">{t.evening}</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-xl border border-[#F4E4D1] bg-[#FFF9F1] px-3.5 py-3">
                  <p className="text-xs leading-5 text-[#876C4E]">
                    {t.saturdayEvening}
                  </p>
                </div>

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0"
                      />
                    ) : (
                      <AlertCircle
                        size={19}
                        className="mt-0.5 shrink-0"
                      />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#F28A3D] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#F28A3D]/20 transition hover:-translate-y-0.5 hover:bg-[#DF762A] hover:shadow-xl hover:shadow-[#F28A3D]/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      {t.submit}
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>

                <div className="flex items-start justify-center gap-2 px-1 text-center">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-[#6F91B6]"
                  />
                  <p className="text-xs leading-5 text-[#71849A]">
                    {t.privacy}
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
