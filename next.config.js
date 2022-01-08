require('dotenv').config();

module.exports = {
  env: {
    SITE_NAME: process.env.SITE_NAME,
    API_PATH: process.env.API_PATH,
    COOKIE_DURATION: process.env.COOKIE_DURATION,
    S3_AWS_ACCESS_KEY: process.env.S3_AWS_ACCESS_KEY,
    S3_AWS_SECRET_KEY: process.env.S3_AWS_SECRET_KEY,
    S3_AWS_REGION: process.env.S3_AWS_REGION,
    S3_AWS_BUCKET_NAME: process.env.S3_AWS_BUCKET_NAME,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY
  },
}
