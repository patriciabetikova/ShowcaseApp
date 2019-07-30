import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledTextarea = styled.textarea`
  background: none;
  color: ${theme.color.darkgrey};
  font-size: 1.6rem;
  border: none;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 9rem;
  padding: 1rem;
  line-height: 1.5;
  display: block;
  border-radius: 0rem;
  -webkit-border-radius: 0rem;
  -webkit-border: none;
  border-bottom: 0.1rem solid ${theme.color.lightgrey};
`
