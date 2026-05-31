
export async function generateStaticParams() {
  const locales = ['en', 'pt', 'es', 'id', 'ar'];
  const params: { locale: string; slug: string }[] = [];
  locales.forEach(locale => {
    BLOG_POSTS.forEach(post => {
      params.push({ locale, slug: post.slug });
    });
  });
  return params;
}
import { BLOG_POSTS, getBlogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Calendar, User, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/i18n";
import dynamic from "next/dynamic";
import { getSeoAlternates } from "@/lib/seo";
import type { Metadata } from "next";
import { translateToolName } from "@/utils/translate-tool";

const RichArticle = dynamic(() => import("@/components/shared/RichArticle").then(m => m.RichArticle));

export async function generateMetadata(props: { params: Promise<{ locale: Locale, slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { locale, slug } = params;
  const posts = getBlogPosts(locale);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: translateToolName("Post Not Found – SavClip", locale),
      description: translateToolName("The requested blog post could not be found.", locale),
    };
  }

  const title = `${translateToolName(post.title, locale)} – SavClip`;
  const description = translateToolName(post.excerpt, locale);

  const metadata: Metadata = {
    title,
    description,
    alternates: getSeoAlternates(`blog/${slug}`, locale),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/blog/${slug}`,
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

  return metadata;
}


export default async function BlogPostPage(props: { params: Promise<{ locale: Locale, slug: string }> }) {
  const params = await props.params;
  const { locale, slug } = params;
  const posts = getBlogPosts(locale);
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <Link href={locale === 'en' ? `/blog` : `/${locale}/blog`} className="inline-flex items-center gap-2 text-neutral-400 font-black uppercase tracking-widest text-[10px] mb-12 hover:text-pink-600 transition-colors">
          <ChevronLeft className="w-4 h-4" /> {translateToolName("Back to Blog", locale)}
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-6 text-[10px] font-black text-pink-600 uppercase tracking-widest mb-6">
            <span className="px-3 py-1 bg-pink-600/10 rounded-full">{translateToolName(post.category, locale)}</span>
            <span className="flex items-center gap-1.5 text-neutral-400"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1.5 text-neutral-400"><User className="w-3 h-3" /> {translateToolName("By", locale)} {post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black text-neutral-900 dark:text-white uppercase italic tracking-tighter leading-tight">
            {translateToolName(post.title, locale)}
          </h1>
        </header>

        <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-4xl mb-16 overflow-hidden border border-neutral-100 dark:border-neutral-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <RichArticle sections={post.sections} />
        </div>

        {post.relatedTools && post.relatedTools.length > 0 && (
          <section className="mt-16 pt-16 border-t border-neutral-100 dark:border-neutral-800">
            <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white uppercase italic tracking-wider mb-6">
              {translateToolName("Related Downloading Tools", locale)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {post.relatedTools.map((tool, i) => (
                <Link
                  key={i}
                  href={locale === 'en' ? tool.href : `/${locale}${tool.href}`}
                  className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800 font-bold text-neutral-900 dark:text-white hover:text-pink-600 hover:border-pink-500/30 transition-all flex items-center justify-between group"
                >
                  <span>{translateToolName(tool.label, locale)}</span>
                  <span className="text-pink-600 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
