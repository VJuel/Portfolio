import { useCallback, useRef, useState } from "react"

export default function useStateRef(defaultValue) {
  const [state, setState] = useState(defaultValue)
  const ref = useRef(state)

  const dispatch = useCallback((value) => {
    ref.current = typeof value === "function" ? value(ref.current) : value
    setState(ref.current)
  }, [])

  return [state, dispatch, ref]
}
