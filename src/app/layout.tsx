import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Flockie — Find your flock",
  description:
    "The travel buddy matching platform for solo travelers and digital nomads. Built on a vibe check filled out by you and your closest friend.",
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
      {/* Travelpayouts "Drive" verification + tools tag (marker 540997) */}
      <Script
        id="travelpayouts-drive"
        src="https://emrldtp.com/NTQwOTk3.js?t=540997"
        strategy="beforeInteractive"
        async
      />
      <body>{children}</body>
    </html>
  );
}
