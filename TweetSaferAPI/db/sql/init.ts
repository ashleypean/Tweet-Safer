export const createUserTable = `
  CREATE TABLE IF NOT EXISTS users(
    id          SERIAL PRIMARY KEY NOT NULL,
    email       TEXT NOT NULL UNIQUE
  );
`;

export const createAccountTable = `
  CREATE TABLE IF NOT EXISTS accounts(
    account_id   INT PRIMARY KEY NOT NULL,
    user_id      INT REFERENCES USERS (ID),
    username     TEXT UNIQUE
  );
`;