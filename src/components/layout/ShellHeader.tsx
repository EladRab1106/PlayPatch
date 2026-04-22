import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/game', label: 'Garden Trails' },
  { to: '/progress', label: 'Parent View' },
];

export function ShellHeader() {
  return (
    <header className="shell-header">
      <NavLink className="brand-mark" to="/">
        <span className="brand-mark__icon">✦</span>
        <span>
          <strong>PlayPatch</strong>
          <small>Grow through pattern play</small>
        </span>
      </NavLink>
      <nav className="shell-nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'shell-nav__link shell-nav__link--active' : 'shell-nav__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
