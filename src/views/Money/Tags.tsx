import { useTags } from 'hooks/useTags'
import { createId } from 'lib/createId'
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
  value: number[]
  onChange: (value: number[]) => void
}

const Tags: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags()
  const selectedTagIds = props.value
  const setSelectedTags = (value: number[]) => {
    props.onChange(value)
  }
  const addTag = () => {
    const tagName = window.prompt('请输入标签')
    if (tagName) {
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }
  const toggleTag = (tagId: number) => {
    if (selectedTagIds.indexOf(tagId) >= 0) {
      setSelectedTags(selectedTagIds.filter((t) => t !== tagId))
    } else {
      setSelectedTags([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  }

  return (
    <Section>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Section>
  )
}

export { Tags }
