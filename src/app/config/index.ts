import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABAS_URL,
  node_env: process.env.NODE_ENV,
  store_id : process.env.storeId,
  store_passwd : process.env.storePasswd,
  is_live : process.env.islive
};
