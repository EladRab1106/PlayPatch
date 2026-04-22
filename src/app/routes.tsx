import { Route, Routes } from 'react-router-dom';
import { AppFrame } from '../components/layout/AppFrame';
import { DashboardPage } from '../pages/DashboardPage';
import { GamePage } from '../pages/GamePage';
import { LandingPage } from '../pages/LandingPage';
import { ParentProgressPage } from '../pages/ParentProgressPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppFrame />}>
        <Route index element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/progress" element={<ParentProgressPage />} />
      </Route>
    </Routes>
  );
}
