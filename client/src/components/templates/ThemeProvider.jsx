
import {  createTheme, ThemeProvider } from '@mui/material';
import React, { createContext } from 'react';

const ThemeContext=createContext(null)

export default function ThemeContextProvider({children}) {
    const theme=createTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:"unset"
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        paddingTop:0,
                    }
                }
            }
        }

    })
  return (
      <ThemeContext.Provider>
          <ThemeProvider theme={theme} >
              {children}

          </ThemeProvider>
      </ThemeContext.Provider>
  )
}
