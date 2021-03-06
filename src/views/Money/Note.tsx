import { Input } from 'components/Input'
import { ChangeEventHandler, useRef } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`

type Props = {
  value: string
  onChange: (value: string) => void
}

const Note: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Section>
      <Input
        label="备注"
        value={note}
        onChange={onChange}
        type="text"
        placeholder="在这里添加备注"
      />
    </Section>
  )
}

export { Note }
