import React from "react";
import { DocsThemeConfig, LocaleSwitch } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>🌟</span>,
  project: {
    link: "https://github.com/binghuis/better-use-of-react",
  },
  docsRepositoryBase:
    "https://github.com/binghuis/better-use-of-react/tree/main/pages",
  editLink: {
    text: "在 GitHub 上编辑本页 →",
  },
  feedback: {
    content: "有疑问？给我们反馈 →",
  },
  nextThemes: {},
  navbar: {},
  toc: {
    backToTop: true,
    title: "目录",
  },
  faviconGlyph: "✦",
  footer: {
    text: "MIT 2024 © Binghuis",
  },
};

export default config;
