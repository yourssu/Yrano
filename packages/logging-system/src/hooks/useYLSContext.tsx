import { useContext } from 'react';

import { YLSContext } from '@/contexts/YLSProvider';

export const useYLSContext = () => {
  const context = useContext(YLSContext);
  if (!context) {
    throw new Error('useYLSContext must be used within a YLSProvider');
  }
  return context;
};
