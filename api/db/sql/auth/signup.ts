export const registerUser = `
  INSERT INTO users(email) VALUES($1) RETURNING *;
`;
