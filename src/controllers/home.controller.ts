import express from "express";
import {Routes , Get}  from "../../vendors/router_helper"

@Routes("/Home")
export class HomeController {

  @Get("/")
  public Index(req: express.Request, res: express.Response, next:express.NextFunction) {
    console.log("hello");
    return res.status(200).end("Hello World");
  }
}








