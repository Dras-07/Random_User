import React from 'react'
import useDarkMode from './useDarkMode';
import App from '../App';
import "../App.css";
import styled,{ThemeProvider} from 'styled-components';
import Toggle from './Toggle.js';
import {GlobalStyles,lightTheme,darkTheme} from './globalStyles';
//import Header from './Header';
const Container = styled.div`

`;
function Content() {

    const [theme,toggleTheme] = useDarkMode();
    const themeMode=theme==='light' ? lightTheme: darkTheme;
    console.log(theme);
  return (
      <ThemeProvider theme={themeMode}>
          <Container>
      <GlobalStyles />
      <Toggle  theme={theme} toggleTheme={toggleTheme} />
      <App />
    </Container>
      </ThemeProvider>
    
  );
}
export default Content;