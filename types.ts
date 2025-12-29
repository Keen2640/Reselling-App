
export type Category = 'clothing' | 'furniture' | 'electronics';

export interface Listing {
  id: string;
  title: string;
  price: number;
  category: Category;
  imageUrl: string;
  views: number;
  status: 'active' | 'sold';
  createdAt: string;
}

export interface User {
  name: string;
  handle: string;
  rating: number;
  reviewsCount: number;
  joinedDate: string;
  avatar: string;
}

export enum Tab {
  HOME = 'home',
  MESSAGES = 'messages',
  SELL = 'sell',
  PROFILE = 'profile'
}
