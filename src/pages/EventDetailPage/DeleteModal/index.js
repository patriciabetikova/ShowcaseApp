import React from "react"
import { Button } from "components/Button"
import { withForm } from "hoc/withForm"
import { eventsRequest } from "data/events/api"
import { withModal } from "hoc/withModal"
import * as R from "ramda"
import { urls } from "pages/urls"
import { StyledDeleteModal, LineWrapper } from "./styled"
import { Subtitle } from "styled/typography"

const enhancer = R.compose(
  withModal("Delete event?"),
  withForm({
    onSubmit: props => () => eventsRequest.del(props.id),
    onSuccess: props => props.close,
    redirect: props => result => urls.home.url,
  }),
)

export const DeleteModal = enhancer(({ title }) => (
  <StyledDeleteModal>
    <Subtitle>Event {title} will be permanently deleted.</Subtitle>
    <LineWrapper>
      <Button text="Delete" type="submit" error />
    </LineWrapper>
  </StyledDeleteModal>
))
