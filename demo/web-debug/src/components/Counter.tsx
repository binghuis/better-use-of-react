import { useEffect, useState } from 'react'

type Props = { initialCount: number }

const Counter = (props: Props) => {
  const { initialCount } = props
  const [count, setCount] = useState(initialCount)
  console.log('Counter render')

  useEffect(() => {
    console.log('Counter loaded')
    return () => {
      console.log('Counter unloaded')
    }
  }, [])

  return (
    <div className="flex space-x-2 items-center border p-4 rounded ">
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(v => v + 1)
        }}
      >
        加 1
      </button>
      <button
        onClick={() => {
          setCount(initialCount)
        }}
      >
        重置
      </button>
    </div>
  )
}

export default Counter
