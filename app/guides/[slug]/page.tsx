import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideShell from "@/components/GuideShell";
import { guides } from "../guide-content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return {};

  const url = `https://www.bendlogic.app/guides/${slug}`;
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName: "BendLogic",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/hero-mockup.png"],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();
  return <GuideShell guide={guide} />;
}
