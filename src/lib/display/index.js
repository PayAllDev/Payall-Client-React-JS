export const formatToCurrency = (amount) => {

  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);

}

export const formatToNumber = (amount) => {

  return new Intl.NumberFormat('es-MX', {
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    minimumIntegerDigits: 3
  }).format(amount);

}

export const formatToPercentage = (amount) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export const formatPercentage = (amount) => {

  const amountSTR = amount.toString()
  return amountSTR.slice(0, -2) + '%'

}