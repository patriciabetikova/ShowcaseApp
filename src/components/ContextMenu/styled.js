import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const StyledContextMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  background: ${theme.color.white};
  min-width: 15rem;
  padding: 1rem 0;
  line-height: 3rem;
  border-radius: 1.2rem;
  box-shadow: 0.1rem 0.4rem 2.4rem -0.7rem rgba(0, 0, 0, 0.62);
  z-index: ${theme.zIndices.contextMenu};
  ${p =>
    p.right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};
`
