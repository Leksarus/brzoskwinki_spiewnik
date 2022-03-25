import React, { useContext, useCallback } from 'react'
import styled, { css } from 'styled-components'
import logo from 'assets/logo2.png'
import { Box, Flex } from 'reflexbox/styled-components'
import { rgba } from 'utils/css'
import { FontSizeContext } from './AppWrapper'

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-size: 40px;
  justify-content: space-between;
  ${({ theme: { colors: { secondary } } }) => css`
    border-bottom: 1px solid ${rgba(secondary, 0.1)};
  `}
`

const StyledImage = styled.img`
  height: 40px;
  width: auto;
`

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 0;
  border-radius: 50%;
  margin-left: 30px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  
  ${({ theme: { colors: { primary } } }) => css`
    border: 1px solid ${primary};
    color: ${primary};
  `}
`

export default () => {
  const {fontSize, setFontSize} = useContext(FontSizeContext)

  const increase = useCallback(() => fontSize < 30 && setFontSize(fontSize + 1), [fontSize, setFontSize])
  const decrease = useCallback(() => fontSize > 8 && setFontSize(fontSize - 1), [fontSize, setFontSize])

  return (
    <HeaderStyled >
      <Box>
        <StyledImage src={logo} />
      </Box>
      <Flex>
        <StyledButton onClick={increase}>+</StyledButton>
        <StyledButton onClick={decrease}>-</StyledButton>
      </Flex>
    </HeaderStyled>
  )
}