import knex from "knex"
import * as dotenv from "dotenv";

dotenv.config();

export const connection = knex ({
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      port : 3306,
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  });