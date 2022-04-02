import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/tags">标签页面</Link>
      <br />
      <Link to="/money">计算页</Link>
      <br />
      <Link to="/statistics">统计也</Link>
      <hr />
      <Routes>
        <Route path="/tags" element={<Tags />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Navigate to="/money" replace />} />
      </Routes>
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
