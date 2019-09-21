import { Router } from "express";
import { HomeController } from "./controllers";
import { RoutesInfo, RouteInfo } from "../vendors/router_helper"

type ControllerRouted =  HomeController & {
  RouteInfo : RoutesInfo
};
const router = Router();

const controllers = [ 
    new HomeController() 
];

controllers.forEach((controller: ControllerRouted) => {
  const routesInfo = controller.RouteInfo;
  routesInfo.Routes.forEach((t:RouteInfo) => {
    console.log(`${routesInfo.GlobalRoutePrefix}${t.suffix}`);
    router[t.method](`${routesInfo.GlobalRoutePrefix}${t.suffix}`, t.function);
  });
})

export default router;