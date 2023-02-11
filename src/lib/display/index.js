export const formatToCurrency = (amount) => {

    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

}

export const formatToPercentage = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }