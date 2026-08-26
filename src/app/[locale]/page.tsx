import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioSite from "@/components/PortfolioSite";
import { isLocale, localeMeta, locales } from "@/config/i18n";
import { site } from "@/config/site";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = localeMeta[locale];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { pl: "/pl", ru: "/ru", "x-default": "/pl" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: site.name,
      locale: locale === "pl" ? "pl_PL" : "ru_RU",
      alternateLocale: locale === "pl" ? ["ru_RU"] : ["pl_PL"],
      type: "website",
        images: [
          { url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: site.name },
        ],
    },
  };
}
export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ant0niy07 Web Studio",
    url: `${site.url}/${locale}`,
    areaServed: ["Warszawa", "Polska"],
    sameAs: [site.instagram],
    description: localeMeta[locale].description,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioSite locale={locale} />
    </>
  );
}
