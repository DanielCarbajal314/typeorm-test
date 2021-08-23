import { config } from 'dotenv'

config();
const dbPort = parseInt(process.env.DB_PORT, 10);

export const enviromentVariables = {
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER,
        port: dbPort,
        scheme: process.env.DB_SCHEME
    }
};