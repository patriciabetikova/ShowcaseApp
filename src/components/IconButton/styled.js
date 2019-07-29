import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { darken } from "polished"

const getBg = p => {
  if (p.primary) return theme.color.primary
  if (p.secondary) return theme.color.secondary
  return theme.color.darkgrey
}

const getTheme = p => {
  const bg = getBg(p)
  return css`
    background: ${bg};
    color: ${theme.color.white};
    &:hover {
      background: ${darken(0.05, bg)};
    }
  `
}

export const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 6rem;
  height: 6rem;
  box-shadow: 0rem 0.3rem 0.9rem -0.4rem rgba(0, 0, 0, 0.62);
  cursor: pointer;
  ${getTheme};
  ${p =>
    p.small &&
    css`
      width: 4.5rem;
      height: 4.5rem;
    `}
`
