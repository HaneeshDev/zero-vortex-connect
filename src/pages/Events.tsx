
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'online' | 'offline';
  registeredCount: number;
}

const events: Event[] = [
  {
    id: 'event-1',
    title: 'Introduction to Machine Learning Workshop',
    description: 'A beginner-friendly workshop covering the fundamentals of machine learning algorithms.',
    date: '2025-04-15',
    time: '10:00 AM - 12:00 PM EST',
    location: 'Zoom Webinar',
    type: 'online',
    registeredCount: 45
  },
  {
    id: 'event-2',
    title: 'Web Development Hackathon',
    description: 'Join us for a 24-hour coding challenge to build innovative web applications.',
    date: '2025-04-20',
    time: '9:00 AM - 9:00 AM EST',
    location: 'Tech Campus, Building A',
    type: 'offline',
    registeredCount: 32
  },
  {
    id: 'event-3',
    title: 'Cybersecurity Panel Discussion',
    description: 'Industry experts discuss current trends and challenges in cybersecurity.',
    date: '2025-04-25',
    time: '3:00 PM - 5:00 PM EST',
    location: 'Microsoft Teams',
    type: 'online',
    registeredCount: 67
  },
  {
    id: 'event-4',
    title: 'Data Science Career Fair',
    description: 'Connect with companies hiring for data science roles and get resume feedback.',
    date: '2025-05-05',
    time: '1:00 PM - 5:00 PM EST',
    location: 'University Conference Center',
    type: 'offline',
    registeredCount: 89
  },
  {
    id: 'event-5',
    title: 'Cloud Computing Workshop Series',
    description: 'Learn AWS, Azure, and GCP fundamentals in this three-part workshop series.',
    date: '2025-05-12',
    time: '4:00 PM - 6:00 PM EST',
    location: 'Google Meet',
    type: 'online',
    registeredCount: 54
  },
  {
    id: 'event-6',
    title: 'Student Project Showcase',
    description: 'Students present their innovative projects and receive feedback from peers and industry mentors.',
    date: '2025-05-20',
    time: '2:00 PM - 6:00 PM EST',
    location: 'Innovation Hub, Room 201',
    type: 'offline',
    registeredCount: 38
  },
];

const Events = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Events Calendar</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Discover and participate in educational events, workshops, and meetups
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="offline">In-Person</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {events.map((event) => (
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
                  <CardFooter className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground w-full text-center">
                      {event.registeredCount} people registered
                    </p>
                    <Link to={`/events/${event.id}`} className="w-full">
                      <Button variant="default" className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                        RSVP Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {events
                .filter(event => event.type === 'online')
                .map((event) => (
                  <Card key={event.id} className="flex flex-col card-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant="default" className="bg-zerovortex-blue">Online</Badge>
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
                    <CardFooter className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground w-full text-center">
                        {event.registeredCount} people registered
                      </p>
                      <Link to={`/events/${event.id}`} className="w-full">
                        <Button variant="default" className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                          RSVP Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="offline">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {events
                .filter(event => event.type === 'offline')
                .map((event) => (
                  <Card key={event.id} className="flex flex-col card-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant="outline" className="bg-zerovortex-purple/10 text-zerovortex-purple">In-Person</Badge>
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
                    <CardFooter className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground w-full text-center">
                        {event.registeredCount} people registered
                      </p>
                      <Link to={`/events/${event.id}`} className="w-full">
                        <Button variant="default" className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                          RSVP Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Events;
