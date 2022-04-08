import { useRef, useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`

type Props = {
  value: string
  onChange: (value: string) => void
}

const Note: React.FC<Props> = (props) => {
  const note = props.value
  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (inputRef.current) {
      props.onChange(inputRef.current.value)
    }
  }
  return (
    <Section>
      <label>
        <span>备注</span>
        <input
          defaultValue={note}
          onBlur={onBlur}
          ref={inputRef}
          type="text"
          placeholder="在这里添加备注"
        />
      </label>
    </Section>
  )
}

export { Note }
