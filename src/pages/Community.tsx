
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DiscussionThread {
  id: string;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  category: string;
}

const discussionThreads: DiscussionThread[] = [
  {
    id: 'thread-1',
    title: 'Resources for learning React and Next.js',
    author: 'AlexJ',
    replies: 23,
    lastActivity: '2 hours ago',
    category: 'Software Development'
  },
  {
    id: 'thread-2',
    title: 'Tips for hardware projects on a budget',
    author: 'EmilyT',
    replies: 15,
    lastActivity: '5 hours ago',
    category: 'Hardware Engineering'
  },
  {
    id: 'thread-3',
    title: 'Machine Learning study group',
    author: 'MarcusW',
    replies: 42,
    lastActivity: '1 day ago',
    category: 'Data Science'
  },
  {
    id: 'thread-4',
    title: 'Best resources in the Web Dev bundle?',
    author: 'SophieL',
    replies: 19,
    lastActivity: '3 days ago',
    category: 'Software Development'
  },
  {
    id: 'thread-5',
    title: 'Looking for Arduino project partners',
    author: 'RyanK',
    replies: 8,
    lastActivity: '1 week ago',
    category: 'Hardware Engineering'
  },
];

const popularCategories = [
  'Software Development',
  'Hardware Engineering',
  'Data Science',
  'Study Groups',
  'Project Collaboration',
  'Career Advice',
  'Events Discussion',
];

const Community = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Student Community</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Connect with fellow students, share knowledge, and participate in discussions
          </p>
        </div>

        <Tabs defaultValue="forums" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>
          
          <TabsContent value="forums">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Recent Discussions</h2>
                  <Link to="/community/new-topic">
                    <Button className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">New Topic</Button>
                  </Link>
                </div>

                {discussionThreads.map((thread) => (
                  <Card key={thread.id} className="mb-4 card-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{thread.title}</CardTitle>
                        <Badge variant="outline">{thread.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{thread.author}</span>
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="mr-4">{thread.replies} replies</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{thread.lastActivity}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/community/thread/${thread.id}`} className="w-full">
                        <Button variant="outline" className="w-full">View Discussion</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
                
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>

              <div>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {popularCategories.map((category) => (
                        <div key={category} className="flex justify-between items-center">
                          <Link 
                            to={`/community/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm hover:text-zerovortex-purple transition-colors"
                          >
                            {category}
                          </Link>
                          <Badge variant="outline" className="text-xs">{Math.floor(Math.random() * 100) + 1}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 card-shadow">
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Be respectful to all community members</li>
                      <li>Stay on topic in discussions</li>
                      <li>No spam or self-promotion</li>
                      <li>Cite sources when sharing information</li>
                      <li>Report inappropriate content</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Connect with Community Members</h2>
              <p className="text-muted-foreground mb-8">
                Create an account or log in to view and connect with other members
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/login">
                  <Button className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Community;
