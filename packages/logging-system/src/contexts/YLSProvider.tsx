import { createContext, useEffect } from 'react';

import { createAxiosInstance } from '@/apis/createAxiosInstance';
import { LogRequestList, LogResponse, LogType } from '@/types/LogType';
import { SetLocalStorageClear } from '@/SetLocalStorage';

interface YLSProviderProps {
  children: React.ReactNode;
  baseURL: string;
}

export interface YLSContextType {
  postLog: (data: LogRequestList) => Promise<LogResponse>;
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

  const postLog = async (data: LogRequestList): Promise<LogResponse> => {
    try {
      const res = await axiosInstance.put('/log/list', data);
      return res.data;
    } catch (e) {
      throw new Error('Failed to post log');
    }
  };

  useEffect(() => {
    const handleUnload = async (event: Event) => {
      event.preventDefault();

      const logList: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
      const req: LogRequestList = {
        logRequestList: logList,
      };

      try {
        const res = await postLog(req);
        if (res.success) {
          SetLocalStorageClear();
        }
      } catch (e) {
        console.error('Failed to post log');
      }
    };

    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  return (
    <YLSContext.Provider
      value={{
        postLog,
      }}
    >
      {children}
    </YLSContext.Provider>
  );
};
