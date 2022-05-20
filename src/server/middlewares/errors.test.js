const { notFoundError, generalError } = require("./errors");

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

describe("Given a generalError function", () => {
  describe("When it's invoke with a response and a error with errorCode 405 and a errorMessage 'Custom Error Mesage'", () => {
    test("Then it should call the response status methos with 405 and the json method with the passes message", () => {
      const receivedError = new Error();
      receivedError.code = 405;
      receivedError.message = "Custom Error Mesage";

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatus = 405;
      const expectedMessage = { message: "Custom Error Mesage" };

      generalError(receivedError, null, res);

      expect(res.status).toBeCalledWith(expectedStatus);
      expect(res.json).toBeCalledWith(expectedMessage);
    });
  });
});
