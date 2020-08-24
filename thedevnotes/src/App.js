import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Utilities / Store
import history from './utills/history';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

import NavCondition from './components/Navigation/NavBarCondition';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? darkMode : lightMode;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <div className='App'>
          <GlobalStyles />
          <NavCondition theme={theme} toggleTheme={toggleTheme} />
          <ComingSoon theme={theme} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
