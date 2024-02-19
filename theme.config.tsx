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
