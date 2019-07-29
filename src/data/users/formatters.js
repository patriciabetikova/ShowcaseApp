import * as R from "ramda"

export const getFullName = user => user.first_name + " " + user.last_name

export const getInitials = u => [u.first_name, u.last_name].map(R.head).join("")
