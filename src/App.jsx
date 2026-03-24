import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Banking from './pages/Banking'
import CreditCards from './pages/CreditCards'
import Loans from './pages/Loans'
import Consortium from './pages/Consortium'
import Insurance from './pages/Insurance'
import Investments from './pages/Investments'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/cartoes-de-credito" element={<CreditCards />} />
          <Route path="/emprestimo" element={<Loans />} />
          <Route path="/consorcio" element={<Consortium />} />
          <Route path="/seguros" element={<Insurance />} />
          <Route path="/investimento" element={<Investments />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
