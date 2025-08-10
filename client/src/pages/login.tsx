import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen bg-barrel-dark py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-2xl sm:text-4xl text-beer-gold mb-4 pixel-shadow">
            LOGIN
          </h1>
          <p className="font-mono text-sm text-beer-amber">
            Enter your credentials to access the brewery
          </p>
        </div>

        <Card className="bg-beer-brown border-4 border-black pixel-shadow">
          <CardHeader>
            <CardTitle className="font-pixel text-lg text-beer-gold text-center">
              BREWER ACCESS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="font-pixel text-xs text-malt-beige">
                  USERNAME
                </Label>
                <Input
                  id="username"
                  type="text"
                  className="mt-1 bg-barrel-dark border-2 border-beer-gold text-malt-beige font-mono"
                  placeholder="Enter username"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="font-pixel text-xs text-malt-beige">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="mt-1 bg-barrel-dark border-2 border-beer-gold text-malt-beige font-mono"
                  placeholder="Enter password"
                />
              </div>

              <Button
                type="submit"
                className="w-full retro-button font-pixel text-sm text-black py-3"
              >
                LOGIN
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="font-mono text-xs text-beer-amber">
                Don't have an account? Registration coming soon!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
