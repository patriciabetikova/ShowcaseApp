import React from "react"
import { GradientWrappper, StyledGradient } from "./styled"

export const withGradient = Component => props => (
  <GradientWrappper>
    <StyledGradient />
    <Component {...props} />
  </GradientWrappper>
)
