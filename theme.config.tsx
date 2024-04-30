import React from 'react'
import { useConfig, LocaleSwitch } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>🐈‍⬛</span>,
  project: {
    link: 'https://github.com/binghuis/better-use-of-react'
  },
  docsRepositoryBase: 'https://github.com/binghuis/better-use-of-react/tree/main/pages',
  editLink: {
    text: '在 GitHub 上编辑本页 →'
  },
  feedback: {
    content: '有疑问？给我反馈 →'
  },
  nextThemes: {},
  navbar: {},
  toc: {
    backToTop: true,
    title: '目录'
  },
  faviconGlyph: '🐈‍⬛',
  head: () => {
    return (
      <>
        <title>如何更好的使用 React</title>
        <meta name="title" content="如何更好的使用 React" />
        <meta name="description" content="根据 React 19 官方文档，探索 React 在实际开发场景中更合理的使用。" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://better-use-of-react.vercel.app/" />
        <meta property="og:title" content="如何更好的使用 React" />
        <meta property="og:description" content="根据 React 19 官方文档，探索 React 在实际开发场景中更合理的使用。" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://better-use-of-react.vercel.app/" />
        <meta property="twitter:title" content="如何更好的使用 React" />
        <meta property="twitter:description" content="根据 React 19 官方文档，探索 React 在实际开发场景中更合理的使用。" />
      </>
    )
  },
  footer: {
    text: 'MIT 2024 © Binghuis'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
}

export default config
