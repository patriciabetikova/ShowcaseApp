import React from "react"
import { withField } from "hoc/withField"
import { SelectWrap, StyledSelect, InputIcon } from "./styled"
import { Chevron } from "assets/icons/Chevron"

const enhancer = withField

export const Select = enhancer(
  ({ onChange, value, placeholder, options, borderless, ...rest }) => (
    <SelectWrap borderless={borderless}>
      <StyledSelect
        {...rest}
        onChange={e => onChange(e.target.value)}
        value={value || ""}
      >
        {[
          {
            value: "",
            name: placeholder,
            disabled: true,
          },
        ]
          .concat(options)
          .map(x => (
            <option value={x.value} key={x.value} disabled={x.disabled}>
              {x.name}
            </option>
          ))}
      </StyledSelect>
      <InputIcon icon={Chevron} small />
    </SelectWrap>
  ),
)
