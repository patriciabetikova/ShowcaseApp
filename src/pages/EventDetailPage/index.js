import React, { useState } from "react"
import { urls } from "pages/urls"
import { withPage } from "hoc/withPage"
import { EventEdit } from "./EventEdit"
import { EventDetail } from "./EventDetail"
import { LineWrapper, StyledDetailTitle } from "./styled"
import * as R from "ramda"
import { withData } from "hoc/withData"
import { eventsRequest } from "data/events/api"
import { getIsMine, getStatus } from "data/events/status"
import { Trash } from "assets/icons/Trash"
import { IconButton } from "components/IconButton"
import { DeleteModal } from "./DeleteModal"

const enhancer = R.compose(
  withPage(() => ({
    link: { text: "Home", url: urls.home.url },
  })),
  withData(props => eventsRequest.detail(props.match.params.id)),
)

export const EventDetailPage = enhancer(
  ({ user, data, match, refetchData }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const isMine = getIsMine(user.id, data.user_id)
    const status = getStatus(user.id, data.user_id, data.attendees)
    return (
      <>
        <LineWrapper>
          <div>
            <StyledDetailTitle>detail event :</StyledDetailTitle>
            <StyledDetailTitle>#{match.params.id}</StyledDetailTitle>
          </div>
          {isMine && (
            <IconButton
              icon={Trash}
              onClick={() => setModalOpen(true)}
              secondary
              small
            />
          )}
        </LineWrapper>
        {isMine ? (
          <EventEdit event={data} />
        ) : (
          <EventDetail
            event={data}
            status={status}
            refetchData={refetchData}
            userId={user.id}
          />
        )}
        {modalOpen && (
          <DeleteModal
            close={() => setModalOpen(false)}
            id={data.id}
            title={data.title}
            dark
          />
        )}
      </>
    )
  },
)
