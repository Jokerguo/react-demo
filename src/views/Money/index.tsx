import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from './TagsSection'
import { CategorySection } from './CategorySection'
import { NoteSection } from './NoteSection'
import { NumberPadSection } from './NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money = () => {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection></CategorySection>
      <NumberPadSection />
    </MyLayout>
  )
}

export default Money
