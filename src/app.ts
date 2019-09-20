import express from "express";
// used to parse the form data that you pass in the request
import * as bodyParser from "body-parser";

// cors is using to resolve CORS 
import cors from "cors";

import { IRouter } from "express-serve-static-core";

export interface IApplicationOptions {
    applicationRouter:IRouter, 
    applicationPrefixUrl?:string
}

export interface IApplicationFactory {
    createApplicationInstance(options: IApplicationOptions) : [express.Application , IApplicationOptions ]
}

export class ApplicationFactory implements IApplicationFactory {
    public createApplicationInstance(options: IApplicationOptions) : [express.Application , IApplicationOptions ]
    {
        const app = express();
        this.config(app ,options);
        return [app, options];
    }
  
    protected config(app: express.Application, options:IApplicationOptions ): void {
      options.applicationPrefixUrl = options.applicationPrefixUrl || "/";
    // enable cors by adding cors middleware
          app.use(cors());
    // support application/json type post data
          app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
          app.use(bodyParser.urlencoded({extended: false}));
    // add routes
        app.use(options.applicationPrefixUrl, options.applicationRouter);
  }
}