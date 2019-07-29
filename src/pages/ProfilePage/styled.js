import styled from "styled-components/macro"
import { theme } from "theme"

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.3rem 0.5rem 1rem;
  align-items: center;
`

export const CardsWrapper = styled.div`
  ${theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }
  > * {
    width: calc(100% / 2);
    padding: 0 1rem;
    margin-bottom: 2rem;
    ${theme.mq.desktop} {
      width: calc(100% / 3);
    }
  }
`
