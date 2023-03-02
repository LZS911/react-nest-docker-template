import EmitterKey from '../common/emitterKey';
import eventEmitter from './eventEmitter';

class LocalStorageWrapper {
  public set<T extends string = string>(key: string, value: T) {
    eventEmitter.emit(EmitterKey.storageEvent, {
      key,
      value,
    });
    return localStorage.setItem(key, value);
  }

  public get<T extends string>(key: string) {
    return localStorage.getItem(key) as T;
  }

  public getOrDefault<T extends string>(key: string, defaultValue: T): T {
    if (localStorage.getItem(key) === null) {
      return defaultValue;
    }

    return localStorage.getItem(key) as T;
  }
}

export default new LocalStorageWrapper();
