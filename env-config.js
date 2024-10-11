const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFile = process.env.ENV_FILE || '.env';
const envPath = path.resolve(__dirname, envFile);

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.warn(`Env file ${envFile} not found`);
}