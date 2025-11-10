// src/layouts/MainLayout.jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout