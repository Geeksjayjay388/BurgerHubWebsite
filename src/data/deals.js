// data/deals.js
export const deals = [
  {
    id: 1,
    title: "HAPPY HOUR",
    description: "50% off all drinks",
    time: "3PM - 6PM Daily",
    price: null,
    originalPrice: null,
    discount: "50% OFF",
    tag: "DAILY DEAL",
    highlight: true,
    items: ["🥤", "🍹", "☕"],
    expiry: "Ongoing"
  },
  {
    id: 2,
    title: "FAMILY BUNDLE",
    description: "4 Burgers + Large Fries + 4 Drinks",
    originalPrice: 45.96,
    price: 32.99,
    discount: "SAVE $12",
    tag: "BEST VALUE",
    popular: true,
    items: ["🍔🍔🍔🍔", "🍟", "🥤🥤🥤🥤"],
    expiry: "Dec 31, 2024"
  },
  {
    id: 3,
    title: "DOUBLE DATE",
    description: "2 Burgers + 2 Sides + 2 Drinks",
    originalPrice: 34.97,
    price: 24.99,
    discount: "28% OFF",
    tag: "PERFECT PAIR",
    items: ["🍔🍔", "🍟🧀", "🥤🥤"],
    expiry: "Dec 25, 2024"
  }
];