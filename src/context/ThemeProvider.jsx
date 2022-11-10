import React, { useContext, useState, useEffect } from 'react';
import { changeCssVars } from '@services/changeCssVars';
import { getLocalStorage, setLocalStorage } from '@utils/localStorage';

const ThemeContext = React.createContext()

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEUTRAL = 'neutral';


export const ThemeProvider = ({children, ...props}) => {
  const [ theme, changeTheme ] = useState(null);

  const setTheme = (themeName) => {
    changeTheme(themeName);
    changeCssVars(themeName);
  }

  useEffect(() => {
    const {localTheme} = getLocalStorage('theme');
      if (localTheme) {
        setTheme(localTheme)
      } else {
        setTheme(THEME_NEUTRAL);
        setLocalStorage('theme', {localTheme: THEME_NEUTRAL})
      }
  }, [])

  return ( 
    <ThemeContext.Provider 
      value={{ theme, setTheme }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;