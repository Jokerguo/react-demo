import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

type Props = {
  value: '+' | '-'
  onChange: (value: '+' | '-') => void
}

const Category: React.FC<Props> = (props) => {
  const categoryMap = { '+': '收入', '-': '支出' }
  type Y = keyof typeof categoryMap
  const [categoryList] = useState<Y[]>(['+', '-'])
  const selectedCategory = props.value
  return (
    <Section>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={selectedCategory === c ? 'selected' : ''}
            onClick={() => props.onChange(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export { Category }
