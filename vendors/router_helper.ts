export type HttpMethod =  'get' | 'post' | 'delete' | 'patch' | 'put';

export type RouteInfo = {
  method: HttpMethod,
  suffix: string, 
  function: any
};

export type RoutesInfo =  {
  GlobalRoutePrefix:string, 
  Routes: RouteInfo[]
};

export function Routes(prefix: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
           public get RouteInfo(): RoutesInfo {
              const index = Object.keys(constructor.prototype).findIndex(element =>  element == "Routes");
              if(index < 0) { 
                constructor.prototype.Routes = [ ];
              }
            return {
                GlobalRoutePrefix : prefix,
                Routes: constructor.prototype.Routes
            }
        }
      }
    } 
  }

export function RestMethod(httpMethod: HttpMethod ,suffix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const index = Object.keys(target).findIndex(element =>  element == "Routes");
    if(index < 0) { 
        target.Routes =[ ];
    }
    target.Routes.push({
      method: httpMethod, 
      suffix: `${suffix}`,
      function: target[propertyKey]
    });
  }
}

export function Get(suffix: string) {
  return RestMethod("get", suffix);
}

export function Post(suffix: string) {
  return RestMethod("post", suffix);
}


export function Put(suffix: string) {
  return RestMethod("put", suffix);
}

export function Patch(suffix: string) {
  return RestMethod("patch", suffix);
}

export function Delete(suffix: string) {
  return RestMethod("delete", suffix);
}


