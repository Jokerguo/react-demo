import Layout from 'components/Layout'
import styled from 'styled-components'
import { Tags } from './Tags'
import { Category } from './Category'
import { Note } from './Note'
import { NumberPad } from './NumberPad'
import { useState } from 'react'
import { useRecords } from 'hooks/useRecords'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '+' | '-'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0',
}

const Money = () => {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecord } = useRecords()
  type Selected = typeof selected
  const onChangeSelected = (obj: Partial<Selected>) => {
    setSelected({ ...selected, ...obj })
  }
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }

  return (
    <MyLayout>
      <Tags
        value={selected.tagIds}
        onChange={(tagIds) => onChangeSelected({ tagIds })}
      />
      <Note
        value={selected.note}
        onChange={(note) => onChangeSelected({ note })}
      />
      <Category
        value={selected.category}
        onChange={(category) => onChangeSelected({ category })}
      />
      <NumberPad
        value={selected.amount}
        onChange={(amount) => onChangeSelected({ amount })}
        onOk={submit}
      />
    </MyLayout>
  )
}

export default Money
