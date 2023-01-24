import { InjectionToken } from "@angular/core";

export const PREFIX_TOKEN = new InjectionToken<string>('PREFIX TOKEN');

export const NOW_TOKEN = new InjectionToken<() => Date>('NOW');

export const FOO_BAR_TOKEN = new InjectionToken<number[]>('Foo Bar mashoo with number');