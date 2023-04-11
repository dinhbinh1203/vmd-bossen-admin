import numeral from 'numeral'

export const formatNumber = (number: number) => {
  return numeral(number).format('0,0')
}

export function toAtLeast2Character(number: number) {
  return numeral(number).format('0,0').padStart(2, '0')
}
