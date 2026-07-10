import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bendlogic.app"),
  applicationName: "BendLogic",
  category: "productivity",
  title: {
    default: "BendLogic | Conduit Bending Calculator for Electricians",
    template: "%s | BendLogic",
  },
  description:
    "BendLogic is a field-ready conduit bending calculator for electricians. Calculate offsets, 3-point saddles, 4-point saddles, rolling offsets, box fill, voltage drop, and more. Available on iPhone and Android.",
  keywords: [
    "conduit bending calculator",
    "electrician app",
    "EMT bending calculator",
    "offset bend calculator",
    "3 point saddle calculator",
    "4 point saddle calculator",
    "rolling offset calculator",
    "BendLogic",
  ],
  alternates: {
    canonical: "https://www.bendlogic.app/",
  },
  openGraph: {
    siteName: "BendLogic",
    locale: "en_US",
    title: "BendLogic | Conduit Bending Calculator for Electricians",
    description:
      "Field-ready conduit bending calculations, visual layouts, and electrical tools for electricians. Available on the App Store and Google Play.",
    url: "https://www.bendlogic.app/",
    type: "website",
    images: [
      {
        url: "/hero-mockup.png",
        width: 1122,
        height: 1402,
        alt: "BendLogic conduit bending calculator app shown on three phones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BendLogic | Conduit Bending Calculator for Electricians",
    description:
      "Conduit bending calculations, visual layouts, box fill, voltage drop, and more for field electricians.",
    images: ["/hero-mockup.png"],
  },
  appleWebApp: {
    capable: true,
  },
  other: {
    "apple-itunes-app": "app-id=6780317167",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BendLogic",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "iOS, Android",
  description:
    "Field-ready conduit bending calculator for electricians. Calculate offsets, 3-point saddles, 4-point saddles, rolling offsets, box fill, voltage drop, and more.",
  url: "https://www.bendlogic.app/",
  image: "https://www.bendlogic.app/logo.png",
  installUrl: [
    "https://apps.apple.com/app/id6780317167",
    "https://play.google.com/store/apps/details?id=com.bendlogic.app",
  ],
  author: {
    "@type": "Organization",
    name: "BendLogic",
    url: "https://www.bendlogic.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
