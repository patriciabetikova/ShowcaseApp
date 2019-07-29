import React from "react"
import { Icon } from "components/Icon"
import { LogoWrapper } from "./styled"
import { Event } from "assets/icons/Event"

export const Logo = p => (
  <LogoWrapper {...p}>
    <Icon icon={Event} large primaryFill />
  </LogoWrapper>
)
