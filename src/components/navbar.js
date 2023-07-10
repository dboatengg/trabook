import React from 'react';
import data from '../data/data.json';

const Navbar = () => {
  const { logo, linksSection1, linksSection2 } = data.navbar;

  return (
    <nav>
      <div>
        <img src={logo.image} alt={logo.text} />
      </div>
      <div>
        {linksSection1.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
      <div>
        {linksSection2.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
