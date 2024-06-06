import { LogRequestList, LogResponse, LogType } from './types/LogType';

export const SetLocalStorageClear = () => {
  const list: any[] = [];
  localStorage.setItem('yls-web', JSON.stringify(list));
};

export const SetLocalStorage = async (
  logger: LogType,
  postLog: (data: LogRequestList) => Promise<LogResponse>
) => {
  if (window.localStorage.getItem('yls-web') == undefined) {
    const list: any[] = [];
    list.push(logger);
    localStorage.setItem('yls-web', JSON.stringify(list));
  } else {
    const remainList: any[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
    if (remainList.length < 10) {
      const updateList = [...remainList, logger];
      localStorage.setItem('yls-web', JSON.stringify(updateList));
    } else {
      const req: LogRequestList = {
        logRequestList: remainList,
      };

      try {
        const res = await postLog(req);
        if (res.success) {
          SetLocalStorageClear();
        }
      } catch (e) {
        console.error('Failed to post log');
      }
    }
  }
};
