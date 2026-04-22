import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/routes';
import { ProgressProvider } from './app/providers/ProgressProvider';

export function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </BrowserRouter>
  );
}
