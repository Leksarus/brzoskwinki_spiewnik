import React from 'react'
import styled, { css } from 'styled-components'
import logo from 'assets/logo2.png'
import { Box } from 'reflexbox/styled-components'
import { rgba } from 'utils/css'

const HeaderStyled = styled.header`
  display: flex;
  align-content: center;
  padding: 20px 40px;
  font-size: 26px;
  ${({ theme: { colors: { secondary } } }) => css`
    border-bottom: 1px solid ${rgba(secondary, 0.5)};
  `}
`

const StyledImage = styled.img`
  height: 40px;
  width: auto;
`

export default () => {
  return (
    <HeaderStyled >
      <Box>
        <StyledImage src={logo} />
      </Box>
      <Box ml={20}>Jebany śpiewnik</Box>
    </HeaderStyled>
  )
}