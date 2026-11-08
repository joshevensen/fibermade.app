<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Fibermade',
  description: 'What Fibermade collects, why, and what we never do with it.',
})
</script>

<template>
  <main>
    <LegalDocument title="Privacy Policy" updated="November 8, 2026">
      <section>
        <h2>The short version</h2>
        <p>
          We collect only what we need to run and improve Fibermade. We don't sell your data to anyone —
          ever. We don't track you across the web. We use cookies only to keep you logged in.
        </p>
      </section>

      <section>
        <h2>Who we are</h2>
        <p>
          Fibermade is operated by Fibermade LLC, a Texas limited liability company. When we
          say "we", "us", or "our" in this policy, we mean Fibermade LLC.
        </p>
      </section>

      <section>
        <h2>What we collect and why</h2>
        <p>
          Here's a plain list of the information we collect, along with why we need it:
        </p>
        <h3>When you sign up</h3>
        <ul>
          <li>
            <strong>Name and email</strong> — so we can create your account and contact you
            about your service.
          </li>
          <li>
            <strong>Business name</strong> — to label your account and show your business to
            wholesale customers.
          </li>
          <li>
            <strong>Password</strong> — stored as a secure, one-way hash. We never see or
            store your actual password.
          </li>
        </ul>
        <h3>When you use the app</h3>
        <ul>
          <li>
            <strong>Business details</strong> (phone, address) — optional fields you can fill
            in for your account profile.
          </li>
          <li>
            <strong>Product and inventory data</strong> (colorways, bases, collections,
            quantities) — the core of what Fibermade manages for you.
          </li>
          <li>
            <strong>Order and customer data</strong> (wholesale orders, store contacts,
            customer names and addresses) — so you can manage your wholesale relationships.
          </li>
          <li>
            <strong>Square connection data</strong> (merchant ID, API tokens) — to process
            retail checkout, subscriptions, gift cards, and in-person sales through your
            Square account.
          </li>
          <li>
            <strong>Storefront and website settings</strong> (domain, logo, colors, policies)
            — to publish and run your public shop.
          </li>
        </ul>
        <h3>When you import your website</h3>
        <p>
          <strong>Website import during onboarding.</strong> When you give us your website
          address during creator onboarding, we read the public pages of that site to pre-fill
          your Fibermade store. We keep a record of each import run linked to your account. It
          includes the content we extracted (for example your business name, contact details,
          about text, shows, stockists, colors and images), technical details of the run, and
          the changes you made when you accepted, edited or rejected each suggestion. We use
          this record to operate and improve the import. It is kept until your account is
          deleted, at which point it is deleted with it.
        </p>
        <p>
          <strong>Anonymized trend data.</strong> From each import run we also derive a
          separate, anonymized trend record. It contains only structured categories and
          numbers: the hosting platform, which kinds of pages were found, how often suggestions
          were accepted, edited or rejected, broad color and mood categories, whether AI
          processing succeeded, and timings rounded to whole seconds, dated only to the month.
          It contains no account or creator identifier, website address, business name, email
          address, phone number, postal address or any free text from your site. Because it
          contains no identifiers, this trend data is kept after your account is deleted and is
          used only in aggregate to understand and improve how website imports work.
        </p>
        <h3>Payment information</h3>
        <p>
          We use <strong>Stripe</strong> to process payments. Your credit card number goes
          directly to Stripe — we never see or store it. We only keep a record of your
          payment method type (e.g., Visa) and the last four digits, so you can identify your
          card in settings.
        </p>
      </section>

      <section>
        <h2>What we don't do</h2>
        <ul>
          <li>
            <strong>We don't sell your data.</strong> Not to advertisers, not to data brokers,
            not to anyone.
          </li>
          <li><strong>We don't run ads.</strong> Our only revenue is your subscription.</li>
          <li>
            <strong>We don't track you across the web.</strong> No third-party tracking
            pixels, no behavioral analytics, no fingerprinting.
          </li>
          <li>
            <strong>We don't share your data</strong> with anyone, except as described below
            (service providers and legal requirements).
          </li>
        </ul>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          We use a small number of third-party services to run Fibermade. These services only
          access what they need:
        </p>
        <ul>
          <li>
            <strong>Stripe</strong> — processes your subscription payments. Stripe has its own
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener">privacy policy</a>.
          </li>
          <li>
            <strong>Square</strong> — processes payments on your shop, your subscriptions,
            your gift cards, and your in-person sales when you connect your account. Square
            has its own
            <a href="https://squareup.com/legal/privacy" target="_blank" rel="noopener">privacy policy</a>.
          </li>
          <li>
            <strong>Anthropic</strong> — provides the AI models (Claude) we use to read the
            public pages of your website and extract your store details during onboarding. It
            receives your website's public page content for that purpose. Anthropic has its own
            <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener">privacy policy</a>.
          </li>
        </ul>
        <p>
          We don't use any advertising networks, analytics platforms, or social media tracking
          tools.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We use a single session cookie to keep you logged in. That's it. No tracking
          cookies, no advertising cookies, no third-party cookies. You won't see a cookie
          banner on our site because we don't do anything that requires one.
        </p>
      </section>

      <section>
        <h2>Data security</h2>
        <p>We take reasonable steps to protect your data:</p>
        <ul>
          <li>All connections use HTTPS encryption.</li>
          <li>Passwords are hashed using industry-standard algorithms.</li>
          <li>Payment data is handled by Stripe, a PCI-compliant payment processor.</li>
          <li>Square API connections are verified using signed webhooks.</li>
        </ul>
        <p>
          No system is perfectly secure. If we ever discover a breach that affects your data,
          we'll notify you promptly.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <ul>
          <li>
            <strong>Active accounts</strong> — we keep your data as long as your account is
            active.
          </li>
          <li>
            <strong>Cancelled accounts</strong> — we retain your data so you can resubscribe
            and pick up where you left off. If you want your data deleted, just ask.
          </li>
          <li>
            <strong>Deleted accounts</strong> — when you request account deletion, we remove
            your personal data within 30 days. Some data may persist in encrypted backups for
            up to 90 days. Anonymized trend data from website imports, which holds no personal
            data, is kept.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>You can:</p>
        <ul>
          <li>
            <strong>Access your data</strong> — everything you put into Fibermade is visible
            in your account. Anything else we hold about you, like website import records, is
            available on request.
          </li>
          <li>
            <strong>Update your data</strong> — edit your profile and business details anytime
            in settings.
          </li>
          <li>
            <strong>Delete your account</strong> — you can request account deletion from your
            settings page, or by emailing us.
          </li>
          <li>
            <strong>Opt out of marketing</strong> — if you opted in to product updates, you
            can opt out anytime in settings or by using the unsubscribe link in any email.
          </li>
        </ul>
        <p>
          If you're in the EU, California, or another jurisdiction with privacy laws, you may
          have additional rights (like data portability or restricting processing). Email us
          and we'll help.
        </p>
      </section>

      <section>
        <h2>Children's privacy</h2>
        <p>
          Fibermade is a business tool. You must be at least 18 to use it. We don't knowingly
          collect data from anyone under 18.
        </p>
      </section>

      <section>
        <h2>When we might share data</h2>
        <p>The only situations where we'd share your data:</p>
        <ul>
          <li>
            <strong>With your permission</strong> — for example, when you connect your Square
            account.
          </li>
          <li>
            <strong>To run the service</strong> — our payment processor (Stripe) needs billing
            details to charge your subscription, and our AI provider (Anthropic) processes your
            website's public page content during import.
          </li>
          <li>
            <strong>If legally required</strong> — we'll comply with valid legal processes like
            subpoenas or court orders. We'll notify you if we're allowed to.
          </li>
          <li>
            <strong>Business transfer</strong> — if Fibermade is acquired or merges with
            another company, your data would transfer with the business. We'd notify you
            before that happens.
          </li>
        </ul>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If we make meaningful changes to this privacy policy, we'll let you know by email or
          through the app. We won't quietly reduce your privacy protections.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions or concerns about your privacy? Email us at
          <a href="mailto:support@fibermade.com">support@fibermade.com</a>.
        </p>
      </section>
    </LegalDocument>
  </main>
</template>
