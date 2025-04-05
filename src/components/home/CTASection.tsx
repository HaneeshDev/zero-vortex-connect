
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zerovortex-purple to-zerovortex-blue text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Boost Your Learning?</h2>
        <p className="text-xl opacity-90 max-w-[800px] mx-auto mb-8">
          Join thousands of students who are already benefiting from our educational resources and vibrant community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button variant="default" className="bg-white text-zerovortex-purple hover:bg-gray-100 hover:text-zerovortex-purple">
              Create Account
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
