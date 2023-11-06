import '@/styles/globals.css'
import { AppStateProvider } from '../context/AppState'

export default function App({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
