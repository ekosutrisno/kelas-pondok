export interface Feature{
    icons: string;
    title: string;
    description: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
}