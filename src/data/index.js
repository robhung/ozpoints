const createData = (
  issuer,
  name,
  type,
  rewards,
  promotion,
  annual,
  supplementary,
  foreign,
  income,
  credit,
  previous,
  link
) => ({
  issuer,
  name,
  type,
  rewards,
  promotion,
  annual,
  supplementary,
  foreign,
  income,
  credit,
  previous,
  link
});

const cards = [
  createData(
    "Westpac",
    "Altitude Platinum",
    "VISA",
    [{ type: "Qantas", fee: 50 }, { type: "Flexible", fee: 0 }],
    {
      points: 60000,
      spend: 3000,
      dayLimit: 90,
      startDate: "2018-11-28",
      endDate: "2019-04-02"
    },
    {
      fee: 150,
      waived: true
    },
    {
      limit: 1,
      fee: 0
    },
    3,
    30000,
    6000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-platinum/"
  ),
  createData(
    "AMEX",
    "Altitude Platinum",
    "AMEX",
    [{ type: "Qantas", fee: 0 }],
    {
      points: 15000,
      spend: 3000,
      dayLimit: 90,
      startDate: "2018-11-28",
      endDate: "2019-04-02"
    },
    {
      fee: 49,
      waived: false
    },
    {
      limit: 4,
      fee: 0
    },
    3,
    30000,
    3000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-platinum/"
  ),
  createData(
    "Westpac",
    "Altitude Black",
    "Mastercard",
    [{ type: "Qantas", fee: 50 }, { type: "Flexible", fee: 0 }],
    {
      points: 80000,
      spend: 3000,
      dayLimit: 90,
      startDate: "2018-11-28",
      endDate: "2019-04-02"
    },
    {
      fee: 250,
      waived: false
    },
    {
      limit: 1,
      fee: 0
    },
    3,
    75000,
    15000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-black/"
  ),
  createData(
    "AMEX",
    "Altitude Black",
    "AMEX",
    [{ type: "Qantas", fee: 0 }],
    {
      points: 40000,
      spend: 3000,
      dayLimit: 90,
      startDate: "2018-11-28",
      endDate: "2019-04-02"
    },
    {
      fee: 199,
      waived: false
    },
    {
      limit: 4,
      fee: 0
    },
    3,
    75000,
    6000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-black/"
  )
];

export default cards;