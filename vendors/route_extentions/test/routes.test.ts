
import express from "express";
import { Routes , Get, ControllerRouted } from "..";


@Routes("Prefix")
class FakeController {
  @Get("/Suffix")
  public Method(req: express.Request, res: express.Response, next: express.NextFunction) {
    return res.status(200).end();
  }
}

test("Testing Routes decorator", () => {
  const homeController :FakeController & ControllerRouted = new FakeController();
  expect(homeController).toHaveProperty("Routes");
  expect(homeController.Routes).toBeInstanceOf(Array); 
  expect(homeController.Routes).toHaveLength(1);
  const route= homeController.Routes[0]; 
  expect(route.suffix).toBe("Prefix/Suffix");
  expect(route.method).toBe("get")
  expect(route.function).toBeInstanceOf(Function);
});
