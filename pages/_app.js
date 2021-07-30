import '../styles/globals.css';
import { createContext, useState, useEffect } from 'react';
import { getStrapiMedia } from './api/media';
import { fetchAPI } from './api/api';
import LoadingScreen from './views/LoadingScreen/LoadingScreen';
import { useRouter } from 'next/router';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <GlobalContext.Provider value={global}>
      {pageLoading ? <LoadingScreen /> : <Component {...pageProps} />}
    </GlobalContext.Provider>
  );
}

export default MyApp;
