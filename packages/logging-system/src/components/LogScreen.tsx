import { useEffect } from 'react';

import { screen } from '@/Logger';

import { LogPayloadParams } from '../types/LogType';

interface Props {
  children: React.ReactNode;
  params: LogPayloadParams;
}

export const LogScreen = ({ children, params }: Props) => {
  useEffect(() => {
    screen({
      ...params,
    });
  }, []);

  return <>{children}</>;
};
