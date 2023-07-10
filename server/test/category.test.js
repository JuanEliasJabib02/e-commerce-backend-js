const request = require("supertest")
const { app } = require("../src/app")
const { Category } = require("../src/domains/categories/category.model")


const testCreateCategory = {
  name:"shoes"
}


beforeAll(async () => {
  await Category.destroy({truncate: true})
})
/*  */
describe("[CATEGORY] this is the test for /api/v1/category/", () => {

  test("This has to return 200", async () => {
      
    const response = await request(app)
      .get("/api/v1/category")
    expect(response.statusCode).toEqual(200)
  })

})
 