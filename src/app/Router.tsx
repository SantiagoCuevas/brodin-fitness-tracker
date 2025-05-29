import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { PhysiqueTracking } from './pages/PhysiqueTracking';
import { Settings } from './pages/Settings';
import { Layout } from '../layouts/Layout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Home />} />
          <Route path="/physique-tracking" element={<PhysiqueTracking />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
