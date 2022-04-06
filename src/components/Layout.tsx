import styled from 'styled-components'
import Nav from 'components/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

type Props = {
  className?: string
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Main className={props.className}>{props.children}</Main>
      <Nav />
    </Wrapper>
  )
}

export default Layout
