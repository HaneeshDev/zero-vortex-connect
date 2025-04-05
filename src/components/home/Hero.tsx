
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-zerovortex-light-purple/20 to-zerovortex-light-blue/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Ultimate Student Success Platform
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Zerovortex combines premium educational resources with a vibrant student community.
                Shop data bundles, join events, and connect with peers all in one place.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/products">
                <Button className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                  Browse Products
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-xl card-shadow bg-gradient-to-tr from-zerovortex-purple to-zerovortex-blue p-1">
              <div className="absolute inset-0 bg-white rounded-lg m-0.5 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="bg-zerovortex-light-gray rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="h-24 bg-zerovortex-purple/20 rounded-md mb-2"></div>
                    <div className="h-4 bg-zerovortex-purple/30 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-zerovortex-purple/20 rounded w-1/2"></div>
                  </div>
                  <div className="bg-zerovortex-light-gray rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <div className="h-24 bg-zerovortex-blue/20 rounded-md mb-2"></div>
                    <div className="h-4 bg-zerovortex-blue/30 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-zerovortex-blue/20 rounded w-1/2"></div>
                  </div>
                  <div className="bg-zerovortex-light-gray rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <div className="h-24 bg-zerovortex-light-purple/40 rounded-md mb-2"></div>
                    <div className="h-4 bg-zerovortex-light-purple/50 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-zerovortex-light-purple/40 rounded w-1/2"></div>
                  </div>
                  <div className="bg-zerovortex-light-gray rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    <div className="h-24 bg-zerovortex-light-blue/40 rounded-md mb-2"></div>
                    <div className="h-4 bg-zerovortex-light-blue/50 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-zerovortex-light-blue/40 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
