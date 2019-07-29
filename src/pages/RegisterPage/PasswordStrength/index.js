import React from "react"
import {
  ConditionsWrapper,
  StyledCondition,
  StyledCheck,
  StyledText,
} from "./styled"
import { conditions } from "data/auth/password"

export const PasswordStrength = ({ value }) => (
  <ConditionsWrapper>
    {conditions.map(x => {
      const passes = x.testFn(value || "")
      return (
        <StyledCondition key={x.text}>
          <StyledCheck passes={passes}>{passes ? "✓" : "•"}</StyledCheck>
          <StyledText>{x.text}</StyledText>
        </StyledCondition>
      )
    })}
  </ConditionsWrapper>
)
