import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const StyledItem = styled.div`
  padding: 0 2rem;
  color: ${theme.color.grey};
  :hover {
    background: ${theme.color.lightgrey};
  }
  ${p =>
    p.active &&
    css`
      background: ${theme.color.lightgrey};
      cursor: default;
    `}
`
