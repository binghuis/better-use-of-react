import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblock: false,
  },
});

export default withNextra({
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
});
