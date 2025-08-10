import { useState } from "react";
import AvatarSelector from "@/components/avatar-selector";
import GameFeatures from "@/components/game-features";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnterGame = () => {
    // TODO: Implement game entry logic
    console.log("Entering game...");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Brewery Scene */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          filter: "sepia(0.8) contrast(1.2) brightness(0.7)",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Game Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-pixel text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-beer-gold mb-4 animate-pixel-pulse pixel-shadow">
            BEER PIXEL
          </h1>
          <h2 className="font-pixel text-lg sm:text-2xl md:text-3xl text-malt-beige mb-2 pixel-shadow">
            GAME
          </h2>
          <p className="font-mono text-sm sm:text-base text-beer-amber max-w-md mx-auto">
            Brew your way to legendary status in this retro pixel adventure!
          </p>
        </div>

        {/* Avatar Selector */}
        <AvatarSelector />

        {/* Enter Game Button */}
        <div className="mb-8">
          <button
            className={`retro-button font-pixel text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 text-black transition-all duration-200 ${
              isHovering ? "animate-pixel-bounce" : ""
            }`}
            onClick={handleEnterGame}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            ENTER GAME
          </button>
        </div>

        {/* Game Features Preview */}
        <GameFeatures />

        {/* Beta Notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-barrel-dark border-4 border-beer-gold p-4 inline-block pixel-shadow">
            <p className="font-pixel text-xs text-beer-gold mb-1">BETA VERSION</p>
            <p className="font-mono text-xs text-malt-beige">Building the future of brewing games</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
