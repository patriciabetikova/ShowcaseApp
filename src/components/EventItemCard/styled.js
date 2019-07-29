import styled from "styled-components/macro"
import { theme } from "theme"
import { Title } from "styled/typography"

export const EventWrapper = styled.div`
  background: ${theme.color.white};
  box-shadow: 0rem 0.2rem 0.8rem -0.6rem rgba(0, 0, 0, 0.62);
  margin-bottom: 1.5rem;
  padding: 2.4rem;
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const StyledDate = styled.div`
  color: ${theme.color.lightgrey};
`

export const CardTitle = styled(Title)`
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledText = styled.p`
  color: ${theme.color.grey};
  font-weight: 300;
  margin: auto 0;
  line-height: 1.6;
`

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.4rem;
`
