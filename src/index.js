export default function groupConsecutiveNumbers(numbers = [], minLength = 2) {
  const list = [...new Set(numbers.map(Number))].sort((a, b) => a - b)
  const groups = {}

  list.map(index => {
    const prev = index - 1
    if (groups[prev]) {
      groups[index] = [...groups[prev], index]
      delete groups[prev]
    } else {
      groups[index] = [index]
    }
  })

  return Object.values(groups).filter(a => a.length >= minLength)
}
