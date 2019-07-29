import styled from "styled-components/macro"
import { theme } from "theme"

export const EventEditWrap = styled.div`
  width: 100%;
  height: auto;
  align-items: flex-start;
  ${theme.mq.desktop} {
    display: flex;
    flex-direction: row;
  }
`

export const EventEditFormWrap = styled.div`
  ${theme.mq.tablet} {
    margin-bottom: 2rem;
  }
  ${theme.mq.desktop} {
    max-width: 80rem;
    width: 60%;
    flex-shrink: 0;
    margin-bottom: 0;
  }
`

export const AttendeesPanelWrap = styled.div`
  display: none;
  ${theme.mq.tablet} {
    display: flex;
  }
  ${theme.mq.desktop} {
    width: auto;
    flex-grow: 1;
    margin-left: 2rem;
  }
`
