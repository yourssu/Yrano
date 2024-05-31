import { useEffect } from 'react';

import { useYLSLogger } from '..';
import { LogPayloadParams } from '../types/LogType';

interface Props {
  children: React.ReactNode;
  params: LogPayloadParams;
}

export const LogScreen = ({ children, params }: Props) => {
  const logger = useYLSLogger();

  useEffect(() => {
    logger.screen({
      ...params,
    });
  }, []);

  return <>{children}</>;
};
