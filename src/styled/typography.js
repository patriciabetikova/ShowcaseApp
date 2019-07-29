import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const h3 = css`
  color: ${theme.color.darkgrey};
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 2.15;
`

export const Title = styled.h3`
  ${h3}
  ${p =>
    p.white &&
    css`
      color: ${theme.color.white};
    `};
`
export const h4 = css`
  color: ${theme.color.grey};
  font-weight: 400;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`

export const Subtitle = styled.h4`
  ${h4};
`
