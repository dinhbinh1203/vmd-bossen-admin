import dayjs from 'dayjs'

export function formatDateToString(date: string, formatType = 'DD/MM/YYYY') {
  return dayjs(date).format(formatType)
}

export function formatDatePayload(date: string) {
  return dayjs(date).format('YYYY-MM-DD')
}
