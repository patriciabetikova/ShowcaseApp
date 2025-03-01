import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const StyledBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${theme.zIndices.backdrop};
  ${p =>
    p.dark &&
    css`
      background: rgba(0, 0, 0, 0.3);
    `}
`
