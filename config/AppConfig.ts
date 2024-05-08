const JWT_CONFIG = {
  EXP_TIME: '30m',
  ALG: 'HS512',
} as const;

const ENV_CONFIG = {
  LIST: ['server', 'db'],
} as const;

export { JWT_CONFIG, ENV_CONFIG };
