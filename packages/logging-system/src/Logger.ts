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

const createHashedId = (userId: string) => {
  const existLocalHashedId = window.sessionStorage.getItem('yls-web-hashedId');

  if (userId === '' && existLocalHashedId) return existLocalHashedId;

  if (userId === '') userId = createRandomId();

  const hashedId = base64Encode(hexToUtf8(sha256(userId)));

  window.sessionStorage.setItem('yls-web-hashedId', hashedId);

  return hashedId;
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
    hashedID: createHashedId(userId),
    timestamp: createTimestamp(),
    version: version,
    event: {
      platform: 'web',
      ...event,
    },
  };
};
