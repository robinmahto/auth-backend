import dotenv from "dotenv";
dotenv.config();

export const { JWT_SECERET } = process.env;

export { default as connect_database} from "./database";