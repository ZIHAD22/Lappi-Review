import { Route, Routes } from 'react-router-dom'
import CustomerReview from '../components/CustomerReview/CustomerReview'
import DashBoard from '../components/DashBoard/DashBoard'
import Header from '../components/Header/Header'
import HeroArea from '../components/HeroArea/HeroArea'
import NotFound from '../components/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />}></Route>
        <Route path="/home" element={<HeroArea />}></Route>
        <Route path="/review" element={<CustomerReview />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
