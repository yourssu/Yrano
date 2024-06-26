import { sha256, base64Encode, hexToUtf8 } from '@yourssu/crypto';

import { SetLocalStorage, SetLocalStorageClear } from './SetLocalStorage';
import { useYLSContext } from './hooks/useYLSContext';
import { LogPayloadParams, LogRequestList, LogResponse, LogType } from './types/LogType';

const createRandomId = () => {
  let randomId = '';
  const charactersRange = { start: 33, end: 126 };

  for (let i = 0; i < 10; i++) {
    const randomCharCode =
      Math.floor(Math.random() * (charactersRange.end - charactersRange.start + 1)) +
      charactersRange.start;
    randomId += String.fromCharCode(randomCharCode);
  }

  return randomId;
};

const createHashedID = (userId: string) => {
  let hashedId = '';
  let localHashedId = '';
  const existLocalHashedId = window.localStorage.getItem('yls-web');

  if (userId === '') {
    if (existLocalHashedId) {
      localHashedId = JSON.parse(window.localStorage.getItem('yls-web') as string).hashedId;
    } else {
      userId = createRandomId();
    }
  }

  hashedId = base64Encode(hexToUtf8(sha256(userId)));

  return localHashedId ? localHashedId : hashedId;
};

const createTimestamp = () => {
  const offset = new Date().getTimezoneOffset() * 60 * 1000;
  const now = new Date(Date.now() - offset);
  return now.toISOString();
};

const initialLog = (
  userId: string,
  version: number,
  event: LogPayloadParams['event'],
  putLog: (data: LogRequestList) => Promise<LogResponse>
) => {
  const loggerType: LogPayloadParams = {
    userId: userId,
    version: version,
    event: event,
  };

  const logger = Logger(loggerType);

  SetLocalStorage(logger, putLog);
};

export const useYLSLogger = () => {
  const { putLog } = useYLSContext();

  const screen = ({ userId, version, event }: LogPayloadParams) => {
    initialLog(userId, version, event, putLog);
  };

  const click = ({ userId, version, event }: LogPayloadParams) => {
    initialLog(userId, version, event, putLog);
  };

  return {
    screen,
    click,
  };
};

export const Logger = ({ userId, version, event }: LogPayloadParams) => {
  return {
    hashedID: createHashedID(userId),
    timestamp: createTimestamp(),
    version: version,
    event: {
      platform: 'web',
      ...event,
    },
  };
};

window.addEventListener('unload', async (event) => {
  event.preventDefault();

  const { putLog } = useYLSContext();
  const logList: LogType[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
  const req: LogRequestList = {
    logRequestList: logList,
  };

  try {
    const res = await putLog(req);
    if (res.success) {
      SetLocalStorageClear();
    }
  } catch (e) {
    console.error('Failed to post log');
  }
});
