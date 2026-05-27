
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { translateToolName } from "@/utils/translate-tool";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  locale: string;
}

export function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const currentLocale = locale || "en";

  // Map label/href to name/item for compatibility with the newer Breadcrumbs component
  const mappedItems = items.map(item => {
    const rawPath = item.href.startsWith('/') ? item.href : '/' + item.href;
    const localizedHref = item.href.startsWith('http') 
      ? item.href 
      : (currentLocale === 'en' ? rawPath : `/${currentLocale}${rawPath === '/' ? '' : rawPath}`);

    return {
      name: translateToolName(item.label, currentLocale),
      item: localizedHref
    };
  });

  // Always add Home at the beginning if not present
  const finalItems = [
    { 
      name: translateToolName("Home", currentLocale), 
      item: currentLocale === 'en' ? '/' : `/${currentLocale}` 
    },
    ...mappedItems
  ];

  return <Breadcrumbs items={finalItems} locale={currentLocale} />;
}
