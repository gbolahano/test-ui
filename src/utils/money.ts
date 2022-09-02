export const formatMoney = (currency: string = "usd", unitAmount: number) => {
  let price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format((unitAmount || 0) / 100);
  return price;
};
