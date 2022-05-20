const Kind = require("../../database/models/Kind");
const kindsList = require("../../mocks/kinds");
const listKinds = require("./kindsController");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a listKinds function", () => {
  describe("When it's invoke with a response", () => {
    test("Then it should call the response status method with a 200", async () => {
      jest.spyOn(Kind, "find").mockResolvedValue(kindsList);

      const expectedStatus = 200;

      await listKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with a list of Kinds", async () => {
      jest.spyOn(Kind, "find").mockResolvedValue(kindsList);

      const expectedKindsList = {
        kinds: [
          {
            id: 1,
            kind: "Gatoperro",
          },
          {
            id: 2,
            kind: "Buena gente",
          },
          {
            id: 3,
            kind: "Malaje",
          },
          {
            id: 4,
            kind: "A su bola",
          },
        ],
      };

      await listKinds(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedKindsList);
    });

    describe("When it's invoked with a response and a error ocurs", () => {
      test("Then it should call next with that error", async () => {
        jest.spyOn(Kind, "find").mockResolvedValue(undefined);

        const next = jest.fn();

        const expectedError = new Error();
        expectedError.code = 400;
        expectedError.errorMessage = "Bad request";

        await listKinds(null, res, next);

        expect(next).toHaveBeenCalledWith(expectedError);
      });
    });
  });
});
