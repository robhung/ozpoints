const createData = (
  bank,
  name,
  type,
  rewards,
  promotion,
  annual,
  foreign,
  income,
  previous,
  link
) => ({
  bank,
  name,
  type,
  rewards,
  promotion,
  annual,
  foreign,
  income,
  previous,
  link,
});

const cards = [
  createData(
    'AMEX',
    'AMEX Altitude Black (Westpac Bundle)',
    'AMEX',
    [{ type: 'Qantas', fee: 0 }],
    {
      points: 40000,
      extras: ['Lounge Pass'],
      spend: 3000,
      dayLimit: 90,
      endDate: '2019-04-02',
    },
    {
      fee: 199,
      waived: false,
    },
    3,
    75000,
    12,
    'https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-black/'
  ),
  createData(
    'AMEX',
    'AMEX Altitude Platinum (Westpac Bundle)',
    'AMEX',
    [{ type: 'Qantas', fee: 0 }],
    {
      points: 15000,
      extras: [],
      spend: 3000,
      dayLimit: 90,
      endDate: '2019-04-02',
    },
    {
      fee: 49,
      waived: false,
    },
    3,
    30000,
    12,
    'https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-platinum/'
  ),
  createData(
    'AMEX',
    'AMEX Velocity Platinum',
    'AMEX',
    [{ type: 'Velocity', fee: 0 }],
    {
      points: 50000,
      extras: ['Domestic Flight', 'Lounge Pass'],
      spend: 3000,
      dayLimit: 90,
      endDate: '',
    },
    {
      fee: 375,
      waived: false,
    },
    3,
    65000,
    18,
    'https://www.americanexpress.com/au/compare-velocity-cards/?cpid=100331967'
  ),
  createData(
    'ANZ',
    'ANZ Travel Adventures',
    'VISA',
    [{ type: 'Velocity', fee: 0 }],
    {
      points: 80000,
      extras: ['Domestic Flight', 'Lounge Pass'],
      spend: 1500,
      dayLimit: 90,
      endDate: '2019-03-14',
    },
    {
      fee: 225,
      waived: false,
    },
    0,
    35000,
    12,
    'https://www.pointhacks.com.au/credit-cards/anz-rewards-travel-adventures-card-guide/'
  ),
  createData(
    'StGeorge',
    'St. George Amplify Signature',
    'VISA',
    [{ type: 'Qantas', fee: 0 }],
    {
      points: 80000,
      extras: ['Lounge Pass'],
      spend: 4000,
      dayLimit: 90,
      endDate: '2019-03-06',
    },
    {
      fee: 279,
      waived: true,
    },
    3,
    75000,
    12,
    'https://www.stgeorge.com.au/personal/credit-cards/affiliate/amplify-signature/qantasexclusive?cid=sc%3Acc%3AFY19_1901%3Aoth%3Aqf%3Adtop&promoCode=Q2'
  ),
  createData(
    'StGeorge',
    'St. George Amplify Signature',
    'VISA',
    [{ type: 'Flexible', fee: 0 }],
    {
      points: 100000,
      extras: ['Lounge Pass'],
      spend: 12000,
      dayLimit: 365,
      endDate: '2019-03-06',
    },
    {
      fee: 179,
      waived: true,
    },
    3,
    75000,
    12,
    'https://www.pointhacks.com.au/credit-cards/stgeorge-amplify-signature-amplify-rewards-guide/'
  ),
  createData(
    'Westpac',
    'Westpac Altitude Black',
    'Mastercard',
    [{ type: 'Qantas', fee: 50 }, { type: 'Flexible', fee: 0 }],
    {
      points: 80000,
      extras: ['Lounge Pass'],
      spend: 3000,
      dayLimit: 90,
      endDate: '2019-04-02',
    },
    {
      fee: 250,
      waived: false,
    },
    3,
    75000,
    12,
    'https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-black/'
  ),
  createData(
    'Westpac',
    'Westpac Altitude Platinum',
    'VISA',
    [{ type: 'Qantas', fee: 50 }, { type: 'Flexible', fee: 0 }],
    {
      points: 60000,
      extras: [],
      spend: 3000,
      dayLimit: 90,
      endDate: '2019-04-02',
    },
    {
      fee: 150,
      waived: true,
    },
    3,
    30000,
    12,
    'https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-platinum/'
  ),
];

export default cards;
