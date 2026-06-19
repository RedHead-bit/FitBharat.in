import React from 'react';
// Import as a React Component. Note the syntax.
import { ReactComponent as FitBharatLogoSvg } from './assets/FitBharatLogo.svg';

// Optional: A container to control size if needed
const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  // You can add hover effects here too if you want to trigger animation on hover
`;

const Header = () => {
  return (
    <header className="app-header">
      <LogoContainer>
         {/* You can pass standard SVG props like className or styles to it */}
        <FitBharatLogoSvg className="app-logo" aria-label="FitBharat Logo" />
      </LogoContainer>
      <h1>FitBharat</h1>
    </header>
  );
};

export default Header;


