export const statuses = {
  mine: "mine",
  attending: "attending",
  notAttending: "notAttending",
}

export const getIsMine = (userId, creatorId) => userId === +creatorId

export const getAmAttending = (userId, attendees) =>
  attendees.find(x => +x.id === userId)

export const getStatus = (userId, creatorId, attendees) => {
  if (getIsMine(userId, creatorId)) return statuses.mine
  return getAmAttending(userId, attendees)
    ? statuses.attending
    : statuses.notAttending
}

export const getMyEvents = (userId, events) =>
  events.filter(
    x => getIsMine(userId, x.user_id) || getAmAttending(userId, x.attendees),
  )
