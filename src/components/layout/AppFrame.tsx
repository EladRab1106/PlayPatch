import { Outlet } from 'react-router-dom';
import { ShellHeader } from './ShellHeader';

export function AppFrame() {
  return (
    <div className="app-frame">
      <ShellHeader />
      <Outlet />
    </div>
  );
}
