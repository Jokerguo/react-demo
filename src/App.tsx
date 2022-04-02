import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags />} />
            <Route path="/money" element={<Money />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Navigate to="/money" replace />} />
          </Routes>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  )
}

export default App

function Tags() {
  return <h2>首页</h2>
}
function Money() {
  return <h2>钱钱</h2>
}
function Statistics() {
  return <h2>统计页面</h2>
}
function NoMatch() {
  return <h2>找不到页面 滚蛋啊</h2>
}
