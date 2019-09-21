import  request  from "supertest"
import { ApplicationFactory } from '../src/app';
import routes from '../src/routes';

const factory = new ApplicationFactory();

const [app, ] = factory.createApplicationInstance({
  applicationRouter: routes 
});


test("Test api initially", async () => {
    const res = await request(app).get("/Home/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World");
})


