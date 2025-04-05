
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import ZerovortexLogo from '@/components/ZerovortexLogo';

const Login = () => {
  return (
    <Layout>
      <div className="container flex items-center justify-center py-16">
        <Card className="w-full max-w-md card-shadow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ZerovortexLogo className="h-10 w-10" />
            </div>
            <CardTitle className="text-2xl">Sign In to Zerovortex</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-zerovortex-purple hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">Sign In</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-zerovortex-purple hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
