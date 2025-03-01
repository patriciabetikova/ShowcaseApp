import moment from "moment"
import { modes } from "../modes"
import { startOfDecade, endOfDecade } from "../decades"
import { months } from "../months"

export const calculateHigherModeAndOffset = (mode, offset) => {
  if (mode === modes.month) {
    const m = moment().add(offset, "months")
    const off = m.startOf("year").diff(moment().startOf("year"), "years")
    return [modes.year, off]
  }
  if (mode === modes.year) {
    const diff = startOfDecade(offset) - startOfDecade(0)
    const off = diff === 0 ? 0 : diff / 10
    return [modes.decade, off]
  }
}

export const getTitle = (mode, offset) => {
  if (mode === modes.month) {
    const month = moment().add(offset, "months")
    return `${months[month.format("M") - 1]} ${month.format("YYYY")}`
  }

  const year = moment().add(offset, "years")
  if (mode === modes.year) {
    return year.format("YYYY")
  }

  return `${startOfDecade(offset * 10)} - ${endOfDecade(offset * 10)}`
}
