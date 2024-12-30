import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotoAlbum from './PhotoAlbum'
import NewYear from './NewYearCelebration.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoAlbum />} />
        <Route path="/new-year" element={<NewYear/>} />
      </Routes>
    </Router>
  )
}

export default App
