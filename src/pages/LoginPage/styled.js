import styled from "styled-components/macro"
import { theme } from "theme"

export const RegisterLinkTop = styled.div`
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

export const RegisterLinkBottom = styled.div`
  margin-bottom: 4rem;
  ${theme.mq.desktop} {
    display: none;
  }
`

export const FieldWrapper = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
`
