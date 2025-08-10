import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Seasons = () => {
  return (
    <div className="min-h-screen bg-barrel-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-2xl sm:text-4xl text-beer-gold mb-4 pixel-shadow">
            SEASONS
          </h1>
          <p className="font-mono text-sm text-beer-amber">
            Seasonal events and tournaments
          </p>
        </div>

        <Card className="bg-beer-brown border-4 border-black pixel-shadow">
          <CardHeader>
            <CardTitle className="font-pixel text-lg text-beer-gold text-center">
              SEASONAL EVENTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-barrel-dark border-4 border-beer-gold flex items-center justify-center">
                <span className="font-pixel text-beer-gold text-lg">🌟</span>
              </div>
              <p className="font-mono text-malt-beige text-sm">
                Seasonal events and tournaments coming soon!
              </p>
              <p className="font-mono text-beer-amber text-xs mt-2">
                Participate in special brewing challenges and win exclusive rewards.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Seasons;
