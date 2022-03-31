import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import ReactMarkdown from 'react-markdown'
import titles from './songs/titles.json'

import {
  useParams
} from "react-router-dom";

const Wrapper = styled(Flex)`
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.4rem;
    line-height: 3rem;
    font-weight: 600;
    opacity: 0.7;
  }
`

export default () => {
  const [content, setContent] = useState('')
  const { title } = useParams()

  useEffect(() => {
    const fetchFile = async () => {
      const f = await import(`./songs/content/${title.split(' ').join('-').toLowerCase()}`)
      fetch(f.default).then(res => res.text()).then(tx => {
        setContent(tx.split('---')[2])
      })
    }
    fetchFile()
  }, [title])

  return (
    <Wrapper>
      <h2>{titles[title]}</h2>
      {content && <ReactMarkdown children={content}/>}
    </Wrapper>
  )
}