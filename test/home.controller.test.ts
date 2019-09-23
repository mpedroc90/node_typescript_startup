import  request  from "supertest"
import { ApplicationFactory } from '../src/app';
import routes from '../src/routes';

const factory = new ApplicationFactory();
const [app, ] = factory.createApplicationInstance({
  applicationRouter: routes 
});

describe("Test HomeController Api", () => {
    it("Get /Home/ should return `Hello Word` with status Ok(200)", async() => {
      const res = await request(app).get("/Home/");
      expect(res.status).toBe(200);
      expect(res.text).toBe("Hello World");
    });
})



