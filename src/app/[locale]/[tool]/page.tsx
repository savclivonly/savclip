import { translateToolName } from "@/utils/translate-tool";
import { SearchHeader } from "@/components/layout/SearchHeader";
import { getSeoAlternates } from "@/lib/seo";
import { RatingWidget } from "@/components/shared/RatingWidget";
import type { Metadata } from "next";
import { FeaturesSection } from "@/components/layout/FeaturesSection";
import { FAQSection } from "@/components/layout/FAQSection";
import { RichArticle } from "@/components/shared/RichArticle";
import { StructuredData } from "@/components/shared/StructuredData";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CategoryCards } from "@/components/layout/CategoryCards";
import { UniversalCTA } from "@/components/shared/UniversalCTA";
import Link from "next/link";
import { getToolSeoData } from "@/lib/getSeoData";
import { TOOL_CONFIGS } from "@/lib/tool-configs";
import { getPlatformGuide } from "@/lib/platform-guides";
import { notFound } from "next/navigation";

// Import all mockups
import { InstagramPreviewMockup } from "@/components/shared/InstagramPreviewMockup";
import { FacebookPreviewMockup } from "@/components/shared/FacebookPreviewMockup";
import { TiktokPreviewMockup } from "@/components/shared/TiktokPreviewMockup";
import { YoutubePreviewMockup } from "@/components/shared/YoutubePreviewMockup";
import { SnapchatPreviewMockup } from "@/components/shared/SnapchatPreviewMockup";
import { TelegramPreviewMockup } from "@/components/shared/TelegramPreviewMockup";
import { XPreviewMockup } from "@/components/shared/XPreviewMockup";

const MOCKUP_COMPONENTS: Record<string, React.ComponentType<any>> = {
  InstagramPreviewMockup,
  FacebookPreviewMockup,
  TiktokPreviewMockup,
  YoutubePreviewMockup,
  SnapchatPreviewMockup,
  TelegramPreviewMockup,
  XPreviewMockup
};

export async function generateStaticParams() {
  const locales = ['en', 'pt', 'es', 'id', 'ar'];
  const params: { locale: string; tool: string }[] = [];
  const tools = Object.keys(TOOL_CONFIGS);
  
  locales.forEach((locale) => {
    tools.forEach((tool) => {
      params.push({ locale, tool });
    });
  });
  
  return params;
}

export async function generateMetadata(props: { params: Promise<{ locale: string; tool: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale || 'en';
  const tool = params.tool;

  // Verify the tool exists in our configuration
  if (!TOOL_CONFIGS[tool]) {
    return {};
  }

  const seoData = await getToolSeoData(tool, locale);
  const title = seoData.meta?.title || `${tool.replace(/-/g, ' ')} HD Downloader - SavClip`;
  const description = seoData.meta?.description || `Download and save content for free. Fast online tool by SavClip.`;
  
  return { 
    title,
    description,
    alternates: getSeoAlternates(tool, locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/${tool}`,
      images: [
        {
          url: "/icon-512x512.png",
          width: 512,
          height: 512,
          alt: "SavClip Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page(props: { params: Promise<{ locale: string; tool: string }> }) {
  const params = await props.params;
  const locale = params.locale || 'en';
  const tool = params.tool;

  const config = TOOL_CONFIGS[tool];
  if (!config) {
    notFound();
  }

  const seoData = await getToolSeoData(tool, locale);
  const { articleSections, faqs, header } = seoData;

  const MockupComponent = config.mockup ? MOCKUP_COMPONENTS[config.mockup] : null;
  const guideConfig = getPlatformGuide(tool);

  // Dynamic hover and text colors based on platform type
  const hoverColor = config.mockup === 'InstagramPreviewMockup' ? 'hover:text-pink-600' :
                     config.mockup === 'FacebookPreviewMockup' ? 'hover:text-blue-600' :
                     config.mockup === 'YoutubePreviewMockup' ? 'hover:text-red-600' :
                     'hover:text-pink-600';

  const linkColor = config.mockup === 'InstagramPreviewMockup' ? 'text-pink-600' :
                    config.mockup === 'FacebookPreviewMockup' ? 'text-blue-600' :
                    config.mockup === 'YoutubePreviewMockup' ? 'text-red-600' :
                    'text-pink-600';

  return (
    <>
      <StructuredData locale={locale}
        type="SoftwareApplication"
        data={{
          title: `SavClip ${config.platform || "Downloader"}`,
          description: seoData.meta?.description || `Download ${config.platform || "media"} in HD for free.`,
          ratingValue: config.ratingValue,
          reviewCount: config.reviewCount
        }}
      />
      <StructuredData locale={locale}
        type="FAQPage"
        data={{ items: faqs }}
      />
      <StructuredData locale={locale}
        type="BreadcrumbList"
        data={[
          { name: "Home", item: `/` },
          { name: config.platform || "Downloader", item: `/${tool}` }
        ]}
      />

      <Breadcrumb 
        locale={locale} 
        items={[
          { label: config.platform || "Downloader", href: `/${tool}` }
        ]} 
      />
      
      <SearchHeader {...header} />

      <div className="bg-white dark:bg-black pt-8 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <RichArticle sections={articleSections} locale={locale} />
        </div>
      </div>

      <FeaturesSection platform={config.platform || "Media"} />

      {/* Related Tools */}
      {config.relatedTools && config.relatedTools.length > 0 && (
        <section className="py-20 bg-white dark:bg-black px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white uppercase italic tracking-wider md:tracking-widest mb-12 leading-tight">
              {translateToolName("Explore More Tools", locale)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {config.relatedTools.map((relTool: any, i: number) => (
                <Link 
                  key={i}
                  href={locale === 'en' ? `${relTool.href}` : `/${locale}${relTool.href}`}
                  className={`p-6 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-700 font-bold text-neutral-900 dark:text-white ${hoverColor} transition-colors`}
                >
                  {translateToolName(relTool.label, locale)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection platform={config.platform || "Media"} items={faqs} />

      {/* SCREENSHOT / MOCKUP */}
      {MockupComponent && (
        <div className="bg-white dark:bg-black pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-4xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800">
              <MockupComponent type={config.mockupType} />
            </div>
          </div>
        </div>
      )}

      {/* Blog & Guides Section */}
      {guideConfig && (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50 px-4 border-t border-neutral-100 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white uppercase italic tracking-wider md:tracking-widest text-center mb-12 leading-tight">
              {translateToolName(guideConfig.titleKey, locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guideConfig.guides.map((blog: any, i: number) => (
                <div key={i} className="group p-8 bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-800 hover:border-neutral-500/30 transition-all">
                  <h3 className={`text-lg font-black text-neutral-900 dark:text-white uppercase italic tracking-tight mb-2 ${hoverColor} transition-colors`}>
                    {translateToolName(blog.title, locale)}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-bold mb-4">
                    {translateToolName(blog.desc, locale)}
                  </p>
                  <Link href={`/`} className={`text-xs font-black uppercase tracking-widest ${linkColor} hover:translate-x-1 transition-transform inline-block`}>
                    {translateToolName("Read More", locale)} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rating Section */}
      <div className="flex flex-col items-center justify-center py-10 bg-slate-50 dark:bg-neutral-900/10 border-t border-b border-neutral-100 dark:border-neutral-800">
        <RatingWidget 
          toolKey={tool} 
          defaultRating={parseFloat(config.ratingValue) || 4.9} 
          defaultReviewCount={parseInt(config.reviewCount.replace(/[^0-9]/g, ""), 10) || 12840} 
          locale={locale} 
        />
      </div>

      <CategoryCards />

      <UniversalCTA config={config} locale={locale} />
    </>
  );
}
