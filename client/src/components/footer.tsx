const Footer = () => {
  const footerSections = [
    {
      title: "GAME INFO",
      links: [
        { text: "How to Play", href: "#" },
        { text: "Game Rules", href: "#" },
        { text: "FAQ", href: "#" },
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        { text: "Discord", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "Reddit", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-barrel-dark border-t-4 border-beer-brown py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-pixel text-sm text-beer-gold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="font-mono text-xs text-malt-beige hover:text-beer-amber transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t-2 border-beer-brown text-center">
          <p className="font-mono text-xs text-beer-amber">© 2024 Beer Pixel Game. All rights reserved.</p>
          <p className="font-pixel text-xs text-malt-beige mt-2">Made with 🍺 and pixels</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
