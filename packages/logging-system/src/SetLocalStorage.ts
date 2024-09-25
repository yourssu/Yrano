import { LogRequestList, LogResponse, LogType } from './types/LogType';

const logSize = 10;

export const SetLocalStorageSlice = () => {
  const list: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
  localStorage.setItem('yls-web', JSON.stringify(list.slice(logSize, list.length)));
};

export const SetLocalStorage = async (
  logger: LogType,
  putLog: (data: LogRequestList) => Promise<LogResponse>
) => {
  const list: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
  list.push(logger);
  localStorage.setItem('yls-web', JSON.stringify(list));

  const slicingList = list.slice(0, logSize);

  if (list.length >= logSize) {
    const req: LogRequestList = {
      logRequestList: slicingList,
    };
    SetLocalStorageSlice();

    try {
      await putLog(req);
    } catch (e) {
      console.error('Failed to post log');
      const remainList: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
      remainList.unshift(...slicingList);
      localStorage.setItem('yls-web', JSON.stringify(remainList));
    }
  }
};
