import React from "react"
import { Loader } from "components/Loader"

export const withLoader = predicate => Component => props => {
  if (predicate(props)) return <Loader />
  return <Component {...props} />
}
