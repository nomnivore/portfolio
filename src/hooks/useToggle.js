import { useState, useCallback } from "react"

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial)

  const toggle = useCallback(
    forceState =>
      typeof forceState === "boolean"
        ? setState(forceState)
        : setState(state => !state),
    []
  )

  return [state, toggle]
}

export default useToggle
