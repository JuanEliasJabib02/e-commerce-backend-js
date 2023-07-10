const request = require("supertest")
const { app } = require("../src/app")
const { User } = require("../src/domains/users/user.model")


const mockDataLoginOk = {
    email:"admin@gmail.com",
    password:"4321admin"
}

const mockDataRegister = {
  firstName: "test",
  lastName: "test2",
  email: "admin@gmail.com",
  password: "4321admin",
  role:"admin"
}

const mockDataLoginFail = {
    email:"noexist@gmail.com",
    password:"4321admin"
}

beforeAll(async () => {
  await User.destroy({truncate: true})
})
/*  */
describe("[AUTH] this is the test for /api/v1/auth/", () => {

  test("This has to return 200", async () => {
      
    const response = await request(app)
      .post("/api/v1/auth/sign-up")
      .send(mockDataRegister)
       expect(response.statusCode).toEqual(201)
  })
  test("This has to return 200", async () => {
      
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send(mockDataLoginOk)
      expect(response.statusCode).toEqual(200)
  }) 

})
 