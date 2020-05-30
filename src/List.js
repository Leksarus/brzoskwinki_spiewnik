import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'reflexbox/styled-components'
import texts from './config'
import {
  NavLink
} from "react-router-dom";

const List = styled(Flex)`
  padding: 20px;
  flex-direction: column;
  align-items: center;
`

const Item = styled(Box)`
  font-size: 1.3rem;
  margin-right: 20px;
  margin-top: 2rem;

  a {
    ${({ theme: { colors: { primary } } }) => css`
      color: ${primary};
      text-decoration: none;
      :active {
        color: blue;
      }
    `}
  }
`

export default () => {
  return (
    <List>
      {texts.map(el => (<Item key={el.name}>
        <NavLink
          to={`/preview/${el.name}`}
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(239, 37, 40)"
          }}
        >
          {el.name}
        </NavLink>
      </Item>))}
    </List>
  )
}