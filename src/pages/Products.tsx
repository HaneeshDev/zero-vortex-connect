
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imagePlaceholder: string;
}

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

const Products = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Educational Data Bundles</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            High-quality educational resources curated specifically for US-based students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col card-shadow">
              <div className={`h-48 w-full rounded-t-lg ${product.imagePlaceholder} flex items-center justify-center`}>
                <span className="text-lg font-semibold text-primary-foreground/70">{product.name}</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10">{product.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
                <Link to={`/products/${product.id}`}>
                  <Button className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
