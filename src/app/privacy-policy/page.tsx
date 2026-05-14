import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A1 Automotive",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>

        <div className="space-y-8 text-foreground/80">
          <div>
            <h2 className="text-2xl mb-4">Who We Are</h2>
            <p>
              A1 Automotive Ltd is a UK vehicle logistics company specialising in vehicle transport, storage, PDI services, defleet management and fleet logistics. Our registered address is:
            </p>
            <address className="not-italic mt-2 text-foreground/90">
              A1 Automotive Ltd<br />
              12 Blackburn Road<br />
              Bathgate<br />
              Scotland<br />
              EH48 2EY<br />
              United Kingdom
            </address>
          </div>

          <div>
            <h2 className="text-2xl mb-4">What Data We Collect</h2>
            <p>
              We may collect and process the following personal data:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name and contact details (email address, telephone number)</li>
              <li>Company name and fleet or vehicle information</li>
              <li>Address and location details relevant to transport or storage bookings</li>
              <li>Information you provide when filling out forms on our website</li>
              <li>Technical data such as IP address and browser type via standard server logs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-4">How We Use Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and to improve your experience. Cookies help us analyse traffic, remember your preferences, and understand how you interact with our site.
            </p>
            <p className="mt-2">
              You can choose to accept or decline cookies via the banner displayed on your first visit. You may also adjust your browser settings to refuse cookies, though this may affect site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">How We Use Your Data</h2>
            <p>
              We use your personal data to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to enquiries and provide quotes</li>
              <li>Arrange vehicle transport, storage and related services</li>
              <li>Manage accounts and process payments</li>
              <li>Comply with legal and regulatory obligations (e.g., HMRC bonded storage requirements)</li>
              <li>Improve our website and customer service</li>
            </ul>
            <p className="mt-2">
              We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. Typically, customer and project-related data is retained for six years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain types of processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your data, please contact us:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@a1automotive.co.uk" className="text-secondary hover:underline">
                info@a1automotive.co.uk
              </a>
            </p>
            <p className="mt-1">
              <strong>Phone:</strong>{" "}
              <a href="tel:+441506631133" className="text-secondary hover:underline">
                01506 631133
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
