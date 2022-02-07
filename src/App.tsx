import React, { useState } from 'react';
import Globals from './global/globalStyles'


import { ThemeProvider } from 'styled-components';

import dark from './global/themes/dark';
import light from './global/themes/light';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App:React.FC = ()=> {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () =>  setTheme(theme.title === 'light' ? dark : light)
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Header toggleTheme={toggleTheme} />
      <Main />
      
    </ThemeProvider>
  )
}

