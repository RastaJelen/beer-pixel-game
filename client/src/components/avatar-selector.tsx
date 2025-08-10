const AvatarSelector = () => {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="bg-beer-brown border-4 border-black p-6 sm:p-8 pixel-shadow">
        <div className="text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 bg-barrel-dark border-4 border-beer-gold flex items-center justify-center">
            <span className="font-pixel text-xs sm:text-sm text-beer-gold">NFT</span>
          </div>
          <p className="font-pixel text-xs sm:text-sm text-malt-beige mb-2">CHOOSE YOUR</p>
          <p className="font-pixel text-xs sm:text-sm text-beer-gold">CONNOISSEUR</p>
          <p className="font-mono text-xs text-beer-amber mt-2">Coming Soon: $BEER Collection</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelector;
