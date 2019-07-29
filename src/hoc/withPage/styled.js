import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledPage = styled.div`
  background: ${theme.color.smoke};
  min-height: 100vh;
`
export const StyledBody = styled.div`
  padding: 2rem 0.8rem 2.4rem;
  ${theme.mq.tablet} {
    padding: 2rem 3rem;
    margin: 0 auto;
    max-width: 120rem;
  }
`
