import styled from "styled-components/macro"
import { theme } from "theme"
import { Title } from "styled/typography"

export const EventWrapper = styled.div`
  background: ${theme.color.white};
  box-shadow: 0rem 0.2rem 0.8rem -0.6rem rgba(0, 0, 0, 0.62);
  margin-bottom: 1.5rem;
  padding: 1rem 1.6rem;
  flex-grow: 1;
  ${theme.mq.desktop} {
    display: flex;
    align-items: center;
  }
`

export const StyledDate = styled.div`
  color: ${theme.color.lightgrey};
  margin-right: 1rem;
  ${theme.mq.desktop} {
    width: 19rem;
    margin: 0;
  }
`

export const CardTitle = styled(Title)`
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${theme.mq.desktop} {
    width: 19rem;
    flex-shrink: 0;
  }
`
export const StyledText = styled.p`
  color: ${theme.color.grey};
  flex-grow: 1;
  margin: 0 0 1.5rem;
  font-weight: 300;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${theme.mq.desktop} {
    padding: 0 2rem;
    margin: 0;
  }
`

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledWrapper = styled.div`
  align-items: center;
  ${theme.mq.desktop} {
    display: flex;
  }
`
