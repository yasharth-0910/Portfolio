import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from "./pages/Portfolio"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/src/Resume.pdf" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
