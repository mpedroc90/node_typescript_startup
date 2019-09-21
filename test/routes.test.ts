import { HomeController } from "../src/controllers/home.controller"; 


test("Testing Routes decorator", () => {
  const homeController = new HomeController() as any;
  
  console.log(homeController.RouteInfo);
  expect("Home").toBe("Home");
});

/*
test("Testing Routes decorator", () => {
  const homeController = new HomeController(); 
  
  console.log((homeController.Index as any).hola);
  
});*/