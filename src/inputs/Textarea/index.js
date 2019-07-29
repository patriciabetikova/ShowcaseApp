import React from "react"
import { StyledTextarea } from "./styled"
import { withField } from "hoc/withField"

const enhancer = withField

export const Textarea = enhancer(({ onChange, value, ...rest }) => (
  <StyledTextarea
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value || ""}
  />
))
