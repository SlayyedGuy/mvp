import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WagmiConfig, createConfig, } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import './index.css'; // Tailwind styles

const { provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const client = createConfig({
  autoConnect: true,
  provider,
  webSocketProvider,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);