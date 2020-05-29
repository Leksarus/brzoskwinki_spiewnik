import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled, { ThemeProvider, css } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import 'typeface-patrick-hand-sc'
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
  body {
    font-family: 'Patrick Hand SC', cursive;
    font-weight: 400;
		letter-spacing: 0.5rem;
		user-select: none;
  }
`

const AppWrapper = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<StyledAppWrapper>
				<GlobalStyles />
				{children}
			</StyledAppWrapper>
		</ThemeProvider>
	)
}

export default AppWrapper
