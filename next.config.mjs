import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  defaultShowCopyCode: true,
  codeHighlight: true,
  mdxOptions: {}
})

export default withNextra({
  experimental: {
    typedRoutes: true
  },
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN'
  },
  redirects: () => [
    {
      source: '/docs.([a-zA-Z-]+)',
      destination: '/docs/getting-started',
      statusCode: 302
    },
    {
      source: '/docs',
      destination: '/docs/getting-started',
      statusCode: 302
    }
  ],
  reactStrictMode: true
})
