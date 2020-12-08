require('dotenv').config();

module.exports = {
  env: {
    NODE_ENV: process.env.NODE_ENV,
    SITE_NAME: process.env.SITE_NAME,
    API_KEY: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    SENDER_ID: process.env.SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    API_PATH: process.env.API_PATH,
  },
}
