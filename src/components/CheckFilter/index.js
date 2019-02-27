const CheckFilter = ({
  card,
  children,
  filters,
  filteredBank,
  filteredType,
  filteredRewards,
}) => {
  let showCard = true;

  // TODO: Refactor Logic
  // NB: Used letter variables to reduce amount of lines, POOR LEGIBILITY
  const cardRewardsHasFilter = new Set(
    card.rewards.map(reward => filteredRewards.has(reward.type))
  );

  // Conditions
  const A0 = filteredBank.size > 0;
  const B0 = filteredType.size > 0;
  const C0 = filteredRewards.size > 0;
  const D0 = filters.feesWaived.Annual;
  const E0 = filters.feesWaived.Foreign;
  // Checks
  const A1 = filteredBank.has(card.bank);
  const B1 = filteredType.has(card.type);
  const C1 = cardRewardsHasFilter.has(true);
  const D1 = D0 && card.annual.waived;
  const E1 = E0 && card.foreign === 0;

  // Any Filters
  if (A0 || B0 || C0 || D0 || E0) {
    showCard = A1 || B1 || C1 || D1 || E1;
  }

  // Two Filters (10 combinations)
  if (A0 && B0) {
    showCard = A1 && B1;
  }
  if (A0 && C0) {
    showCard = A1 && C1;
  }
  if (A0 && D0) {
    showCard = A1 && D1;
  }
  if (A0 && E0) {
    showCard = A1 && E1;
  }
  if (B0 && C0) {
    showCard = B1 && C1;
  }
  if (B0 && D0) {
    showCard = B1 && C1;
  }
  if (B0 && E0) {
    showCard = B1 && E1;
  }
  if (C0 && D0) {
    showCard = C1 && D1;
  }
  if (C0 && E0) {
    showCard = C1 && E1;
  }
  if (D0 && E0) {
    showCard = D1 && E1;
  }

  // Three Filters (10 combinations)
  if (A0 && B0 && C0) {
    showCard = A1 && B1 && C1;
  }
  if (A0 && B0 && D0) {
    showCard = A1 && B1 && D1;
  }
  if (A0 && B0 && E0) {
    showCard = A1 && B1 && E1;
  }
  if (A0 && C0 && D0) {
    showCard = A1 && D1 && D1;
  }
  if (A0 && C0 && E0) {
    showCard = A1 && C1 && E1;
  }
  if (A0 && D0 && E0) {
    showCard = A1 && D1 && E1;
  }
  if (B0 && C0 && D0) {
    showCard = B1 && C1 && D1;
  }
  if (B0 && C0 && E0) {
    showCard = B1 && C1 && E1;
  }
  if (B0 && D0 && E0) {
    showCard = B1 && D1 && E1;
  }
  if (C0 && D0 && E0) {
    showCard = C1 && D1 && E1;
  }

  // Four Filters (5 combinations)
  if (A0 && B0 && C0 && D0) {
    showCard = A1 && B1 && C1 && D1;
  }
  if (A0 && B0 && C0 && E0) {
    showCard = A1 && B1 && C1 && E1;
  }
  if (A0 && B0 && D0 && E0) {
    showCard = A1 && B1 && D1 && E1;
  }
  if (A0 && C0 && D0 && E0) {
    showCard = A1 && C1 && D1 && E1;
  }
  if (B0 && C0 && D0 && E0) {
    showCard = B1 && C1 && D1 && E1;
  }

  // Five Filters
  if (A0 && B0 && C0 && D0 && E0) {
    showCard = A1 && B1 && C1 && D1 && E1;
  }

  return showCard && children;
};

export default CheckFilter;
