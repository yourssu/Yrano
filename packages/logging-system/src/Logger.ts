import { sha256, base64Encode, hexToUtf8 } from '@yourssu/crypto';

import { SetLocalStorage } from './SetLocalStorage';
import { useYLSContext } from './hooks/useYLSContext';
import { LogPayloadParams, LogRequestList, LogResponse } from './types/LogType';

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
  let hashedId: string;
  let localHashedId = '';
  const existLocalHashedId = window.localStorage.getItem('yls-web');

  if (userId === '') {
    if (existLocalHashedId) {
      localHashedId = JSON.parse(existLocalHashedId).hashedId;
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
  postLog: (data: LogRequestList) => Promise<LogResponse>
) => {
  const loggerType: LogPayloadParams = {
    userId: userId,
    version: version,
    event: event,
  };

  const logger = Logger(loggerType);

  SetLocalStorage(logger, postLog);
};

export const useYLSLogger = () => {
  const { postLog } = useYLSContext();

  const screen = ({ userId, version, event }: LogPayloadParams) => {
    initialLog(userId, version, event, postLog);
  };

  const click = ({ userId, version, event }: LogPayloadParams) => {
    initialLog(userId, version, event, postLog);
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
