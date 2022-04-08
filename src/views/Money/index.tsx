import Layout from 'components/Layout'
import styled from 'styled-components'
import { Tags } from './Tags'
import { Category } from './Category'
import { Note } from './Note'
import { NumberPad } from './NumberPad'
import { useState } from 'react'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as '+' | '-',
    amount: '0',
  })
  type Selected = typeof selected
  const onChangeSelected = (obj: Partial<Selected>) => {
    setSelected({ ...selected, ...obj })
  }
  const onOk = () => {
    console.log(parseFloat(selected.amount))
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
        onOk={() => onOk()}
      />
    </MyLayout>
  )
}

export default Money
