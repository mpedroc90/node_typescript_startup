import { Router } from "express";
import { HomeController } from "./controllers";
import { RouteInfo, MapToControllersRouted } from "../vendors/route_extentions"

type ControllerRouted =  HomeController & {
  Routes: RouteInfo []
};

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