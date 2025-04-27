import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
