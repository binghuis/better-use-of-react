import { Sandpack, SandpackThemeProp, SandpackProps } from '@codesandbox/sandpack-react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect, useState, Children } from 'react'
type CodeBlockProps = { files: SandpackProps['files'] }

const CodeBlock = (props: React.PropsWithChildren<CodeBlockProps>) => {
  const { theme } = useTheme()
  const [sandpackTheme, setSandpackTheme] = useState<SandpackThemeProp>()
  console.log(props.children)

  useEffect(() => {
    setSandpackTheme({ light: 'light', dark: 'dark', system: 'auto' }[theme] ?? 'auto')
  }, [theme])

  return (
    <Sandpack
      theme={sandpackTheme}
      files={props.files}
      options={{
        showConsole: true,
        showConsoleButton: true,
        showLineNumbers: true,
        editorWidthPercentage: 55,
        classes: {},
        autoReload: false
      }}
      template="react"
    />
  )
}

export default CodeBlock
