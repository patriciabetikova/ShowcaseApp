import React from "react"
import { StyledLoader, Dot } from "./styled"
import { Backdrop } from "components/Backdrop"
import * as R from "ramda"

export const Loader = () => (
  <Backdrop dark>
    <StyledLoader>
      {R.range(0, 3).map(i => (
        <Dot key={i} i={i} />
      ))}
    </StyledLoader>
  </Backdrop>
)
