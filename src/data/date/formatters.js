import moment from "moment"

export const formattedDate = (date, time) =>
  moment(date).format("LL") + " - " + time
