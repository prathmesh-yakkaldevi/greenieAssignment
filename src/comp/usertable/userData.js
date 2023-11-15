const generateRandomUserData = () => {
  const users = [];
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const domains = ['example.com', 'test.com', 'demo.com']; // Sample email domains

  for (let i = 1; i <= 50; i++) {
    let randomUsername = '';
    const usernameLength = Math.floor(Math.random() * 8) + 3; // Random length between 3 to 10 characters

    for (let j = 0; j < usernameLength; j++) {
      const randomIndex = Math.floor(Math.random() * alphabets.length);
      randomUsername += alphabets[randomIndex];
    }

    const randomDomain =
      domains[Math.floor(Math.random() * domains.length)];
    const email = `${randomUsername}@${randomDomain}`;

    const user = {
      id: i,
      username: randomUsername,
      email: email,
      phone: `123-456-${i.toString().padStart(2, '0')}`, // Generating a phone number based on user ID
      creationDate: `2023-${(i % 12) + 1}-${(i % 27) + 1}`, // Generating a random creation date
    };

    users.push(user);
  }

  return users;
};

const userData = generateRandomUserData();

export default userData;
