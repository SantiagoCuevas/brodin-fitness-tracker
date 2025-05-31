import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Info } from './pages/Info';
import { Settings } from './pages/Settings';
import { Layout } from '../layouts/Layout';
import { Progress } from './pages/Progress';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/info" element={<Info />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
