import { Sandpack, SandpackInternal } from '@codesandbox/sandpack-react'

type CodeBoxProps = {}

const CodeBox = (props: CodeBoxProps) => {
  const files = {
    '/App.js': `export default function App() {
return <h1>Hello Sandpack</h1>
}`
  }

  return (
    <Sandpack
      files={files}
      theme="light"
      template="react"
      //   options={{ showConsole: true, showConsoleButton: true }}
    />
  )
}

export default CodeBox
