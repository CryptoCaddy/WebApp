import { TrackByFunction } from '@angular/core';

/**
 * Returns a function that can be used to track by a specific property instead of writing
 * a specific trackBy method for each ngFor loop.
 *
 * @example trackItemBy = trackTypeBy<Item>();
 * @example <div *ngFor="let item of items; trackBy:trackItemBy('id')">
 */
export function trackTypeBy<T>() {
  return (property: keyof T): TrackByFunction<T> => {
    return (index: number, item: T) => {
      const prop = item[property];
      return prop || index;
    };
  };
}

/**
 * Immutable sort funtion to sort a given array of objects by a specific key of the objects.
 */
export function sortByKey<T>(objects: T[], key: keyof T): T[] {
  return objects.slice().sort((a, b) => {
    return a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0);
  });
}
