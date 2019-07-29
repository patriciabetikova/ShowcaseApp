import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const StyledAvatar = styled.div`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.color.lightgrey};
  color: ${theme.color.darkgrey};
  font-size: 5rem;
  ${p =>
    p.small &&
    css`
      width: 4rem;
      height: 4rem;
      font-size: 1.7rem;
    `};
`
