import { SQLDataSource } from 'datasource-sql';
import ormconfig from '@part3/ormconfig.json';

const knexConfig = {
  client: 'pg',
  connection: {
    host: ormconfig.host,
    port: ormconfig.port,
    user: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database
  }
};

class RoutletteDb extends SQLDataSource {
  getEmployees() {
    return this.knex
      .select("*")
      .from("employee");
  }
}

export default new RoutletteDb(knexConfig);