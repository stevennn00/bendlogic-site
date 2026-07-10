import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the BendLogic conduit bending calculator app.",
  alternates: { canonical: "https://www.bendlogic.app/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="Last updated: May 22, 2026">
      <p>
        These Terms of Use govern your use of BendLogic. By using BendLogic, you
        agree to these Terms. If you do not agree, do not use the app.
      </p>

      <h2>1. About BendLogic</h2>
      <p>
        BendLogic is a conduit bending and electrical field calculation app. The
        app may provide tools for conduit bending layouts, offsets, saddles,
        kicks, rack layouts, box fill, voltage drop, and related electrical
        reference information.
      </p>

      <h2>2. Field Calculation Aid Only</h2>
      <p>
        BendLogic is provided as a calculation and reference aid only. It is not
        a substitute for professional judgment, field verification, manufacturer
        instructions, National Electrical Code requirements, local code
        requirements, authority having jurisdiction requirements, employer
        procedures, or jobsite safety rules.
      </p>

      <h2>3. User Responsibility</h2>
      <p>
        You are responsible for verifying all measurements, conduit marks, bend
        angles, shrink, take-up, deducts, bender settings, conduit type, conduit
        size, and jobsite conditions before cutting, bending, installing, or
        relying on any result from the app.
      </p>
      <p>
        You should always confirm calculations against field conditions,
        approved plans, applicable code, and the instructions for the specific
        bender, conduit, and materials being used.
      </p>

      <h2>4. Electrical Code and Reference Information</h2>
      <p>
        Any electrical code or reference information provided in BendLogic is for
        convenience only. Code requirements may vary by jurisdiction, local
        amendment, project specification, or interpretation by the authority
        having jurisdiction. You are responsible for confirming compliance with
        all applicable laws, codes, standards, and project requirements.
      </p>

      <h2>5. Safety</h2>
      <p>
        You are responsible for following safe work practices, including
        applicable OSHA requirements, employer procedures, lockout/tagout
        procedures, personal protective equipment requirements, and all jobsite
        safety rules. BendLogic does not provide safety supervision or
        professional engineering services.
      </p>

      <h2>6. Accuracy and Availability</h2>
      <p>
        BendLogic is designed to provide useful and accurate calculations, but
        errors may occur. Results may be affected by user input, device
        behavior, bender differences, conduit material, field conditions,
        profile settings, software bugs, or outdated reference data. We do not
        guarantee that the app will be error-free, uninterrupted, or suitable for
        every project or field condition.
      </p>

      <h2>7. Purchases and Subscriptions</h2>
      <p>
        If BendLogic offers paid downloads, subscriptions, or in-app purchases,
        those transactions may be processed by the applicable app store, such as
        Google Play or the Apple App Store. Purchases, refunds, cancellations,
        and billing may be subject to the policies of the applicable app store.
      </p>

      <h2>8. No Warranty</h2>
      <p>
        BendLogic is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
        without warranties of any kind, whether express or implied. To the
        fullest extent permitted by law, we disclaim all warranties, including
        warranties of accuracy, reliability, fitness for a particular purpose,
        merchantability, and non-infringement.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, BendLogic and its developer will
        not be liable for any direct, indirect, incidental, consequential,
        special, exemplary, or punitive damages arising from or related to your
        use of the app. This includes, but is not limited to, incorrect bends,
        wasted material, labor costs, project delays, lost profits, failed
        inspections, code violations, property damage, personal injury, or
        reliance on app results.
      </p>

      <h2>10. Changes to the App and Terms</h2>
      <p>
        We may update BendLogic, modify features, change pricing, remove tools,
        add tools, or update these Terms at any time. Continued use of the app
        after changes means you accept the updated Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href="mailto:sdwdab@gmail.com">sdwdab@gmail.com</a>.
      </p>
    </LegalShell>
  );
}
