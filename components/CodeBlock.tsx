import { Sandpack, SandpackThemeProp, SandpackProps } from '@codesandbox/sandpack-react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect, useState, Children } from 'react'

const CodeBlock = (props: React.PropsWithChildren) => {
  const { theme } = useTheme()
  const [sandpackTheme, setSandpackTheme] = useState<SandpackThemeProp>()
  console.log(props.children)

  useEffect(() => {
    setSandpackTheme({ light: 'light', dark: 'dark', system: 'auto' }[theme] ?? 'dark')
  }, [theme])

  return (
    <div className="my-4">
      <Sandpack
        theme={sandpackTheme}
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
    </div>
  )
}

export default CodeBlock
