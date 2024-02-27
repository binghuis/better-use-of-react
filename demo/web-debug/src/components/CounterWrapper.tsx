import { useState } from 'react'
import Counter from './Counter'

import { useReducer } from 'react'

const updateReducer = (num: number): number => (num + 1) % 1_000_000

function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0)

  return update
}

const CounterWrapper = () => {
  const [count, setCount] = useState(0)
  const update = useUpdate()

  return (
    <div className="border rounded p-4 space-y-4">
      <div className="flex space-x-2">
        <div>
          <label htmlFor="counter">计数器初始值：</label>
          <input
            type="number"
            id="counter"
            name="counter"
            className="border p-2 rounded"
            value={count}
            onChange={e => {
              setCount(parseInt(e.target.value))
            }}
          />
        </div>
        <button onClick={update}>重渲染</button>
      </div>
      {/* <Counter initialCount={count} key={count} /> */}
      <Counter initialCount={count} />
    </div>
  )
}

export default CounterWrapper
