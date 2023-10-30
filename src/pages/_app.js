// pages/_app.js

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import NotFound from './404';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Check if the page exists (you can use any logic here to determine page existence)
      const isPageExist = true; // Replace this with your logic to check page existence

      if (!isPageExist && url !== '/404') {
        // Page doesn't exist, redirect to the 404 page
        router.replace('/404', undefined, { shallow: true });
      }
    };

    // Subscribe to route changes
    router.events.on('routeChangeStart', handleRouteChange);

    // Unsubscribe from route changes when the component unmounts
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]); // Ensure that useEffect runs after the router is defined

  return <Component {...pageProps} />;
};

export default MyApp;
