import React, { useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'reflexbox/styled-components'
import texts from './config'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Wrapper = styled(Flex)`
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 3rem;
    font-weight: 600;
    opacity: 0.7;
  }
`

export default () => {
  const { song } = useParams()

  useEffect(() => {console.log(song)}, [song])

  const Con = useMemo(() => {
    return texts.find(({ name }) => name === song).content
  }, [song])

  return (
    <Wrapper>
      <h2>{song}</h2>
      <Con />
    </Wrapper>
  )
}