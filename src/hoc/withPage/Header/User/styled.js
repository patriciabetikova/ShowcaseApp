import styled from "styled-components/macro"
import { theme } from "theme"
import { Subtitle } from "styled/typography"

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
`

export const UserName = styled(Subtitle)`
  display: none;
  text-transform: capitalize;
  ${theme.mq.desktop} {
    display: flex;
    margin: 0 1rem;
  }
`
