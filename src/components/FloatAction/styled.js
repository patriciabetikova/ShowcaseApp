import styled from "styled-components/macro"
import { theme } from "theme"

export const FloatActionWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 1rem;
  ${theme.mq.tablet} {
    right: 2rem;
  }
`
export const Spacer = styled.div`
  margin-top: 5rem;
`
