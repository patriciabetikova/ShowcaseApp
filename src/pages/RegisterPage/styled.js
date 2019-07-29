import styled from "styled-components/macro"
import { theme } from "theme"

export const LoginLinkTop = styled.div`
  display: none;
  ${theme.mq.desktop} {
    display: flex;
    margin: 2rem 1.5rem;
    justify-content: flex-end;
  }
`

export const TitleWrapper = styled.div`
  margin-bottom: 3.5rem;
  text-align: center;
  ${theme.mq.desktop} {
    text-align: left;
  }
`

export const LoginLinkBottom = styled.div`
  margin-bottom: 4rem;
  ${theme.mq.desktop} {
    display: none;
  }
`
