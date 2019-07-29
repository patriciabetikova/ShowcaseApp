import styled from "styled-components/macro"
import { theme } from "theme"

export const GradientWrappper = styled.div`
  display: flex;
  height: 100vh;
  > * {
    flex-grow: 1;
    overflow-y: scroll;
  }
`

export const StyledGradient = styled.div`
  display: none;
  ${theme.mq.desktop} {
    display: flex;
    width: 40rem;
    flex-grow: 0;
    background: linear-gradient(
      58deg,
      rgba(57, 199, 184, 1) 2%,
      rgba(58, 100, 155, 1) 25%,
      rgba(59, 38, 136, 1) 43%,
      rgba(91, 49, 143, 1) 58%,
      rgba(154, 71, 157, 1) 73%,
      rgba(255, 105, 180, 1) 90%
    );
  }
`
