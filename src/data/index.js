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
  link
});

const cards = [
  createData(
    "AMEX",
    "AMEX Altitude Black (Westpac Bundle)",
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
    3,
    75000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-black/"
  ),
  createData(
    "AMEX",
    "AMEX Altitude Platinum (Westpac Bundle)",
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
    3,
    30000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/americanexpress-platinum/"
  ),
  createData(
    "StGeorge",
    "St. George Amplify Signature",
    "VISA",
    [{ type: "Qantas", fee: 0 }],
    {
      points: 80000,
      spend: 4000,
      dayLimit: 90,
      startDate: "2019-01-21",
      endDate: "2019-03-06"
    },
    {
      fee: 279,
      waived: true
    },
    3,
    75000,
    12,
    "https://www.stgeorge.com.au/personal/credit-cards/affiliate/amplify-signature/qantasexclusive?cid=sc%3Acc%3AFY19_1901%3Aoth%3Aqf%3Adtop&promoCode=Q2"
  ),
  createData(
    "StGeorge",
    "St. George Amplify Signature",
    "VISA",
    [{ type: "Flexible", fee: 0 }],
    {
      points: 100000,
      spend: 12000,
      dayLimit: 365,
      startDate: "2019-01-24",
      endDate: "2019-05-22"
    },
    {
      fee: 179,
      waived: false
    },
    3,
    75000,
    12,
    "https://www.stgeorge.com.au/personal/credit-cards/rewards/amplify-signature"
  ),
  createData(
    "Westpac",
    "Westpac Altitude Black",
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
    3,
    75000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-black/"
  ),
  createData(
    "Westpac",
    "Westpac Altitude Platinum",
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
    3,
    30000,
    12,
    "https://www.westpac.com.au/personal-banking/credit-cards/reward/altitude-platinum/"
  )
];

export default cards;
