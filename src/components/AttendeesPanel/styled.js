import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const CardWrapper = styled.div`
  background: ${theme.color.white};
  box-shadow: 0rem 0.2rem 0.8rem -0.6rem rgba(0, 0, 0, 0.62);
  padding: 2.4rem;
  width: 100%;
`

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.2rem;
`

export const UserChip = styled.div`
  background: ${theme.color.lightgrey};
  color: ${theme.color.grey};
  border: 0.2rem solid ${theme.color.lightgrey};
  font-weight: 300;
  text-transform: capitalize;
  border-radius: 2.5rem;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  font-size: 1.3rem;
  ${p =>
    p.secondary &&
    css`
      color: ${theme.color.grey};
      background: ${theme.color.white};
      border: 0.2rem solid ${theme.color.lightgrey};
    `}
`
