import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the BendLogic conduit bending calculator app.",
  alternates: { canonical: "https://www.bendlogic.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="Last updated: April 2026">
      <p>
        BendLogic is built as a tool for professional electricians. We value
        your privacy and aim to be transparent about how the app works.
      </p>

      <h2>1. Data Collection</h2>
      <p>
        BendLogic is a utility tool. We do not collect, store, or share any
        personal identification information (PII). All calculations and
        visualizations are performed locally on your device.
      </p>

      <h2>2. Local Data Storage</h2>
      <p>
        The app may store user preferences, saved calculations, and settings
        locally on your device. This data never leaves your device and is not
        transmitted to any external servers.
      </p>

      <h2>3. Permissions</h2>
      <p>BendLogic may request certain permissions to function correctly:</p>
      <ul>
        <li>
          <strong>Camera:</strong> Used only for the AR protractor feature.
          Camera data is not recorded, stored, or transmitted.
        </li>
        <li>
          <strong>Storage:</strong> Used only to save app settings and user data
          locally on your device.
        </li>
      </ul>
      <p>
        No data from these permissions is transmitted to us or any third party.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        BendLogic does not use analytics, advertising networks, or tracking
        services.
      </p>
      <p>
        The app is distributed through the Apple App Store and Google Play.
        Please refer to Apple&rsquo;s and Google&rsquo;s privacy policies for
        how they handle platform-level data.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell, trade, or share any user data. All information remains
        on your device.
      </p>

      <h2>6. Security</h2>
      <p>
        Because BendLogic does not use external servers, your data remains
        entirely under your control on your device.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy in future versions of the app. Updates
        will be reflected on this page.
      </p>

      <h2>8. Contact</h2>
      <p>
        If you have any questions, please contact{" "}
        <a href="mailto:bendlogic.app@gmail.com">bendlogic.app@gmail.com</a>.
      </p>
    </LegalShell>
  );
}
