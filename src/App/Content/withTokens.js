import React, { useEffect, useState } from "react"
import { loggedIn$ } from "data/auth/rx"

export const withTokens = Component => props => {
  const [tokens, setTokens] = useState(undefined)
  useEffect(() => {
    loggedIn$.subscribe(setTokens)
  }, [])
  if (!tokens) return null
  return <Component {...props} loggedIn={tokens.accessToken} />
}
