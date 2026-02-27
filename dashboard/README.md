# TokenFlow Analytics — Dashboard

A professional financial analytics dashboard for tokenized equities, built with React + Vite + TypeScript.

---

## Tech Stack

| Layer          | Technology                                              |
| -------------- | ------------------------------------------------------- |
| Framework      | React 18 + TypeScript                                   |
| Build tool     | Vite                                                    |
| Styling        | Tailwind CSS v3 (custom design tokens)                  |
| Data fetching  | TanStack React Query v5                                 |
| Charts         | Recharts                                                |
| Routing        | React Router v6                                         |
| Fonts          | DM Sans · JetBrains Mono · Syne (Google Fonts)          |

---

## Project Structure

```
dashboard/
├── index.html                  # Entry HTML — loads Google Fonts
├── tailwind.config.js          # Design tokens: colors, fonts, shadows, keyframes
├── src/
│   ├── main.tsx                # React + QueryClient bootstrap
│   ├── App.tsx                 # Router shell + NavBar
│   ├── index.css               # Global styles, Tailwind layers, Recharts dark theme
│   ├── api.ts                  # All API calls via fetchAPI helper
│   ├── types.ts                # Shared TypeScript interfaces
│   ├── formatVolume.ts         # 18-decimal token amount formatters
│   │
│   ├── hooks/
│   │   └── useAnalytics.ts     # React Query hooks — one per API endpoint
│   │
│   ├── lib/
│   │   ├── cn.ts               # Lightweight className merger
│   │   └── chartColors.ts      # 10-color palette for multi-series charts
│   │
│   └── components/
│       ├── ui/                 # ── Reusable primitives ──────────────────────
│       │   ├── Card.tsx        # Card + CardHeader — glass-dark surface
│       │   ├── Badge.tsx       # Badge + ChangeLabel — status chips
│       │   ├── Controls.tsx    # SelectField · InputField · ControlBar · SegmentedControl
│       │   ├── States.tsx      # LoadingState · ErrorState · EmptyState
│       │   ├── DataTable.tsx   # Generic typed dark-theme table
│       │   ├── ChartContainer.tsx  # ResponsiveContainer wrapper + ChartTooltip
│       │   └── PageHeader.tsx  # Page title / subtitle / action slot
│       │
│       ├── GlobalStats.tsx          # Overview — 4 stat cards + protocol breakdown
│       ├── VolumeChart.tsx          # Line chart — transfer volume over time
│       ├── TransferCountChart.tsx   # Line chart — transfer count over time
│       ├── TransferSharesVolumeChart.tsx  # Area chart — xStock share volume
│       ├── OnchainMarketcapChart.tsx      # Area + Pie — onchain market cap
│       ├── TokensVolumeLeaderboard.tsx    # Bar chart + table — top tokens by vol
│       ├── TokensActivityLeaderboard.tsx  # Bar chart + table — most active tokens
│       ├── AddressesVolumeLeaderboard.tsx # Table — top addresses by volume
│       ├── RecentTransfers.tsx     # Live transfer feed table
│       ├── StatsByProtocol.tsx     # Protocol comparison — Ondo vs xStock
│       ├── TokenDetail.tsx         # Token stats + recent transfers
│       └── AddressDetail.tsx       # Address summary + transfers (in/out color coded)
```

---

## Design System

### Colors

| Token           | Hex         | Use                              |
| --------------- | ----------- | -------------------------------- |
| `surface-900`   | `#0A0D12`   | Page background                  |
| `surface-800`   | `#0D1420`   | Card / panel background          |
| `surface-700`   | `#121926`   | Input / control background       |
| `surface-500`   | `#2A3344`   | Borders, dividers                |
| `accent`        | `#00E5C3`   | Primary action, active state     |
| `positive`      | `#00D67F`   | Positive / green change          |
| `negative`      | `#FF4D6A`   | Negative / red change            |
| `warning`       | `#FFB547`   | Warnings                         |
| `blue-400`      | `#4DA6FF`   | xStock secondary accent          |

### Typography

- **DM Sans** — UI body text, labels
- **Syne** — Display headings (`font-display`)
- **JetBrains Mono** — All numeric values, hashes, addresses

### Reusable Components

All primitives live in `src/components/ui/`. Import and compose them:

```tsx
import { Card, CardHeader }   from './ui/Card';
import { SelectField, SegmentedControl, ControlBar } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState }      from './ui/States';
import { DataTable }          from './ui/DataTable';
import { PageHeader }         from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import { Badge, ChangeLabel } from './ui/Badge';
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (requires indexer API on http://localhost:42069)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app expects the indexer GraphQL/REST API to be running at `http://localhost:42069`.
See `src/api.ts` to change `API_BASE` or read from an env variable.

---

## API Endpoints Used

| Hook                    | Endpoint                                       |
| ----------------------- | ---------------------------------------------- |
| `useStats`              | `GET /analytics/stats`                         |
| `useStatsByProtocol`    | `GET /analytics/stats/by-protocol`             |
| `useVolume`             | `GET /analytics/volume`                        |
| `useTransferCount`      | `GET /analytics/transfer-count`                |
| `useTransferSharesVolume` | `GET /analytics/transfer-shares/volume`      |
| `useTokensVolume`       | `GET /analytics/tokens/volume`                 |
| `useTokensActivity`     | `GET /analytics/tokens/activity`               |
| `useAddressesVolume`    | `GET /analytics/addresses/volume`              |
| `useTokenStats`         | `GET /analytics/tokens/:address/stats`         |
| `useTokenTransfersRecent` | `GET /analytics/tokens/:address/transfers/recent` |
| `useAddressSummary`     | `GET /analytics/addresses/:address/summary`    |
| `useAddressTransfers`   | `GET /analytics/addresses/:address/transfers`  |
| `useTransfersRecent`    | `GET /analytics/transfers/recent`              |
| `useOnchainMarketcap`   | `GET /onchain-marketcap`                       |
| `useMarketcapOverTime`  | `GET /marketcap-over-time/:ticker`             |

All hooks use a 30-second stale time and 1 retry (configured in `main.tsx`).
