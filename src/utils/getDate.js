export const formateDate = (dateString) => {
  const date = new Date(dateString)
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-us', option)
}
