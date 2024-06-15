import { useEffect, useState } from 'react';

const App = () => {
  // eslint-config 동작 검증을 위해서 주석을 풀어주세요 !
  const [count] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return <></>;
};

export default App;
