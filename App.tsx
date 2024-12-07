import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Collection from './pages/Collection';
import NewArrivals from './pages/NewArrivals';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent loading={loading} />
    </Router>
  );
}

function AppContent({ loading }: { loading: boolean }) {
  const location = useLocation();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <Cursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/new" element={<NewArrivals />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;