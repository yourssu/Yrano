import { locales } from 'nextra/locales';
import { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { nextUrl } = request;

  if (nextUrl.pathname.startsWith('/remote/')) {
    return;
  }

  return locales(request);
};
