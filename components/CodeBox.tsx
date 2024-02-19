import { Sandpack, SandpackThemeProp, SandpackProps } from '@codesandbox/sandpack-react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect, useState } from 'react'

type CodeBoxProps = { files: SandpackProps['files'] }

const CodeBox = (props: CodeBoxProps) => {
  const { theme } = useTheme()
  const [sandpackTheme, setSandpackTheme] = useState<SandpackThemeProp>()

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
        classes: {}
      }}
      template="react"
    />
  )
}

export default CodeBox
