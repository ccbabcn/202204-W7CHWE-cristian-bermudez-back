const jwt = require("jsonwebtoken");
const auth = require("./auth");

describe("Given an auth function", () => {
  describe("When it receives a request with a valid token", () => {
    test("Then it should call next", () => {
      const expectedToken = "mitoquencito";
      jest.spyOn(jwt, "verify").mockReturnValue(expectedToken);
      const req = {
        headers: { authorization: "Bearer " },
      };
      const next = jest.fn();

      auth(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe("When it receives a request with a invalid token Bearer", () => {
    test("Then it should call next with a custom error", () => {
      const req = {
        headers: { authorization: "noCorrect " },
      };
      const customError = new Error("Invalid token");

      customError.statusCode = 401;
      const next = jest.fn();

      auth(req, null, next);

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
