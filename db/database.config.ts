import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from 'dotenv';
import { join } from 'path';

config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  PATH_TO_RUN,
  MYSQL_PORT,
} = process.env;

const path = PATH_TO_RUN || `migrations`;

export const dbConfig: DataSourceOptions = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
  // synchronize: true,
};

export default new DataSource(dbConfig);
