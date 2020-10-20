const config = {
  default: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
  },
  development: {
    extend: 'default',
    database: process.env.DB_NAME,
    dialect: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',

  },
  test: {
    extend: 'default',
    database: process.env.DB_NAME,
    dialect: 'postgres',

  },
  production: {
    dialect: 'postgres',
    extend: 'default',
    database: process.env.DB_NAME,
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = { ...config[configValue.extend], ...configValue };
  }
});

module.exports = config;