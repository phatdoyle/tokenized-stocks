import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import VolumeChart from './components/VolumeChart';
import TransferCountChart from './components/TransferCountChart';
import TokensVolumeLeaderboard from './components/TokensVolumeLeaderboard';
import TokensActivityLeaderboard from './components/TokensActivityLeaderboard';
import AddressesVolumeLeaderboard from './components/AddressesVolumeLeaderboard';
import TokenDetail from './components/TokenDetail';
import AddressDetail from './components/AddressDetail';
import RecentTransfers from './components/RecentTransfers';
import GlobalStats from './components/GlobalStats';
import StatsByProtocol from './components/StatsByProtocol';
import TransferSharesVolumeChart from './components/TransferSharesVolumeChart';
import OnchainMarketcapChart from './components/OnchainMarketcapChart';

const NAV_LINKS = [
  { to: '/',                  label: 'Overview' },
  { to: '/market-cap',        label: 'Market Cap' },
  // { to: '/volume',            label: 'Volume' },
  // { to: '/transfers',         label: 'Transfers' },
  // { to: '/tokens',            label: 'Tokens' },
  // { to: '/addresses',         label: 'Addresses' },
  // { to: '/recent',            label: 'Recent' },
  // { to: '/stats',             label: 'By Protocol' },
  // { to: '/transfer-shares',   label: 'Share Transfers' },
] as const;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg border border-subtle bg-surface-card flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-colors"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function NavBar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-subtle theme-nav backdrop-blur-md">
      {/* Top brand row */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-subtle">
        <div className="flex items-center gap-3">
          {/* Wordmark */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 10L7 4L12 10" stroke="#0A0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display font-semibold text-surface-50 text-base tracking-tight">
              TokenFlow
            </span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold text-accent border border-accent/30 bg-accent/8 rounded-md uppercase tracking-widest">
            Analytics
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="flex items-center gap-2 text-xs text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-positive animate-pulse" />
            Live
          </div>
        </div>
      </div>

      {/* Nav links row */}
      <nav className="flex items-center gap-1 px-4 overflow-x-auto">
        {NAV_LINKS.map(({ to, label }) => {
          const isActive =
            to === '/'
              ? pathname === '/'
              : pathname.startsWith(to);
          return (
            <NavLink
              key={to}
              to={to}
              className={() =>
                [
                  'flex-shrink-0 px-3 py-3 text-sm font-medium border-b-2 transition-colors duration-150',
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-secondary hover:text-surface-100',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen theme-page">
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
        <Routes>
          <Route path="/"                element={<GlobalStats />} />
          <Route path="/market-cap"      element={<OnchainMarketcapChart />} />
          {/* <Route path="/volume"          element={<VolumeChart />} />
          <Route path="/transfers"       element={<TransferCountChart />} />
          <Route path="/transfer-shares" element={<TransferSharesVolumeChart />} />
          <Route path="/tokens"          element={<TokensVolumeLeaderboard />} />
          <Route path="/tokens/activity" element={<TokensActivityLeaderboard />} />
          <Route path="/addresses"       element={<AddressesVolumeLeaderboard />} />
          <Route path="/token/:contractAddress" element={<TokenDetail />} />
          <Route path="/address/:address"      element={<AddressDetail />} />
          <Route path="/recent"          element={<RecentTransfers />} />
          <Route path="/stats"           element={<StatsByProtocol />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
