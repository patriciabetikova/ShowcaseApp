import React from "react"
import * as R from "ramda"
import { eventsRequest } from "data/events/api"
import { Button } from "components/Button"
import { withForm } from "hoc/withForm"
import { TextField } from "inputs/TextField"
import { StyledForm } from "styled/form"
import { urls } from "pages/urls"
import { stringRequired, numberRequired } from "validators"
import { Title, Subtitle } from "styled/typography"
import { withPage } from "hoc/withPage"
import { ButtonWrapper } from "./styled"
import { TimePicker } from "inputs/TimePicker"
import { toastSuccess } from "data/toasts/rx"
import { DatePicker } from "inputs/DatePicker"
import { Textarea } from "inputs/Textarea"

const enhancer = R.compose(
  withPage(() => ({
    link: { text: "← Home", url: urls.home.url },
  })),
  withForm({
    schema: {
      title: stringRequired,
      description: stringRequired,
      date: stringRequired,
      time: stringRequired,
      capacity: numberRequired,
    },
    onSubmit: props => eventsRequest.create,
    onSuccess: props => response => toastSuccess("Event successfully created"),
    redirect: props => result => urls.home.url,
  }),
)

export const EventCreatePage = enhancer(() => (
  <StyledForm shadow>
    <Title>Create new event</Title>
    <Subtitle>Enter details below.</Subtitle>
    <TextField type="text" label="Title" name="title" />
    <Textarea type="text" label="Description" name="description" />
    <DatePicker type="text" label="Date" name="date" />
    <TimePicker label="Time" name="time" />
    <TextField type="text" label="Capacity" name="capacity" />
    <ButtonWrapper>
      <Button type="submit" text="create new event" big />
    </ButtonWrapper>
  </StyledForm>
))
