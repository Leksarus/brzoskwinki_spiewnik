import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'reflexbox/styled-components'
import {
  NavLink
} from "react-router-dom"
import titles from './songs/titles.json'

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
      {Object.entries(titles).map(([slug, title]) => {
        return (
          <Item key={slug}>
            <NavLink
              to={`/preview/${slug}`}
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(239, 37, 40)"
              }}
            >
              {title}
            </NavLink>
          </Item>
        )
      })}
    </List>
  )
}