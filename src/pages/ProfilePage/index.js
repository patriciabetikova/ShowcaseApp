import React, { useState } from "react"
import { withPage } from "hoc/withPage"
import { withData } from "hoc/withData"
import { UserCard } from "./UserCard"
import { Title } from "styled/typography"
import { EventItemCard } from "components/EventItemCard"
import { EventItemList } from "components/EventItemList"
import { ListStyleSwitch } from "components/ListStyleSwitch"
import { LineWrapper, CardsWrapper } from "./styled"
import { urls } from "pages/urls"
import * as R from "ramda"
import { eventsRequest } from "data/events/api"
import { getStatus, getMyEvents } from "data/events/status"
import { Link } from "components/Link"

const enhancer = R.compose(
  withData(() => eventsRequest.list()),
  withPage(() => ({
    link: { text: "Home", url: urls.home.url },
  })),
)

export const ProfilePage = enhancer(({ user, refetchData, data }) => {
  const [typeCard, setTypeCard] = useState(false)
  return (
    <>
      <UserCard user={user} email={user.email} />
      <LineWrapper>
        <Title>My events</Title>
        <ListStyleSwitch
          typeCard={typeCard}
          setCard={() => setTypeCard(true)}
          setList={() => setTypeCard(false)}
        />
      </LineWrapper>
      {typeCard && (
        <CardsWrapper>
          {getMyEvents(user.id, data).map(event => {
            const status = getStatus(user.id, event.user_id, event.attendees)
            return (
              <Link to={urls.eventDetail.url(event.id)} key={event.title}>
                <EventItemCard
                  event={event}
                  refetchData={refetchData}
                  status={status}
                />
              </Link>
            )
          })}
        </CardsWrapper>
      )}
      {!typeCard &&
        getMyEvents(user.id, data).map(event => {
          const status = getStatus(user.id, event.user_id, event.attendees)
          return (
            <Link to={urls.eventDetail.url(event.id)} key={event.title}>
              <EventItemList
                event={event}
                refetchData={refetchData}
                status={status}
              />
            </Link>
          )
        })}
    </>
  )
})
