import { Routes, Route } from 'react-router-dom';

import Apps from './components/Apps.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AppDetailPage from './pages/AppDetailPage.jsx';

function App() {
  return (
    <main className="relative z-0 bg-primary text-white antialiased flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
