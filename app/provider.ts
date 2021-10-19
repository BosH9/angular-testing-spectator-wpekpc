import { InjectionToken } from "@angular/core";

export const PROVIDER = new InjectionToken('Some provider', {
  factory() {
    return 'A';
  }
});