import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Money from 'views/money'
import NoMatch from 'views/noMatch'
import Statistics from 'views/statistics'
import Tags from 'views/tag'
import { EditTag } from 'views/tag/editTag'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:tag" element={<EditTag />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Navigate to="/money" replace />} />
      </Routes>
    </Router>
  )
}

export default App
