
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  id: string;
  name: string;
  university: string;
  testimonial: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    university: 'Stanford University',
    testimonial: 'Zerovortex has been an invaluable resource for my studies. The software data bundle saved me countless hours of research and the community is incredibly supportive.',
    initials: 'AJ',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    university: 'MIT',
    testimonial: 'The data bundles provide comprehensive, well-organized resources that have significantly enhanced my learning experience. The community events are also fantastic!',
    initials: 'PS',
  },
  {
    id: '3',
    name: 'Marcus Wei',
    university: 'UC Berkeley',
    testimonial: 'I\'ve attended several online events through Zerovortex and they\'ve all been excellent. The platform makes it easy to connect with peers and industry professionals.',
    initials: 'MW',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-zerovortex-purple/5">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">What Students Say</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Hear from students who have used our platform and joined our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-zerovortex-purple text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
