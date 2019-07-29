import React from "react"
import { Backdrop } from "components/Backdrop"
import { StyledContextMenu } from "./styled"
import { withRouter } from "react-router-dom"
import { Menu } from "components/Menu"

const enhancer = withRouter

export const ContextMenu = enhancer(({ close, right, children, items }) => (
  <>
    <Backdrop onClick={close} />
    <StyledContextMenu right={right}>
      {items ? <Menu items={items} /> : children}
    </StyledContextMenu>
  </>
))
