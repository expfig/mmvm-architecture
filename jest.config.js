module.exports={
  preset: 'react-native',
  // Limpe automaticamente chamadas simuladas, instâncias, contextos e resultados antes de cada teste
  clearMocks: true,

  // Indica se as informações de cobertura devem ser coletadas durante a execução do teste
  collectCoverage: false,

  testTimeout: 10000,

  // Uma matriz de padrões glob indicando um conjunto de arquivos para os quais as informações de cobertura devem ser coletadas
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],

  // O diretório onde Jest deve gerar seus arquivos de cobertura
  coverageDirectory: './coverage',

  // Uma matriz de strings de padrão regexp usadas para ignorar a coleta de cobertura
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\dist\\\\'],

  // Indica qual provedor deve ser usado para o código do instrumento para cobertura
  coverageProvider: 'v8',

  // Uma lista de nomes de repórteres que Jest usa ao escrever relatórios de cobertura
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // Um objeto que configura a imposição de limite mínimo para resultados de cobertura
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // Uma lista de caminhos para módulos que executam algum código para configurar ou definir a estrutura de teste antes de cada teste
  setupFilesAfterEnv: ['./jest-setup.js'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: [' \"node_modules/(?!axios)/\"', '/android', '/ios'],

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  // transform: {
  //     '^.+\\.jsx?$': 'babel-jest',
  //     '^.+\\.svg$': 'jest-svg-transformer',
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleNameMapper: {
  //   axios: 'axios/dist/node/axios.cjs',
  // },
};