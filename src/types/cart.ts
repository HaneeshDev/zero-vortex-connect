
export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  cart_id: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imagePlaceholder: string;
}

export interface CartItemWithProduct extends CartItem {
  product: Product;
}
