
export const registerUser = `
  INSERT INTO users(email) VALUES($1) RETURNING *;
`;

export const checkUserRegistration = `
  SELECT * FROM users WHERE email = $1;
`;
