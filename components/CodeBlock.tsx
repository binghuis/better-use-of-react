import { Sandpack, SandpackThemeProp, SandpackProps, SandpackFile } from '@codesandbox/sandpack-react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect, useState, PropsWithChildren } from 'react'
import { hash } from 'spark-md5'
function genCodeString(node: string | React.ReactElement | React.ReactElement[]) {
  let codeString = ''

  if (typeof node === 'string') {
    codeString += node
  } else if (!Array.isArray(node)) {
    if (node.props.children) {
      codeString += node.props.children
    }
  } else {
    node.forEach(child => {
      if (typeof child === 'string') {
        codeString += child
      } else {
        codeString += genCodeString(child.props.children)
      }
    })
  }
  return codeString
}

function genFilesOpts(node: React.ReactElement | React.ReactElement[]) {
  if (!Array.isArray(node)) {
    const { 'data-language': lang, children } = node.props
    const [fileName, language] = lang.split('.')
    return { [fileName && language ? `${fileName}.tsx` : 'App.tsx']: { code: genCodeString(children.props.children) } }
  } else {
    return node.reduce((acc, child) => {
      const { 'data-language': lang, children } = child.props
      const [fileName, language] = lang.split('.')
      acc[fileName && language ? `${fileName}.tsx` : 'App.tsx'] = { code: genCodeString(children.props.children) }
      return acc
    }, {})
  }
}

const CodeBlock = (props: PropsWithChildren<React.ReactElement | React.ReactElement[]>) => {
  const { theme } = useTheme()
  const [sandpackTheme, setSandpackTheme] = useState<SandpackThemeProp>()
  const [files, setFiles] = useState<Record<string, SandpackFile>>({})

  useEffect(() => {
    setFiles(genFilesOpts(props.children))
    setSandpackTheme({ light: 'light', dark: 'dark', system: 'auto' }[theme] ?? 'dark')
  }, [theme, props.children])

  if (!props.children) return null

  return (
    <div className="my-4">
      <Sandpack
        files={files}
        key={hash(JSON.stringify(files))}
        theme={sandpackTheme}
        options={{
          showConsole: true,
          showConsoleButton: true,
          showLineNumbers: true,
          editorWidthPercentage: 55,
          classes: {},
          autoReload: false
        }}
        template="react-ts"
      />
    </div>
  )
}

export default CodeBlock
