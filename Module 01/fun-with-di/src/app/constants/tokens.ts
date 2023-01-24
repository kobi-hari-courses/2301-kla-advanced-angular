import { InjectionToken } from "@angular/core";

export const PREFIX_TOKEN = new InjectionToken<string>('PREFIX TOKEN');

export const NOW_TOKEN = new InjectionToken<() => Date>('NOW');