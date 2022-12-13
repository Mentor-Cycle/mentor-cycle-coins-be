export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.DATABASE_URL,
    testUri: process.env.DEV_DATABASE_URL,
  },
});
