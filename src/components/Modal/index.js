import React from "react"
import { Backdrop } from "components/Backdrop"
import ReactDOM from "react-dom"
import { ModalWindow, ModalTitle, ModalBody } from "./styled"
import { Title } from "styled/typography"
import { Icon } from "components/Icon"
import { Cross } from "assets/icons/Cross"

export const Modal = ({ children, dark, close, title }) =>
  ReactDOM.createPortal(
    <Backdrop onClick={close} dark={dark}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        {title && (
          <ModalTitle>
            <Title>{title}</Title>
            <Icon icon={Cross} onClick={close} large />
          </ModalTitle>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </Backdrop>,
    document.body,
  )
