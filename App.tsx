import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import TheGrove from './pages/TheGrove';
import Honorees from './pages/Honorees';
import GetInvolved from './pages/GetInvolved';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="grove" element={<TheGrove />} />
          <Route path="honorees" element={<Honorees />} />
          <Route path="get-involved" element={<GetInvolved />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;