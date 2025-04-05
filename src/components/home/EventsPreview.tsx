
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'online' | 'offline';
}

const upcomingEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Introduction to Machine Learning Workshop',
    description: 'A beginner-friendly workshop covering the fundamentals of machine learning algorithms.',
    date: '2025-04-15',
    time: '10:00 AM - 12:00 PM EST',
    location: 'Zoom Webinar',
    type: 'online'
  },
  {
    id: 'event-2',
    title: 'Web Development Hackathon',
    description: 'Join us for a 24-hour coding challenge to build innovative web applications.',
    date: '2025-04-20',
    time: '9:00 AM - 9:00 AM EST',
    location: 'Tech Campus, Building A',
    type: 'offline'
  },
  {
    id: 'event-3',
    title: 'Cybersecurity Panel Discussion',
    description: 'Industry experts discuss current trends and challenges in cybersecurity.',
    date: '2025-04-25',
    time: '3:00 PM - 5:00 PM EST',
    location: 'Microsoft Teams',
    type: 'online'
  }
];

const EventsPreview = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Join educational events and connect with the community
            </p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-zerovortex-purple text-zerovortex-purple hover:bg-zerovortex-purple hover:text-white">
              View All Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="flex flex-col card-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant={event.type === 'online' ? 'default' : 'outline'} className={event.type === 'online' ? 'bg-zerovortex-blue' : 'bg-zerovortex-purple/10 text-zerovortex-purple'}>
                    {event.type === 'online' ? 'Online' : 'In-Person'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/events/${event.id}`} className="w-full">
                  <Button variant="default" className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                    RSVP Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
