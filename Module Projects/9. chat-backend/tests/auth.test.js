import supertest from "supertest";
import app from "../index.js";
import mongoose from "mongoose";
import User from "../modals/user";

beforeAll(async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
    );
    console.log("Database connected");
  } catch (err) {
    console.log("Failed to Connect to databse");
  }
});

beforeEach(async () => {
  await User.deleteMany({});
});

describe("Signup Test Cases", () => {
  it("Signup: Create Account successfully", async () => {
    const response = await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "123456789",
      gender: "male",
    });
    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
  });
  it("Signup: Password should be of min 8 lenght", async () => {
    const response = await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "1234",
      gender: "male",
    });
    expect(response.status).toEqual(400);
    expect(response.body.success).toEqual(false);
    expect(response.body.message).toEqual(
      "Password should be minimum 8 length"
    );
  });
  it("Signup: With already existing Email", async () => {
    const response = await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "123456789",
      gender: "male",
    });
    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);

    const repsonse2 = await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "123456789",
      gender: "male",
    });
    expect(repsonse2.status).toEqual(400);
    expect(repsonse2.body.success).toEqual(false);
    expect(repsonse2.body.message).toEqual("Email already in use");
  });
});

describe("Login test cases", () => {
  beforeEach(async () => {
    const response = await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "123456789",
      gender: "male",
    });
  });

  it("Login correctly", async () => {
    const response = await supertest(app).post("/auth/login").send({
      email: "a@gmail.com",
      password: "123456789",
    });

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.name).toEqual("Ashish");
    expect(response.body.email).toEqual("a@gmail.com");
  });
  it("Invalid Email", async () => {
    const response = await supertest(app).post("/auth/login").send({
      email: "b@gmail.com",
      password: "123456789",
    });

    expect(response.status).toEqual(400);
    expect(response.body.success).toEqual(false);
    expect(response.body.message).toEqual("Invalid Email");
  });

  it("Invalid Password", async () => {
    const response = await supertest(app).post("/auth/login").send({
      email: "a@gmail.com",
      password: "12345678",
    });
    expect(response.status).toEqual(400);
    expect(response.body.success).toEqual(false);
    expect(response.body.message).toEqual("Invalid Password");
  });
});

describe("Get All Users", () => {
  beforeEach(async () => {
    await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "a@gmail.com",
      password: "123456789",
      gender: "male",
    });
    await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "b@gmail.com",
      password: "123456789",
      gender: "male",
    });
    await supertest(app).post("/auth/signup").send({
      name: "Ashish",
      email: "c@gmail.com",
      password: "123456789",
      gender: "male",
    });
  });

  it("Without Login Get All user", async () => {
    const response = await supertest(app).get("/auth/users");
    expect(response.status).toEqual(401);
    expect(response.body.success).toEqual(false);
    expect(response.body.message).toEqual("Invalid Access Token");
  });
  it("With logi Gett All users", async () => {
    let response = await supertest(app).post("/auth/login").send({
      email: "a@gmail.com",
      password: "123456789",
    });

    let response2 = await supertest(app)
      .get("/auth/users")
      .set("Authorization", response.body.token);

    expect(response2.status).toEqual(200);
    expect(response2.body.success).toEqual(true);
    expect(response2.body.users.length).toEqual(3);
  });
});
