import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Travelpayouts "Drive" tag (marker 540997) — injected verbatim as a literal
// inline script so their crawler detects it in the static HTML. (next/script
// rewrites it into a preload + loader queue that the crawler can't recognize.)
const TRAVELPAYOUTS_DRIVE = `(function () {
  var script = document.createElement("script");
  script.async = 1;
  script.src = 'https://emrldtp.com/NTQwOTk3.js?t=540997';
  document.head.appendChild(script);
})();`;

// Style A display accent — Instrument Serif italic
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// Style B — DM Sans across the full weight range
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flockie | Find your flock",
  description:
    "Find compatible, vibe-checked people to do anything with you, from a trip across the world to dinner across town. Matched on a vibe check completed by you and a friend.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Travelpayouts "Drive" tag (marker 540997) */}
        <script dangerouslySetInnerHTML={{ __html: TRAVELPAYOUTS_DRIVE }} />
      </head>
      <body>
        {children}
        {/* GA4 loads only after the visitor accepts cookies */}
        <CookieConsent />
      </body>
    </html>
  );
}
