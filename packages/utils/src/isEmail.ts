export const isEmail = (email: string, domain?: string) => {
  const regFull =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regFull.test(String(email).toLowerCase())) {
    return email;
  }

  const regHalf = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/;
  const refDomain =
    /^@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (domain) {
    if (regHalf.test(String(email).toLowerCase()) && refDomain.test(String(domain).toLowerCase())) {
      return email + domain;
    }
  }

  throw new Error('given value is not valid');
};
