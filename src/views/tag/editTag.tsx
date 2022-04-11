import { Button } from 'components/Button'
import Icon from 'components/Icon'
import { Input } from 'components/Input'
import Layout from 'components/Layout'
import { useTags } from 'hooks/useTags'
import { useParams, useNavigate } from 'react-router-dom'
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
const InputWrapper = styled.div`
  background: #fff;
  margin: 16px 0;
  padding: 0 16px;
`
const BtnWrapper = styled.div`
  margin-top: 36px;
  text-align: center;
`
const NoTag = styled.div`
  margin-top: 36px;
  text-align: center;
`

const EditTag: React.FC = () => {
  const { findTag, updateTag, delTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id as string))
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  return (
    <MyLayout>
      <Topbar>
        <Icon name="left" onClick={onBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? (
        <div>
          <InputWrapper>
            <Input
              value={tag.name}
              onChange={(e) => {
                updateTag(parseInt(id as string), e.target.value)
              }}
              label="标签名"
              type="text"
              placeholder="标签名"
            ></Input>
          </InputWrapper>
          <BtnWrapper>
            <Button onClick={() => delTag(parseInt(id as string))}>
              删除标签
            </Button>
          </BtnWrapper>
        </div>
      ) : (
        <NoTag>标签不存在</NoTag>
      )}
    </MyLayout>
  )
}

export { EditTag }
