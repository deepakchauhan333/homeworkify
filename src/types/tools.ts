export interface Tool {
  name: string;
  description: string;
  image: string;
  rating: number;
  tags: string[];
  isNew: boolean;
  pricing: 'free' | 'paid' | 'freemium';
}

export interface FilterOptions {
  category: string;
  pricing: string;
  sort: string;
}