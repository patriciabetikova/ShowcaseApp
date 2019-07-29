import styled from "styled-components/macro"
import { Subtitle } from "styled/typography"

export const StyledDetailTitle = styled(Subtitle)`
  margin-bottom: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  :last-child {
    margin-bottom: 1.5rem;
  }
`

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
