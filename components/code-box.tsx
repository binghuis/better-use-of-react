import { Sandpack, SandpackInternal } from "@codesandbox/sandpack-react";

type CodeBoxProps = {};

const CodeBox = (props: CodeBoxProps) => {
  const files = {};

  return (
    <Sandpack
      files={files}
      theme="light"
      template="react"
      //   options={{ showConsole: true, showConsoleButton: true }}
    />
  );
};

export default CodeBox;
