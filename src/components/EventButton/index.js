import React from "react"
import { statuses } from "data/events/status"
import { StyledEventButton } from "./styled"
import { eventsRequest } from "data/events/api"
import { withForm } from "hoc/withForm"

const enhancer = withForm({
  onSubmit: props => () =>
    props.status === statuses.attending
      ? eventsRequest.leave(props.id)
      : eventsRequest.join(props.id),
  onSuccess: p => p.refetchData,
})

export const EventButton = enhancer(({ status, form }) => {
  if (status === statuses.mine) return <StyledEventButton text="edit" grey />
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    form.submitForm()
  }
  return status === statuses.attending ? (
    <StyledEventButton text="leave" secondary onClick={handleClick} />
  ) : (
    <StyledEventButton text="join" primary onClick={handleClick} />
  )
})
