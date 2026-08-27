export const platformPortfolioOffer = {
  totalSlots: 3,
  remainingSlots: 3,
  standardPrice: {
    pl: "5 000–25 000 EUR",
    ru: "500 тыс.–2,5 млн руб. / 200 тыс.–1,2 млн грн",
  },
  portfolioPrice: {
    pl: "2 500–7 000 EUR",
    ru: "250–700 тыс. руб. / 100–340 тыс. грн",
  },
} as const;

export const packagePrices = {
  basic: {
    pl: "1 000 PLN",
    ru: "20 тыс. руб. / 10 тыс. грн",
  },
  individual: {
    pl: "od 2 500 PLN",
    ru: "от 50 тыс. руб. / 25 тыс. грн",
  },
} as const;

export const clampPlatformSlots = (value: number) =>
  Math.min(
    platformPortfolioOffer.totalSlots,
    Math.max(0, Math.trunc(Number(value) || 0)),
  );

export const getRemainingPlatformSlots = () =>
  clampPlatformSlots(platformPortfolioOffer.remainingSlots);
