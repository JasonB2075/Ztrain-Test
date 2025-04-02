export const generateRandomUser = () => {
    const random = Math.floor(Math.random() * 10000);
    return {
      firstName: `Test${random}`,
      lastName: `User${random}`,
      email: `test${random}@example.com`,
      password: `Password${random}!`
    };
  };
  
  export const userCredentials = {
    email: 'test@example.com', // À remplacer par un compte réel
    password: 'Password123!'
  };