import { InjectionToken } from '@angular/core';

export * from './home.services';
export const token = new InjectionToken<string>('baseUrl');