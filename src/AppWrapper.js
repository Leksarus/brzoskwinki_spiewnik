import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled, { ThemeProvider, css } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import 'typeface-lato'
import theme from './theme'

const StyledAppWrapper = styled(Flex)`
	max-width: 100vw;
	min-height: 100vh;
  height: 100%;
  background-color: rgba(26, 0, 0);
  flex-direction: column;
  color: rgb(245, 171, 0);
  
	${({
		theme: {
			colors: { background, primary },
		},
	}) => css`
		background-color: ${background};
		color: ${primary};
	`}
`

const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${({ size }) => size}px;
  }
  body {
    font-family: 'Lato';
    font-weight: 400;
		letter-spacing: 0.5rem;
    user-select: none;
  }
`

export const FontSizeContext = React.createContext()

const AppWrapper = ({ children }) => {
  const [fontSize, setFontSize] = useState(16)

	return (
		<ThemeProvider theme={theme}>
			<StyledAppWrapper>
        <GlobalStyles size={fontSize} />
        <FontSizeContext.Provider value={{fontSize, setFontSize}}>
				  {children}
        </FontSizeContext.Provider>
			</StyledAppWrapper>
		</ThemeProvider>
	)
}

export default AppWrapper
