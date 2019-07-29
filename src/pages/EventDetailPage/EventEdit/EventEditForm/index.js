import React from "react"
import { withForm } from "hoc/withForm"
import { urls } from "pages/urls"
import { stringRequired, numberRequired } from "validators"
import { eventsRequest } from "data/events/api"
import { IconButton } from "components/IconButton"
import { TextField } from "inputs/TextField"
import { Textarea } from "inputs/Textarea"
import { StyledForm } from "styled/form"
import { FloatAction } from "components/FloatAction"
import { Check } from "assets/icons/Check"
import { TimePicker } from "inputs/TimePicker"
import * as R from "ramda"
import { DatePicker } from "inputs/DatePicker"

const enhancer = R.compose(
  withForm({
    initialValues: R.prop("event"),
    schema: {
      title: stringRequired,
      description: stringRequired,
      date: stringRequired,
      time: stringRequired,
      capacity: numberRequired,
    },
    onSubmit: props => eventsRequest.edit(props.match.params.id),
    redirect: props => result => urls.home.url,
  }),
)

export const EventEditForm = enhancer(p => (
  <StyledForm shadow {...p}>
    <DatePicker type="text" label="Date" name="date" />
    <TimePicker label="Time" name="time" />
    <TextField type="text" label="Title" name="title" />
    <Textarea type="text" label="Description" name="description" />
    <TextField type="text" label="Capacity" name="capacity" />
    <FloatAction>
      <IconButton icon={Check} type="submit" primary />
    </FloatAction>
  </StyledForm>
))
