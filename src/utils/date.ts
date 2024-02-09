/**
 * Get current date-time in ISO format for usage
 * as minimum value for date-time input
 */
export const getMinDate = (): string =>
  new Date().toISOString().split('.')[0].slice(0, -3)
