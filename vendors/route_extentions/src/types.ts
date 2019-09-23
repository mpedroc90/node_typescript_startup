export enum HttpMethod {
  Get = 'get',
  Post = 'post',
  Delete = 'delete',
  Patch = 'patch',
  Put = 'put', 
  Option = 'option'
}

export type RouteInfo = {
  method: HttpMethod,
  suffix: string, 
  function: any
};

export type ControllerRouted = {
  Routes: RouteInfo []
};