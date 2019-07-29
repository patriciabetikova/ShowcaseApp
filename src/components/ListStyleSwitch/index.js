import React from "react"
import { Wrapper } from "./styled"
import { Grid } from "assets/icons/Grid"
import { List } from "assets/icons/List"
import { Icon } from "components/Icon"

export const ListStyleSwitch = ({ setCard, setList, typeCard }) => (
  <Wrapper>
    <Icon onClick={setCard} icon={Grid} round darken={typeCard} />
    <Icon onClick={setList} icon={List} round darken={!typeCard} />
  </Wrapper>
)
