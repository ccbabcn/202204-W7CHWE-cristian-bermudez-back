const mockUsers = [
  {
    id: "6287dcfafc0614bd47bc9c4a",
    name: "Mario",
    username: "marioLG",
    password: "125d6sfsd6gf",
    image: "hfdfhdf.jpg",
    friends: ["6287e11ffc0614bd47bc9c4e"],
    enemies: ["6287e128fc0614bd47bc9c4f"],
  },
  {
    _id: "6287e11ffc0614bd47bc9c4e",
    name: "Maichol",
    username: "queEsEstoMaicol",
    password: "125d6sfsd6gf",
    image: "dsdsdsd.jpg",
    friends: ["6287dcfafc0614bd47bc9c4a"],
    enemies: ["6287e128fc0614bd47bc9c4f"],
  },
];

const mockUser = {
  id: "6287dcfafc0614bd47bc9c4a",
  name: "Mario",
  username: "marioLG",
  password: "125d6sfsd6gf",
  image: "hfdfhdf.jpg",
  friends: ["6287e11ffc0614bd47bc9c4e"],
  enemies: ["6287e128fc0614bd47bc9c4f"],
};

module.exports = { mockUsers, mockUser };
