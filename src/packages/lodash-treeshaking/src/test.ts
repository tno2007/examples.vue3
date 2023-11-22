import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

//import { cloneDeep, isEqual } from "lodash";


/**
 * Takes an object that may have nested properties and returns a new shallow
 * copy of the object with the keys sorted. It also sorts arrays, and arrays of
 * objects.
 *
 * IF THERE IS ANY IMPORTANCE IN THE ORDER OF YOUR ARRAYS DO NOT USE THIS.
 *
 * Use this in conjunction with JSON.strigify() to create consistent string
 * representations of the same object, even if the order of properties or arrays
 * might be different.
 *
 * And if you're wondering. Yes, modern JS does maintain order in objects:
 * https://exploringjs.com/es6/ch_oop-besides-classes.html#_traversal-order-of-properties
 *
 * @param object
 * @returns object
 */


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export  function deepSortObject(object: any) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const deepSort = (object: any): any => {
      // Null or undefined objects return immediately.
      if (object == null) {
        return object;
      }
  
      // Handle arrays.
      if (Array.isArray(object)) {
        return (
          cloneDeep(object)
            // Recursively sort each item in the array.
            .map((item) => deepSort(item))
            // Sort array itself.
            .sort((a, b) => {
              let workingA = a;
              let workingB = b;
  
              // Object or Array, we need to look at its first value...
              if (typeof a === "object") {
                workingA = a[Object.keys(a)[0]];
              }
              if (typeof b === "object") {
                workingB = b[Object.keys(b)[0]];
              }
              if (Array.isArray(a)) {
                workingA = a[0];
              }
              if (Array.isArray(b)) {
                workingB = b[0];
              }
  
              // If either a or b was an object/array, we deep sort...
              if (workingA !== a || workingB !== b) {
                const sortedOrder = deepSort([workingA, workingB]);
  
                if (isEqual(sortedOrder[0], workingA)) {
                  return -1;
                } else {
                  return 1;
                }
              }
  
              // If both were scalars, sort the normal way!
              return a < b ? -1 : a > b ? 1 : 0;
            })
        );
      }
  
      // Anything other than Objects or Arrays just send it back.
      if (typeof object !== "object") {
        return object;
      }
  
      // Handle objects.
      const keys = Object.keys(object);
      keys.sort();
  
      const newObject: Record<string, unknown> = {};
  
      for (let i = 0; i < keys.length; ++i) {
        newObject[keys[i]] = deepSort(object[keys[i]]);
      }
      return newObject;
    };
  
    return deepSort(object);
  }