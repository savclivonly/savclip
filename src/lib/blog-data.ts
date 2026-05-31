import { BLOG_POSTS_EN } from "./blog-data/en";
import { BLOG_POSTS_PT } from "./blog-data/pt";
import { BLOG_POSTS_ES } from "./blog-data/es";
import { BLOG_POSTS_ID } from "./blog-data/id";
import { BLOG_POSTS_AR } from "./blog-data/ar";
import { ArticleSection } from "@/components/shared/RichArticle";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  sections: ArticleSection[];
  date: string;
  author: string;
  category: string;
  image: string;
  relatedTools?: { label: string; href: string }[];
}

/**
 * Get localized blog posts list
 */
export const getBlogPosts = (locale: string): BlogPost[] => {
  switch (locale) {
    case "pt":
      return BLOG_POSTS_PT;
    case "es":
      return BLOG_POSTS_ES;
    case "id":
      return BLOG_POSTS_ID;
    case "ar":
      return BLOG_POSTS_AR;
    default:
      return BLOG_POSTS_EN;
  }
};

// Master list fallback for compile-time routes and sitemaps (using English data as source of truth for slugs)
export const BLOG_POSTS: BlogPost[] = BLOG_POSTS_EN;
