const mockUsers = [
  {
    id: "6287dcfafc0614bd47bc9c4a",
    name: "Mario",
    username: "marioLG",
    password: "CA32A1E4F9CB46B6D99FC627F9EB4AC606BC3474",
    image: "hfdfhdf.jpg",
    friends: ["6287e11ffc0614bd47bc9c4e"],
    enemies: ["6287e128fc0614bd47bc9c4f"],
  },
  {
    _id: "6287e11ffc0614bd47bc9c4e",
    name: "Maichol",
    username: "queEsEstoMaicol",
    password: "CA32A1E4F9CB46B8D99FC627F9EB4AC606BC3474",
    image: "dsdsdsd.jpg",
    friends: ["6287dcfafc0614bd47bc9c4a"],
    enemies: ["6287e128fc0614bd47bc9c4f"],
  },
];

const mockUser = {
  id: "6287dcfafc0614bd47bc9c4a",
  name: "Mario",
  username: "marioLG",
  password: "CA32A1E4F9CB46B6D99FC627F9EB4AC606BC3474",
  image: "hfdfhdf.jpg",
  friends: ["6287e11ffc0614bd47bc9c4e"],
  enemies: ["6287e128fc0614bd47bc9c4f"],
};

module.exports = { mockUsers, mockUser };
