import { Button } from 'components/Button'
import Icon from 'components/Icon'
import Layout from 'components/Layout'
import { useTags } from 'hooks/useTags'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const MyLayout = styled(Layout)`
  background: rgba(0, 0, 0, 0.05);
`

const EditTag: React.FC = () => {
  const { findTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id as string))
  return (
    <MyLayout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </MyLayout>
  )
}

export { EditTag }
