import { enviromentVariables } from "./src/configuration/enviroment"
const db = enviromentVariables.database

export default {
   type: "mssql",
   host: db.server,
   username: db.username,
   password: db.password,
   port: db.port,
   database: db.scheme,
   synchronize: true,
   logging: true,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   },
   enableArithAbort: true,
}