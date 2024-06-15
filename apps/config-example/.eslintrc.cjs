require('@yourssu/eslint-config/patch');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@yourssu/eslint-config', // 공통 ESLint 컨피그 불러오기
    '@yourssu/eslint-config/mixins/react', // React용 ESLint 컨피그 불러오기
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  settings: {
    react: {
      // 현재 React 버전을 명시합니다.
      // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
      // 린트 과정에서 속도가 느려질 수 있습니다.
      // 예: '16.9', '17.0', '18.0' 등
      version: '18.2',
    },
  },
  // Rush Stack은 @typescript-eslint 플러그인을 내장하고 있으므로
  // 타입스크립트 파서에 대한 설정이 필요합니다.
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
