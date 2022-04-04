import { Route, Routes } from 'react-router-dom'
import CustomerReview from '../components/CustomerReview/CustomerReview'
import Header from '../components/Header/Header'
import HeroArea from '../components/HeroArea/HeroArea'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />}></Route>
        <Route path="/home" element={<HeroArea />}></Route>
        <Route
          path="/review"
          element={<CustomerReview short={false} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
