import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FOOTER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Flockie",
  description: "How Flockie collects, uses, and protects your information.",
};

const UPDATED = "18 June 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-[#FBF8F3] font-dm text-ink">
      <Nav variant="bold" />

      <main className="mx-auto max-w-2xl px-6 pb-24 pt-32 sm:pt-36">
        <h1 className="font-black tracking-[-0.02em] [font-size:clamp(2rem,5vw,3rem)]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm font-semibold text-muted">
          Last updated: {UPDATED}
        </p>

        <div className="mt-8 space-y-8 text-ink/80">
          <section>
            <p className="font-medium">
              Flockie (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website{" "}
              <span className="font-bold text-ink">findflockie.com</span>. This
              policy explains what we collect, why, and the choices you have. We
              keep it short and plain on purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">
              Information we collect
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="font-bold text-ink">Waitlist email.</strong>{" "}
                If you join our waitlist, we collect the email address you submit
                so we can contact you about Flockie&rsquo;s launch and early
                access.
              </li>
              <li>
                <strong className="font-bold text-ink">Usage analytics.</strong>{" "}
                With your consent, we use Google Analytics to understand how
                visitors use the site (pages viewed, device type, approximate
                location). This uses cookies.
              </li>
              <li>
                <strong className="font-bold text-ink">
                  Affiliate / partner cookies.
                </strong>{" "}
                We work with Travelpayouts for travel deals. When you interact
                with partner links or widgets, a cookie may be set to attribute
                a booking. We don&rsquo;t receive your payment details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">
              How we use your information
            </h2>
            <ul className="mt-3 space-y-2">
              <li>To operate, maintain, and improve the website.</li>
              <li>To contact waitlist members about launch and early access.</li>
              <li>To understand aggregate traffic and improve the experience.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">Cookies & consent</h2>
            <p className="mt-3">
              Analytics cookies only load <strong>after you accept</strong> them
              in our cookie banner. You can decline, and the site will work
              normally without them. You can change your mind any time by
              clearing your browser&rsquo;s site data for findflockie.com, which
              will show the banner again.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">
              Who we share data with
            </h2>
            <p className="mt-3">
              We use a small set of trusted providers to run Flockie:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="font-bold text-ink">Vercel</strong>: website
                hosting.
              </li>
              <li>
                <strong className="font-bold text-ink">Google</strong>:
                Analytics and email (Google Workspace).
              </li>
              <li>
                <strong className="font-bold text-ink">Travelpayouts</strong>:
                travel deals and affiliate links.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">Your rights</h2>
            <p className="mt-3">
              You can ask us to access or delete the personal information we hold
              about you (for example, removing your email from the waitlist).
              Just email us and we&rsquo;ll take care of it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Email{" "}
              <a
                href={`mailto:${FOOTER.email}`}
                className="font-bold text-flockie-orange underline underline-offset-2"
              >
                {FOOTER.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-ink">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy as Flockie grows. We&rsquo;ll revise the
              &ldquo;last updated&rdquo; date above when we do.
            </p>
          </section>
        </div>
      </main>

      <Footer variant="bold" />
    </div>
  );
}
