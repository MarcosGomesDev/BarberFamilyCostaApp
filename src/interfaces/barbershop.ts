export interface BarberShop {
  id: string;
  name: string;
  image: string;
  address: string;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  rating?: number;
  totalRatings?: number;
}
