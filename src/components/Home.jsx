import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Professional HeroSection for HealthMate (matches PDF style)
 * - Bilingual toggle (English / Roman Urdu)
 * - Primary CTAs: Upload Report, Try Demo
 * - Quick stats + short features
 * - Inline SVG illustration (no external dependency)
 */

export default function Home() {
  const [lang, setLang] = useState("en");

  const en = {
    title: "Your Smart Health Companion",
    subtitle:
      "Upload and store medical reports, get AI-powered bilingual (English + Roman Urdu) explanations, track vitals, and see your full medical timeline.",
    ctaPrimary: "Upload a Report",
    ctaSecondary: "Get Started",
    features: [
      "Instant AI summaries (no OCR needed)",
      "Bilingual explanations (English + Roman Urdu)",
      "Secure storage with encrypted files",
    ],
  };

  const ur = {
    title: "Aapka Sehat Ka Smart Dost",
    subtitle:
      "Apni medical reports upload karein, AI se samajhein (English + Roman Urdu), vitals track karein aur apni medical timeline dekhein.",
    ctaPrimary: "Report Upload Karein",
    ctaSecondary: "Demo Dekhein",
    features: [
      "Turant AI summaries (OCR ki zaroorat nahi)",
      "Bilingual explanation (English + Roman Urdu)",
      "Mehfooz storage — encrypted files",
    ],
  };

  const t = lang === "en" ? en : ur;

  return (
    <section className="bg-gradient-to-b from-health-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* language + badges */}
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 bg-white/60 border border-gray-100 rounded-full py-1 px-3 text-sm">
                <span className="text-xs px-2 py-0.5 rounded-full bg-health-100 text-health-700 font-semibold">
                  Beta
                </span>
                <span className="text-sm text-gray-600">AI-powered health summaries</span>
              </div>

              <div className="ml-auto flex items-center gap-2 bg-white border border-gray-100 rounded-full px-2 py-1 text-sm">
                <button
                  aria-pressed={lang === "en"}
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full transition ${
                    lang === "en" ? "bg-health-600 text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  English
                </button>
                <button
                  aria-pressed={lang === "ur"}
                  onClick={() => setLang("ur")}
                  className={`px-3 py-1 rounded-full transition ${
                    lang === "ur" ? "bg-health-600 text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Roman Urdu
                </button>
              </div>
            </div>

            {/* Heading + subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="block">{t.title.split(" ")[0]} </span>
              <span className="block text-health-600">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="mt-4 text-gray-700 max-w-2xl text-lg">{t.subtitle}</p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
            

              <Link
                to="/"
                className="inline-flex items-center gap-2 border bg-green-500 text-white border-health-200 text-health-700 px-4 py-3 rounded-lg hover:bg-health-50 transition"
                aria-label={t.ctaSecondary}
              >
                {t.ctaSecondary}
                <span className="text-sm text-gray-400">→</span>
              </Link>

            
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-md">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-health-600">1K+</div>
                <div className="text-xs text-gray-500 mt-1">Reports analyzed</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-health-600">98%</div>
                <div className="text-xs text-gray-500 mt-1">User satisfaction</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-health-600">24/7</div>
                <div className="text-xs text-gray-500 mt-1">Secure access</div>
              </div>
            </div>

            {/* Feature bullets */}
            <ul className="mt-8 space-y-3 max-w-xl">
              {t.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-health-100 text-health-700 flex items-center justify-center font-semibold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{f}</div>
                    <div className="text-xs text-gray-500">Example: {i === 0 ? "CBC, Lipid Panel, Sugar test" : i === 1 ? "English + Roman Urdu captions" : "AES-256 encrypted storage"}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transform hover:-translate-y-1 transition">
              {/* small header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-gray-500">Demo Report</div>
                  <div className="font-semibold">CBC - Complete Blood Count</div>
                </div>
                <div className="text-sm text-gray-400">Oct 10, 2025</div>
              </div>

              {/* illustration (inline SVG) */}
              <div className="flex items-center gap-4">
                <svg className="w-28 h-28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="6" y="10" width="108" height="100" rx="16" fill="url(#g1)" />
                  <path d="M26 40h68" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                  <circle cx="40" cy="70" r="8" fill="white" />
                  <circle cx="60" cy="70" r="8" fill="white" />
                  <circle cx="80" cy="70" r="8" fill="white" />
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#DDFAEA" />
                      <stop offset="1" stopColor="#C1F0D9" />
                    </linearGradient>
                  </defs>
                </svg>

                <div>
                  <div className="text-sm text-gray-600 mb-1">AI Summary</div>
                  <p className="text-gray-800 text-sm">
                    WBC slightly elevated. Hb within normal range. Suggested: increase water, repeat test in 2 weeks.
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <button className="px-3 py-1 bg-health-50 rounded text-sm text-health-700">View full</button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">Download</button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                <strong>Note:</strong> This is a demo summary. Always consult your doctor for clinical advice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
