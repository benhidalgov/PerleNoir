import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import CollectionDetail from './pages/CollectionDetail';
import Entrance from './components/Entrance';
import CustomCursor from './components/CustomCursor';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  // Manage entrance timing securely in the root level
  useEffect(() => {
    if (showEntrance) {
      // Allow 4.5 seconds for the gothic entrance animation before hiding it
      const timer = setTimeout(() => setShowEntrance(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [showEntrance]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {showEntrance && <Entrance key="entrance" />}
      </AnimatePresence>
      
      {!showEntrance && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coleccion/:slug" element={<CollectionDetail />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
