import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const LogoWrapper = styled.div`
  height: 5rem;
  align-self: flex-start;
  ${theme.mq.desktop} {
    ${p =>
      p.absolutePositionDesktop &&
      css`
        position: absolute;
        top: 5rem;
        left: 5rem;
      `}
  }
  ${p =>
    p.withMargin &&
    css`
      margin-bottom: 5rem;
    `}
`
