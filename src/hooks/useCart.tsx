
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CartItem, Product } from '@/types/cart';

export function useCart() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Get cart ID
  const fetchCartId = async (): Promise<string | null> => {
    if (!user) return null;

    const { data, error } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching cart:', error);
      return null;
    }

    return data?.id || null;
  };

  // Get cart with items
  const fetchCartItems = async (): Promise<CartItem[]> => {
    if (!user) return [];

    const cartId = await fetchCartId();
    if (!cartId) return [];

    const { data, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('cart_id', cartId);

    if (error) {
      console.error('Error fetching cart items:', error);
      return [];
    }

    return data || [];
  };

  // Query to get cart items
  const cartItemsQuery = useQuery({
    queryKey: ['cartItems', user?.id],
    queryFn: fetchCartItems,
    enabled: !!user,
  });

  // Add item to cart
  const addToCart = useMutation({
    mutationFn: async (product: { id: string, quantity?: number }) => {
      if (!user) {
        toast.error('Please sign in to add items to your cart');
        return null;
      }

      const cartId = await fetchCartId();
      if (!cartId) {
        toast.error('Error finding your cart');
        return null;
      }

      // Check if product already in cart
      const { data: existingItems } = await supabase
        .from('cart_items')
        .select('*')
        .eq('cart_id', cartId)
        .eq('product_id', product.id);

      if (existingItems && existingItems.length > 0) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ 
            quantity: existingItems[0].quantity + (product.quantity || 1),
            updated_at: new Date().toISOString()
          })
          .eq('id', existingItems[0].id);

        if (error) {
          throw error;
        }
        return 'updated';
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart_items')
          .insert({
            cart_id: cartId,
            product_id: product.id,
            quantity: product.quantity || 1
          });

        if (error) {
          throw error;
        }
        return 'added';
      }
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
      toast.success(result === 'added' ? 'Item added to cart' : 'Cart updated');
    },
    onError: (error) => {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    }
  });

  // Update cart item quantity
  const updateCartItem = useMutation({
    mutationFn: async ({ itemId, quantity }: { itemId: string, quantity: number }) => {
      if (!user) return null;

      if (quantity <= 0) {
        return removeCartItem.mutateAsync(itemId);
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ 
          quantity,
          updated_at: new Date().toISOString()
        })
        .eq('id', itemId);

      if (error) throw error;
      return 'updated';
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
    onError: (error) => {
      console.error('Error updating cart:', error);
      toast.error('Failed to update cart');
    }
  });

  // Remove item from cart
  const removeCartItem = useMutation({
    mutationFn: async (itemId: string) => {
      if (!user) return null;

      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;
      return 'removed';
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
      toast.success('Item removed from cart');
    },
    onError: (error) => {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item');
    }
  });

  // Clear cart
  const clearCart = useMutation({
    mutationFn: async () => {
      if (!user) return null;
      
      const cartId = await fetchCartId();
      if (!cartId) return null;

      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cartId);

      if (error) throw error;
      return 'cleared';
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
      toast.success('Cart cleared');
    },
    onError: (error) => {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
    }
  });

  return {
    cartItems: cartItemsQuery.data || [],
    isLoading: cartItemsQuery.isLoading,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
  };
}
