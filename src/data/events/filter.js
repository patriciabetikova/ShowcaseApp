export const filters = {
  all: "all",
  past: "past",
  future: "future",
}

export const filterOptions = [
  { name: "All events", value: filters.all },
  { name: "Past events", value: filters.past },
  { name: "Future events", value: filters.future },
]

export const filterEvent = filter => event => {
  if (filter === filters.all) return true
  if (filter === filters.future) return new Date(event.date) > new Date()
  return new Date(event.date) < new Date()
}
