import { useState, useCallback } from "react"

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial)

  const toggle = useCallback(
    forceState =>
      forceState === undefined
        ? setState(state => !state)
        : setState(forceState),
    []
  )

  return [state, toggle]
}

export default useToggle
