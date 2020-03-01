import { useContext } from 'react';
import { AppContext, IAppProviderState } from '../../src/contexts/appContext';

const useAppStore = (): IAppProviderState => {
  const [state] = useContext(AppContext);

  const { isLoading } = state;

  return {
    isLoading
  };
};

export { useAppStore };
