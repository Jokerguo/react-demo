import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background-color: #f60;
        color: #fff;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

type Props = {
  value: string[]
  onChange: (value: string[]) => void
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣服', '吃饭'])
  const selectedTags = props.value
  const setSelectedTags = (value: string[]) => {
    props.onChange(value)
  }
  const addTag = () => {
    const tagName = window.prompt('请输入标签')
    if (tagName) {
      setTags([...tags, tagName])
    }
  }
  const toggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const getClass = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  }

  return (
    <Section>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => toggleTag(tag)}
            className={getClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Section>
  )
}

export { Tags }
