import { createContext, useEffect } from 'react';

import { createAxiosInstance } from '@/apis/createAxiosInstance';
import { LogRequestList, LogResponse } from '@/types/LogType';
import { LogType } from '@/types/LogType';
import http from 'http';
import https from 'https';
import { SetLocalStorageClear } from '@/SetLocalStorage';

interface YLSProviderProps {
  children: React.ReactNode;
  baseURL: string;
}

export interface YLSContextType {
  putLog: (data: LogRequestList) => Promise<LogResponse>;
}

export const YLSContext = createContext<YLSContextType | undefined>(undefined);

/**
 * YLS에 사용되는 Context Provider를 위한 컴포넌트입니다.
 * 일반적으로 YLSWrapper 컴포넌트를 사용하시면 됩니다.
 * @param param0
 * @returns
 */
export const YLSProvider = ({ children, baseURL }: YLSProviderProps) => {
  const axiosInstance = createAxiosInstance(baseURL);

  const putLog = async (data: LogRequestList): Promise<LogResponse> => {
    try {
      const res = await axiosInstance.put('/log/list', data);
      return res.data;
    } catch (e) {
      throw new Error('Failed to post log');
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') return;

      const logList: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
      const data: LogRequestList = {
        logRequestList: logList,
      };

      SetLocalStorageClear();

      void axiosInstance.put('/log/list', data, {
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange, { once: true });
  }, []);

  return (
    <YLSContext.Provider
      value={{
        putLog,
      }}
    >
      {children}
    </YLSContext.Provider>
  );
};
