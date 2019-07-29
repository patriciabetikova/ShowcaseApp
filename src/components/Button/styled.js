import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { darken } from "polished"

const getBackground = p => {
  if (p.secondary) return theme.color.secondary
  if (p.error) return theme.color.error
  if (p.grey) return theme.color.lightgrey
  return theme.color.primary
}

const getColor = p => {
  if (p.grey) return theme.color.grey
  return theme.color.white
}

const getTheme = p => {
  const bg = getBackground(p)
  return css`
    background: ${bg};
    color: ${getColor(p)};
    &:hover {
      background: ${darken(0.05, bg)};
    }
  `
}

export const StyledButton = styled.button`
  height: 3.5rem;
  padding: 0 1.5rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  ${getTheme};
  ${p =>
    p.big &&
    css`
      height: 6rem;
    `}
  ${p =>
    p.mobileFullWidth &&
    css`
      width: 100%;
      ${theme.mq.desktop} {
        width: auto;
        padding: 0 4rem;
      }
    `}
`
