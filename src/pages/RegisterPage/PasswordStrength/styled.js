import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const ConditionsWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0 1rem;
`

export const StyledCondition = styled.div`
  display: flex;
`

export const StyledCheck = styled.div`
  color: ${theme.color.secondary};
  width: 2rem;
  text-align: center;
  ${p =>
    p.passes &&
    css`
      color: ${theme.color.success};
      font-weight: bold;
    `};
`
export const StyledText = styled.div`
  font-size: 1.4rem;
`
