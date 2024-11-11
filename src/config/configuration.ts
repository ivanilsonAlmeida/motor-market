export default () => ({
  dataBaseUser: process.env.DATABASE_USER,
  dataBasePassword: process.env.DATABASE_PASSWORD,
  dataBaseUrlLocal: process.env.DATA_BASE_BASE_URL_LOCAL,
  dataBase: process.env.DATA_BASE,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
