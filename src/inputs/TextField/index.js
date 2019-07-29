import React from "react"
import { StyledInput } from "./styled"
import { withField } from "hoc/withField"

const enhancer = withField

export const TextField = enhancer(({ onChange, value, ...rest }) => (
  <StyledInput
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value || ""}
  />
))
