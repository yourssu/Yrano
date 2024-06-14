module.exports = {
  // 플러그인 문서:
  // https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths
  plugins: ['no-relative-import-paths'],
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 개행 방식 auto로 설정
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // return type 명시했는지 체크 (TS 내에서 React.FC 사용 지양을 위해서 off)
    '@typescript-eslint/explicit-function-return-type': 'off',
    // any를 사용해야하는 특수한 경우를 위해서 warn으로 설정
    '@typescript-eslint/no-explicit-any': 'warn',
    // 절대 경로로 작성 되어 있는지 체크
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '@' },
    ],
  },
  settings: {},
};
