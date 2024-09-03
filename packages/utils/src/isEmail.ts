export const isEmail = (email: string, domain?: string): boolean => {
  if (!domain) {
    const regFull =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regFull.test(String(email).toLowerCase());
  }

  const regHalf = /^(([^<>()[\]\\.,;:\s@"]+(\[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/;
  const refDomain =
    /^@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regHalf.test(String(email).toLowerCase()) && refDomain.test(String(domain).toLowerCase());
};
