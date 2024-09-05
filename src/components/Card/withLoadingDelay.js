import { useEffect, useState } from 'react';
import LoadingCard from './LoadingCard';

const DELAY = 2000;

const withLoadingDelay = (Component) => function (props) {
  const [isLoading, setIsLoading] = useState(() => true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(() => false);
    }, DELAY);
    return () => clearTimeout(timeout);
  }, []);
  return isLoading ? <LoadingCard /> : <Component {...props} />;
};

export default withLoadingDelay;
