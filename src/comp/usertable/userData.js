// userData.js

// const userData = [
//     {
//       id: 1,
//       username: 'john_doe',
//       email: 'john@example.com',
//       phone: '123-456-7890',
//       creationDate: '2023-11-01',
//     },
//     {
//       id: 2,
//       username: 'jane_smith',
//       email: 'jane@example.com',
//       phone: '987-654-3210',
//       creationDate: '2023-10-15',
//     },
//     {
//         id: 3,
//         username: 'smith',
//         email: 'janes@example.com',
//         phone: '987-644-3210',
//         creationDate: '23-10-15',
//       },
//   ];
  
//   export default userData;
  


  const generateRandomUserData = () => {
    const users = [];
    const usernames = [
      'john_doe',
      'jane_smith',
      'mark_johnson',
      // Add more usernames as needed
    ];
  
    const domains = ['example.com', 'test.com', 'demo.com']; // Sample email domains
  
    for (let i = 1; i <= 50; i++) {
      const randomUsername =
        usernames[Math.floor(Math.random() * usernames.length)];
      const randomDomain =
        domains[Math.floor(Math.random() * domains.length)];
      const email = `${randomUsername}@${randomDomain}`;
  
      const user = {
        id: i,
        username: randomUsername,
        email: email,
        // Add other user details as needed
      };
  
      users.push(user);
    }
  
    return users;
  };
  
  const userData = generateRandomUserData();
  
  export default userData;
  