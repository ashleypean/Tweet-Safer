export const createUserTable = `
  CREATE TABLE IF NOT EXISTS users(
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    email       TEXT NOT NULL UNIQUE
  );
`;

export const createAccountTable = `
  CREATE TABLE IF NOT EXISTS accounts(
    account_id   INT PRIMARY KEY NOT NULL,
    user_id      UUID REFERENCES USERS (ID),
    username     TEXT UNIQUE
  );
`;