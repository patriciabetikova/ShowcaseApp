import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { Icon } from "components/Icon"

export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 0.1rem solid ${theme.color.lightgrey};
  ${p =>
    p.borderless &&
    css`
      border: none;
    `}
`
export const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem;
  height: 4rem;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  -webkit-border: none;
  border-radius: 0;
  border: none;
  background: none;
  cursor: pointer;
  ${p =>
    p.value === "" &&
    css`
      color: ${theme.color.lightgrey};
    `};
`

export const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.5rem;
  pointer-events: none;
  display: flex;
`
