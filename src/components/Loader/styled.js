import styled, { keyframes, css } from "styled-components/macro"
import { theme } from "theme"

const grow = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(-50%) scale(0);
  }
 `

export const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  z-index: ${theme.zIndices.loader};
`

export const Dot = styled.div`
  width: calc((100% - 1rem) / 3) ;
  height: calc((100%  - 1rem) / 3);
  border-radius: 50%;
  animation: ${grow} .5s ease-in-out infinite alternate;
  background: ${theme.color.primary};
  will-change: transform;
    ${p =>
      p.i === 0 &&
      css`
        transform-origin: 100% 50%;
      `}
    ${p =>
      p.i === 1 &&
      css`
        animation-delay: 0.16s;
      `}
    ${p =>
      p.i === 2 &&
      css`
        animation-delay: 0.32s;
      `};
`
