type Props = {}

const SummaryContent = (props: React.PropsWithChildren<Props>) => {
  const { children } = props
  return <div className="px-6 py-2">{children}</div>
}

export default SummaryContent
