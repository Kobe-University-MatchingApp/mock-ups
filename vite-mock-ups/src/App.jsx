import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Example1 from './pages/Example1/index.jsx'
import Example2 from './pages/Example2/index.jsx'
import Example3 from './pages/Example3/index.jsx'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
