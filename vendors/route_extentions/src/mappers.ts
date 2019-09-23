import { ControllerRouted } from "./types";

export function MapToControllersRouted<T> (controllers:T[]) : ControllerRouted[] {
  return controllers as unknown as ControllerRouted[];
}

export function MapToControllerRouted<T> (controllers:T) : ControllerRouted {
  return controllers as unknown as ControllerRouted;
}

