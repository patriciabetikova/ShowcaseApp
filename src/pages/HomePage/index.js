import React, { useState } from "react"
import { withPage } from "hoc/withPage"
import { EventItemCard } from "components/EventItemCard"
import { EventItemList } from "components/EventItemList"
import {
  LineWrapper,
  FilterWrapper,
  StyledSubtitle,
  SelectWrapper,
  CardsWrapper,
} from "./styled"
import { urls } from "pages/urls"
import { ListStyleSwitch } from "components/ListStyleSwitch"
import { Link } from "components/Link"
import * as R from "ramda"
import { withData } from "hoc/withData"
import { eventsRequest } from "data/events/api"
import { FloatAction } from "components/FloatAction"
import { IconButton } from "components/IconButton"
import { Plus } from "assets/icons/Plus"
import { getStatus } from "data/events/status"
import { Select } from "inputs/Select"
import { filterEvent, filters, filterOptions } from "data/events/filter"

const enhancer = R.compose(
  withPage(),
  withData(() => eventsRequest.list()),
)

export const HomePage = enhancer(({ user, data, refetchData }) => {
  const [typeCard, setTypeCard] = useState(false)
  const [filter, setFilter] = useState(filters.all)
  return (
    <>
      <LineWrapper>
        <FilterWrapper>
          <StyledSubtitle>Show: </StyledSubtitle>
          <SelectWrapper>
            <Select
              onChange={setFilter}
              options={filterOptions}
              value={filter}
              borderless
            />
          </SelectWrapper>
        </FilterWrapper>
        <ListStyleSwitch
          typeCard={typeCard}
          setCard={() => setTypeCard(true)}
          setList={() => setTypeCard(false)}
        />
      </LineWrapper>
      {typeCard && (
        <CardsWrapper>
          {data.filter(filterEvent(filter)).map(x => {
            const status = getStatus(user.id, x.user_id, x.attendees)
            return (
              <Link to={urls.eventDetail.url(x.id)} key={x.title}>
                <EventItemCard
                  event={x}
                  status={status}
                  refetchData={refetchData}
                />
              </Link>
            )
          })}
        </CardsWrapper>
      )}
      {!typeCard &&
        data.filter(filterEvent(filter)).map(x => {
          const status = getStatus(user.id, x.user_id, x.attendees)
          return (
            <Link to={urls.eventDetail.url(x.id)} key={x.title}>
              <EventItemList
                event={x}
                status={status}
                refetchData={refetchData}
              />
            </Link>
          )
        })}
      <FloatAction>
        <IconButton to={urls.eventCreate.url} icon={Plus} />
      </FloatAction>
    </>
  )
})
