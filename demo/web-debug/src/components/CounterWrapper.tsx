import { useState } from 'react'
import Counter from './Counter'

const CounterWrapper = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="border rounded p-4">
      <label htmlFor="name">计数器初始值：</label>

      <input
        type="number"
        id="name"
        name="name"
        className="border mb-4 p-2 rounded"
        value={count}
        onChange={e => {
          setCount(parseInt(e.target.value))
        }}
      />

      <Counter initialCount={count} />
    </div>
  )
}

export default CounterWrapper
