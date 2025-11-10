// src/pages/Home.jsx
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>This is the homepage</p>
      </section>
      
      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home