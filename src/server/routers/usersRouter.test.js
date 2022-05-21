const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const { app } = require("../index");
const connectDB = require("../../database/index");
const User = require("../../database/models/User");
const { mockUsers } = require("../mocks/mockUsers");

let mongoServer;
let users;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await connectDB(mongoServer.getUri());
});

beforeEach(async () => {
  await User.create(users[0]);
  await User.create(users[1]);
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a Get '/loadusers'", () => {
  describe("When it receives a request", () => {
    users = mockUsers;
    test("Then it should return a response with a status 200 and a list of users", async () => {
      const { body } = await request(app).get("/user/loadusers").expect(200);

      expect(body.users).toHaveLength(users.length);
    });
  });
});
