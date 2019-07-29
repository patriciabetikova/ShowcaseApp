import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2.4rem;
  background: ${theme.color.white};
  ${theme.mq.tablet} {
    align-items: flex-start;
    max-width: 50rem;
    ${p =>
      p.withMarginTop &&
      css`
        margin-top: 10rem;
      `}
    ${p =>
      p.fullWidth &&
      css`
        max-width: 100%;
      `}
  }
  ${p =>
    p.shadow &&
    css`
      box-shadow: 0rem 0.2rem 0.8rem -0.6rem rgba(0, 0, 0, 0.62);
    `}
`
