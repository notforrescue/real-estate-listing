type numberFormatterType = (
  amount: number,
  locale?: string,
  options?: Intl.NumberFormatOptions
) => string

export const numberFormatter: numberFormatterType = (
  amount: number,
  locale: string = 'hu-HU',
  options = {}
) => {
  return Intl.NumberFormat(locale, options).format(amount)
}

const defaultCurrencyFormatterOptions = {
  style: 'currency',
  currency: 'HUF',
  maximumSignificantDigits: 3,
} satisfies Intl.NumberFormatOptions

export const formatCurrency: numberFormatterType = (
  amount,
  locale,
  options = defaultCurrencyFormatterOptions
) => numberFormatter(amount, locale, options)
