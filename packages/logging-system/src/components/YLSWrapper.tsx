import { YLSProvider } from '@/contexts/YLSProvider';

interface YLSWrapperProps {
  children: React.ReactNode;
  baseURL: string;
}

/**
 * YLS에 사용되는 Context를 위한 컴포넌트입니다.
 * YLS를 사용하는 프로젝트의 최상위 컴포넌트로 사용해야 합니다.
 */
export const YLSWrapper = ({ children, baseURL }: YLSWrapperProps) => {
  return <YLSProvider baseURL={baseURL}>{children}</YLSProvider>;
};
