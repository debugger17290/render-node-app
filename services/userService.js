// services/userService.js
const getTwoRandomUsers = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
  ];

  const randomUsers = [];
  while (randomUsers.length < 2) {
    const randomIndex = Math.floor(Math.random() * users.length);
    const user = users[randomIndex];
    if (!randomUsers.includes(user)) {
      randomUsers.push(user);
    }
  }

  return randomUsers;
};

module.exports = { getTwoRandomUsers };
