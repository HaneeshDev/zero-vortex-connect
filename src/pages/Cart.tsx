
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Product } from '@/types/cart';

// This is the same product data used in Products.tsx
const products: Product[] = [
  {
    id: 'software-bundle',
    name: 'Software Development Data Bundle',
    description: 'Comprehensive resources for aspiring software developers including tutorials, projects, and reference materials.',
    price: 49.99,
    category: 'Software',
    imagePlaceholder: 'bg-blue-500/20'
  },
  {
    id: 'hardware-bundle',
    name: 'Hardware Engineering Data Bundle',
    description: 'In-depth materials on hardware design, circuitry, and embedded systems development.',
    price: 59.99,
    category: 'Hardware',
    imagePlaceholder: 'bg-green-500/20'
  },
  {
    id: 'data-science-bundle',
    name: 'Data Science Bundle',
    description: 'Resources for data analysis, machine learning algorithms, and visualization techniques.',
    price: 69.99,
    category: 'Data Science',
    imagePlaceholder: 'bg-purple-500/20'
  },
  {
    id: 'web-dev-bundle',
    name: 'Web Development Bundle',
    description: 'Complete resources for front-end and back-end web development with modern frameworks.',
    price: 54.99,
    category: 'Software',
    imagePlaceholder: 'bg-yellow-500/20'
  },
  {
    id: 'mobile-dev-bundle',
    name: 'Mobile App Development Bundle',
    description: 'Tutorials and resources for iOS and Android development with React Native and Flutter.',
    price: 64.99,
    category: 'Software',
    imagePlaceholder: 'bg-red-500/20'
  },
  {
    id: 'ai-ml-bundle',
    name: 'AI & Machine Learning Bundle',
    description: 'Advanced materials on artificial intelligence and machine learning concepts and applications.',
    price: 79.99,
    category: 'Data Science',
    imagePlaceholder: 'bg-indigo-500/20'
  },
];

const Cart = () => {
  const { cartItems, isLoading, updateCartItem, removeCartItem, clearCart } = useCart();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!loading && !user) {
      toast.error('Please sign in to view your cart');
      navigate('/login');
    }
  }, [user, loading, navigate]);

  // Find product details for each cart item
  const cartItemsWithProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.product_id);
    return {
      ...item,
      product: product || {
        id: item.product_id,
        name: 'Unknown Product',
        description: 'This product is no longer available',
        price: 0,
        category: 'Unknown',
        imagePlaceholder: 'bg-gray-300'
      }
    };
  });

  const subtotal = cartItemsWithProducts.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);

  if (loading || !user) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zerovortex-purple"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-16">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zerovortex-purple"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container py-16">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <Card className="w-full">
            <CardContent className="py-10">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Looks like you haven't added any products yet.</p>
                <Link to="/products">
                  <Button className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {cartItemsWithProducts.map((item) => (
                  <div key={item.id} className="mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className={`h-16 w-16 rounded ${item.product.imagePlaceholder} flex items-center justify-center`}>
                        <span className="sr-only">{item.product.name}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.product.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartItem.mutate({ itemId: item.id, quantity: item.quantity - 1 })}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartItem.mutate({ itemId: item.id, quantity: item.quantity + 1 })}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500"
                          onClick={() => removeCartItem.mutate(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </div>
                ))}

                <div className="flex justify-end mt-4">
                  <Button
                    variant="outline"
                    className="text-red-500"
                    onClick={() => clearCart.mutate()}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>${(subtotal * 0.07).toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(subtotal * 1.07).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
