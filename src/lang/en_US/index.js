import messages from './messages';

const numberFormats = {
  currency: {
    style: 'currency', currency: 'USD',
  },
  decimal: {
    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
  },
  noDecimals: {
    style: 'decimal', useGrouping: true, maximumFractionDigits: 0,
  },
  plain: {
    style: 'decimal', useGrouping: false, maximumFractionDigits: 0,
  },
};

const dateTimeFormats = {
  short: {
    year: 'numeric', month: 'short', day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  },
};

export { messages, numberFormats, dateTimeFormats };
