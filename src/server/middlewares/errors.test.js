const { json } = require("express/lib/response");
const { notFoundError } = require("./errors");

describe("Given a notFounError function", () => {
  describe("When it's invoke with a response", () => {
    test("Then it should call the response status method with a 404 and the json method with a message `Endpoint not found`", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatus = 404;
      const expectedMessage = {
        message: "Endpoint not found",
      };

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
