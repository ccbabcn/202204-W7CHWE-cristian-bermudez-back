const User = require("../../database/models/User");
const { mockUsers } = require("../mocks/mockUsers");
const loadUsers = require("./usersController");

describe("given loadUsers function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When it's invoked with a response", () => {
    test("Then it should call the response status method with 200 and return the user", async () => {
      User.find = jest.fn().mockResolvedValue(mockUsers);
      const expectedStatus = 200;
      const expectedUsers = {
        users: [
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
        ],
      };

      await loadUsers(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(expectedUsers);
    });
  });
});
