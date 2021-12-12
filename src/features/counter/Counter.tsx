import React, { useState } from 'react'

import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
} from '../counter/counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  // pega o valor inicial
  const count = useSelector((state) => state.counter.value)
  // dispara as actions
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(count)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
