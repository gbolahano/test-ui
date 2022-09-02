export const CARD_ICONS = {
  visa: "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
  mastercard: "https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg",
};

type CardProvider = keyof typeof CARD_ICONS;

type Card = {
  name: string;
  expiry: string;
  provider: CardProvider;
};

export const cardData: Card[] = [
  {
    name: "Visa ending in 1234",
    expiry: "06/24",
    provider: "visa",
  },
  {
    name: "Mastercard ending in 1234",
    expiry: "06/24",
    provider: "mastercard",
  },
];