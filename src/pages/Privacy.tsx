import { PageIntro } from '@/components/PageIntro'
import { PageMeta } from '@/components/PageMeta'
import { site } from '@/lib/site'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <PageMeta
        description="How L&S Helping Hands & Cleaning Services handles the information you share through this website."
        title="Privacy Note"
      />

      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy' }]}
        eyebrow="Legal"
        lead="A short, plain-language note about the information you share with us and what happens to it."
        size="compact"
        title={
          <>
            Privacy
            <span className="italic text-pine"> note.</span>
          </>
        }
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="prose-legal max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-forest/30">
              Last updated: November 2026
            </p>

            <h2>Who we are</h2>
            <p>
              L and S Helping Hands &amp; Cleaning Services is a cleaning and
              placement service based in {site.location.suburb},{' '}
              {site.location.postalCode}, {site.location.country}. You can reach
              us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
              <a href={site.phones[0].href}>{site.phones[0].label}</a>.
            </p>

            <h2>What this website collects</h2>
            <p>
              This website has no accounts, no tracking pixels and no analytics.
              It does not store your details in a database. The quote and
              application forms are prepared in your browser and only leave your
              device when you choose to send them through WhatsApp or your email
              app.
            </p>
            <p>When you contact us, you may share:</p>
            <ul>
              <li>Your name and contact details</li>
              <li>The area or suburb you are in</li>
              <li>Details of the space, service or role you are enquiring about</li>
              <li>Any work experience, availability or references you include</li>
            </ul>

            <h2>How we use it</h2>
            <p>
              We use your information only to respond to your enquiry, prepare a
              quote, discuss a placement, or keep in touch about a service you
              have asked about. We do not sell your information, and we do not add
              you to a marketing list without your permission.
            </p>

            <h2>Where your information goes</h2>
            <p>
              Messages sent through the forms are delivered via WhatsApp (operated
              by Meta) or through your email provider. Those services process the
              message under their own privacy terms. If you contact us by phone,
              WhatsApp or email directly, the same applies.
            </p>
            <p>
              We keep enquiry and placement information only for as long as it is
              useful for that purpose, or as long as we are required to for legal
              or accounting reasons.
            </p>

            <h2>Third-party services on this site</h2>
            <p>
              The contact page includes an embedded Google Map. Loading that map
              may allow Google to receive your IP address and set cookies under
              its own policies. Fonts are loaded from Google Fonts, which may also
              receive your IP address when the page loads.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us what information we hold about you, ask us to correct
              it, or ask us to delete it by emailing{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>. If you have sent
              us a message on WhatsApp, you can also manage or delete that chat in
              WhatsApp.
            </p>

            <h2>Questions</h2>
            <p>
              If anything here is unclear, please get in touch. We would rather
              answer a question than have you guess. You can also read more about{' '}
              <Link to="/services">our services</Link> or{' '}
              <Link to="/contact">contact us directly</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
