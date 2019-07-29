import React from "react"
import { Modal } from "components/Modal"

export const withModal = title => Component => ({
  dark,
  eventTitle,
  ...props
}) => (
  <Modal close={props.close} dark={dark} title={title}>
    <Component {...props} />
  </Modal>
)
