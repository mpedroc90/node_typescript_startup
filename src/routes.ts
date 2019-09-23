import { Router } from "express";
import { HomeController } from "./controllers";
import { RouteInfo, MapToControllersRouted , ControllerRouted } from "../vendors/route_extentions"

const router = Router();

const controllers = [ 
    new HomeController() 
];

MapToControllersRouted(controllers).
  forEach((controller: ControllerRouted) => {
    controller.Routes.forEach((t:RouteInfo) => {
          const method: string = t.method;
         (router as any)[method](t.suffix, t.function);
  });
})

export default router;