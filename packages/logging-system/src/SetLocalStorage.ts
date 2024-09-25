import { LogRequestList, LogResponse, LogType } from './types/LogType';

export const SetLocalStorageClear = () => {
  const list: any[] = [];
  localStorage.setItem('yls-web', JSON.stringify(list));
};

export const SetLocalStorage = async (
  logger: LogType,
  putLog: (data: LogRequestList) => Promise<LogResponse>
) => {
  const list: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
  list.push(logger);
  localStorage.setItem('yls-web', JSON.stringify(list));

  if (list.length >= 10) {
    const req: LogRequestList = {
      logRequestList: list,
    };
    SetLocalStorageClear();

    try {
      await putLog(req);
    } catch (e) {
      console.error('Failed to post log');
    }
  }
};
