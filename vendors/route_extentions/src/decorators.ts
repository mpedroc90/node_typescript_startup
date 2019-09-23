import { RouteInfo, HttpMethod } from "./types";

export function Routes(prefix: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
           private _routes : RouteInfo[] = null;
           public get Routes(): RouteInfo [] {
           if(this._routes === null) {
              if(!innerRoutesPropertyExists(constructor.prototype)) { 
                constructor.prototype.InnerRoutes = [ ];
              }
               this._routes =  constructor.prototype.InnerRoutes.map( (t:RouteInfo) => ({
                   method: t.method,
                    suffix: `${prefix}${t.suffix}`, 
                    function: t.function
              }));
            }
            return this._routes;
        }
      }
    } 
  }

function innerRoutesPropertyExists<T extends any>(object : T) {
  const index = Object.keys(object).findIndex(element =>  element == "InnerRoutes");
  return index >= 0;
}
  
export function RestMethod(httpMethod: HttpMethod ,suffix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const index = Object.keys(target).findIndex(element =>  element == "Routes");
    if(index < 0) { 
        target.InnerRoutes =[ ];
    }
    target.InnerRoutes.push({
      method: httpMethod, 
      suffix: `${suffix}`,
      function: target[propertyKey]
    });
  }
}

export function Get(suffix: string) {
  return RestMethod(HttpMethod.Get, suffix);
}

export function Post(suffix: string) {
  return RestMethod(HttpMethod.Post, suffix);
}


export function Put(suffix: string) {
  return RestMethod(HttpMethod.Put, suffix);
}

export function Patch(suffix: string) {
  return RestMethod(HttpMethod.Patch, suffix);
}

export function Delete(suffix: string) {
  return RestMethod(HttpMethod.Delete, suffix);
}