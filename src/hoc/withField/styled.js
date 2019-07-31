import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${p =>
    p.noMargin &&
    css`
      margin-bottom: 0;
    `}
`

export const StyledLabel = styled.label`
  font-size: 1.6rem;
  text-transform: capitalize;
  color: ${theme.color.grey};
`

export const ErrorMessage = styled.p`
  color: ${theme.color.error};
  margin: 5px 0 0;
`
