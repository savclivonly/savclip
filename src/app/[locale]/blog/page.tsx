import { translateToolName } from "@/utils/translate-tool";

import { getBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { type Locale } from "@/i18n";
import { getSeoAlternates } from "@/lib/seo";
import type { Metadata } from "next";


export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale || 'en';
  const title = translateToolName("SavClip Blog – Latest Tech Guides, Tips & Tutorials", locale);
  const description = translateToolName("Explore the SavClip Blog for expert tips, tech tutorials, download guides, and the latest strategies to supercharge your social media growth.", locale);
  
  const metadata: Metadata = {
    title,
    description,
    alternates: getSeoAlternates("blog", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/blog`,
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


export default async function BlogListPage(props: { 
  params: Promise<{ locale: Locale }>,
  searchParams: Promise<{ category?: string }>
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const locale = params.locale || 'en';
  const selectedCategory = searchParams.category || 'All';

  const allPosts = getBlogPosts(locale);
  const posts = selectedCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const categories = ["All", "Instagram Tips", "TikTok Tips", "YouTube Shorts", "Viral Reels", "Creator Growth"];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter leading-tight mb-6 animate-fade-in">
            {locale === 'pt' ? (
              <>Hub de <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500">Crescimento</span> para Criadores</>
            ) : locale === 'es' ? (
              <>Hub de <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500">Crecimiento</span> para Creadores</>
            ) : (
              <>{translateToolName("Creator", locale)} <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500">{translateToolName("Growth", locale)}</span> {translateToolName("Hub", locale)}</>
            )}
          </h1>
          <p className="text-lg md:text-xl font-bold text-neutral-500 max-w-2xl mx-auto">
            {translateToolName("Expert tips, tutorials, and latest news to help you dominate social media and save your favorite content.", locale)}
          </p>
        </header>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const query = cat === "All" ? "" : `?category=${encodeURIComponent(cat)}`;
            const href = locale === 'en' ? `/blog${query}` : `/${locale}/blog${query}`;
            return (
              <Link
                key={cat}
                href={href}
                className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black border-transparent'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-pink-500 hover:text-pink-600 shadow-sm'
                }`}
              >
                {translateToolName(cat, locale)}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col bg-white dark:bg-neutral-900 rounded-4xl border border-neutral-100 dark:border-neutral-800 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={translateToolName(post.title, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  {translateToolName(post.category, locale)}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-pink-500" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-violet-500" /> {translateToolName("By", locale)} {post.author}</span>
                </div>
                <h2 className="text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
                  {translateToolName(post.title, locale)}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 font-bold mb-8 flex-1 leading-relaxed">
                  {translateToolName(post.excerpt, locale)}
                </p>
                <Link href={locale === 'en' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`} className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white border border-neutral-100 dark:border-neutral-800 font-black uppercase tracking-widest text-xs group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all gap-2">
                  {translateToolName("Read Article", locale)} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
