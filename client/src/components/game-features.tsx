const GameFeatures = () => {
  const features = [
    {
      icon: "🍺",
      title: "BREWING",
      description: "Craft legendary brews",
      bgColor: "bg-hops-green",
    },
    {
      icon: "💰",
      title: "TRADING",
      description: "Build your empire",
      bgColor: "bg-beer-gold",
    },
    {
      icon: "🏆",
      title: "COMPETE",
      description: "Seasonal tournaments",
      bgColor: "bg-beer-amber",
    },
    {
      icon: "🎯",
      title: "COLLECT",
      description: "Rare ingredients",
      bgColor: "bg-hops-green",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8 sm:mt-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-beer-brown border-4 border-black p-4 pixel-shadow hover:translate-y-[-2px] transition-transform duration-200"
        >
          <div className="text-center">
            <div
              className={`w-12 h-12 mx-auto mb-3 ${feature.bgColor} border-2 border-black flex items-center justify-center`}
            >
              <span className="font-pixel text-xs">{feature.icon}</span>
            </div>
            <h3 className="font-pixel text-xs text-beer-gold mb-2">{feature.title}</h3>
            <p className="font-mono text-xs text-malt-beige">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameFeatures;
