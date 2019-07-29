import React from "react"
import { FloatActionWrapper, Spacer } from "./styled"
import ReactDOM from "react-dom"

export const FloatAction = ({ children }) => (
  <>
    <FloatActionWrapper>{children}</FloatActionWrapper>
    {ReactDOM.createPortal(<Spacer />, document.getElementById("scrollSpacer"))}
  </>
)
