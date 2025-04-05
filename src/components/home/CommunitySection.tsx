
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, User } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-12 bg-zerovortex-light-gray">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Join Our Student Community</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Connect with like-minded students, participate in discussions, and attend events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-zerovortex-purple/20 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-zerovortex-purple" />
              </div>
              <div>
                <CardTitle>Forums & Discussions</CardTitle>
                <CardDescription>Share ideas and get help</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Engage in topic-specific discussions with peers and experts. Share insights, ask questions, and contribute to the knowledge base.
              </p>
              <Link to="/community/forums">
                <Button variant="outline" className="w-full">Browse Forums</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-zerovortex-blue/20 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-zerovortex-blue" />
              </div>
              <div>
                <CardTitle>Events Calendar</CardTitle>
                <CardDescription>Online and offline events</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Discover and participate in educational events, workshops, and meetups. RSVP to upcoming events and stay notified.
              </p>
              <Link to="/events">
                <Button variant="outline" className="w-full">View Events</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-zerovortex-light-purple/40 p-3 rounded-full">
                <User className="h-6 w-6 text-zerovortex-light-purple" />
              </div>
              <div>
                <CardTitle>Student Profiles</CardTitle>
                <CardDescription>Connect with peers</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Create your profile, showcase your interests and skills, and connect with other students with similar academic pursuits.
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full">Create Profile</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
