import styled from "styled-components/macro"
import { theme } from "theme"
import { Avatar } from "components/Avatar"

export const CardWrapper = styled.div`
  margin-top: 10rem;
  padding: 8rem 0 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.color.white};
  box-shadow: 0rem 0.1rem 0.8rem -0.6rem rgba(0, 0, 0, 0.62);
`

export const ProfileAvatar = styled(Avatar)`
  position: absolute;
  bottom: calc(100% - 7.5rem);
`
