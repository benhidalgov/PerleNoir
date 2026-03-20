import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionDetail from './pages/CollectionDetail';
import Entrance from './components/Entrance';

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showEntrance && <Entrance onComplete={() => setShowEntrance(false)} />}
      
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
