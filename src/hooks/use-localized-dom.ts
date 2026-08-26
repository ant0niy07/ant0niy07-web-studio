"use client";
import { useLayoutEffect } from "react";
import { Locale, ru } from "@/config/i18n";
const reverse = Object.fromEntries(
  Object.entries(ru).map(([pl, value]) => [value, pl]),
);
const localize = (root: Node, locale: Locale) => {
  const dictionary = locale === "ru" ? ru : reverse;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const raw = node.nodeValue ?? "";
    const trimmed = raw.trim();
    if (!trimmed) continue;
    const translated = dictionary[raw] ?? dictionary[trimmed];
    if (translated)
      node.nodeValue =
        raw === trimmed ? translated : raw.replace(trimmed, translated);
  }
  if (root instanceof Element) {
    for (const element of [root, ...root.querySelectorAll("*")])
      for (const attribute of ["aria-label", "title", "placeholder", "alt"]) {
        const value = element.getAttribute(attribute);
        if (value && dictionary[value])
          element.setAttribute(attribute, dictionary[value]);
      }
  }
};
export function useLocalizedDom(locale: Locale) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("ant0niy07-locale", locale);
    document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
    localize(document.body, locale);
    document
      .querySelectorAll<HTMLAnchorElement>('a[href="/polityka-prywatnosci"]')
      .forEach((link) =>
        link.setAttribute("href", `/${locale}/polityka-prywatnosci`),
      );
    const observer = new MutationObserver((records) =>
      records.forEach((record) =>
        record.addedNodes.forEach((node) => localize(node, locale)),
      ),
    );
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);
}
