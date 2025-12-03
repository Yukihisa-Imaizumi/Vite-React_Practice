import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={{ marginTop: '60px' }}>
      <MainLayout>
        <Home/>
      </MainLayout> 
      </div>  
    </>
  )
}

export default App
