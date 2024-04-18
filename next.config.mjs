import nextra from 'nextra'
import NextBundleAnalyzer from '@next/bundle-analyzer'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  defaultShowCopyCode: true,
  codeHighlight: true,
  mdxOptions: {}
})

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

export default withNextra(
  withBundleAnalyzer({
    experimental: {
      typedRoutes: true,
      optimizePackageImports: []
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
)
