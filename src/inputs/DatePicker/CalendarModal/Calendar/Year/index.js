import React from "react"
import { YearWrap, StyledYear } from "./styled"
import moment from "moment"
import { months } from "../months"

export const Year = ({ onChange, offset }) => (
  <YearWrap>
    {months.map((x, xi) => (
      <StyledYear
        key={x}
        onClick={() => onChange(xi + offset * 12 - moment().format("M") + 1)}
      >
        {x}
      </StyledYear>
    ))}
  </YearWrap>
)
