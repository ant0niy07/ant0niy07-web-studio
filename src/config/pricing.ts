export const platformPortfolioOffer = {
  totalSlots: 3,
  remainingSlots: 3,
  standardPrice: "5 000–25 000 EUR",
  portfolioPrice: "2 500–7 000 EUR",
} as const;

export const clampPlatformSlots = (value: number) =>
  Math.min(
    platformPortfolioOffer.totalSlots,
    Math.max(0, Math.trunc(Number(value) || 0)),
  );

export const getRemainingPlatformSlots = () =>
  clampPlatformSlots(platformPortfolioOffer.remainingSlots);
