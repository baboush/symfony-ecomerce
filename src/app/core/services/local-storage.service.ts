import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  getStorage(key: string) {
    if (typeof localStorage !== 'undefined')
      return window.localStorage.getItem(key);
    return null;
  }

  setStorage(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  clearStorage() {
    window.localStorage.clear();
  }
}
