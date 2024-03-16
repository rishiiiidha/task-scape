import { useState } from 'react';
import Logo from '../assets/logo.png';

const Header = ({ theme, setTheme }) => {


  const handleThemeChange = (newTheme) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="TaskScapeLogo" />
        <span>Task Scape</span>
      </div>
      <div className="themeSelector">
        <span className={`light ${theme === 'light' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('light')}></span>
        <span className={`medium ${theme === 'medium' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('medium')}></span>
        <span className={`dark ${theme === 'dark' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('dark')}></span>
        <span className={`gOne ${theme === 'gOne' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('gOne')}></span>
        <span className={`gTwo ${theme === 'gTwo' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('gTwo')}></span>
        <span className={`gThree ${theme === 'gThree' ? 'activeTheme' : ''}`} onClick={() => handleThemeChange('gThree')}></span>
      </div>
    </header>
  );
};

export default Header;
