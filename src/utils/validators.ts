/**
 * validates if value is in future
 */
export const minDateNowValidator = (value?: string): boolean => {
  if (!value) return true // allow empty value

  const selectedDate = new Date(value)
  const minDate = new Date() // now

  return minDate < selectedDate
}
