import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div>
          <p className="eyebrow">PlayPatch Foundation</p>
          <h1>Build a growing world through pattern play.</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
