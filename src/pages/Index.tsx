
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CommunitySection from '@/components/home/CommunitySection';
import EventsPreview from '@/components/home/EventsPreview';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CommunitySection />
      <EventsPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
