import Icon from 'components/Icon'
import Layout from 'components/Layout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 16px;
`

function Tags() {
  // const {tags} = useTags();
  const [tags] = useState<string[]>(['嘻嘻嘻', 'asad'])
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="left" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags
