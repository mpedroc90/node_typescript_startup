import express from "express";
import { Routes, Get } from "../../vendors/route_extentions";

@Routes("/Home")
export class HomeController {
  @Get("/")
  public Index(req: express.Request, res: express.Response, next:express.NextFunction) {
    return res.status(200).end("Hello World");
  }
}








