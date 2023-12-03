/*Create a proxy object that intercepts and logs all property access.
Solution Approach:
Use the Proxy object to create a wrapper around another object.*/

// Original object
const targetObject = {
  name: "John",
  age: 25,
  city: "Example City",
};

// Proxy handler
const handler = {
  get: function (target, property, receiver) {
    // Log property access
    console.log(`Property ${property} accessed`);

    // Return the property value from the original object
    return Reflect.get(target, property, receiver);
  },
};

// Create a Proxy object
const loggingProxy = new Proxy(targetObject, handler);

// Accessing properties through the proxy
console.log(loggingProxy.name); // This will log: Property name accessed
console.log(loggingProxy.age); // This will log: Property age accessed
console.log(loggingProxy.city); // This will log: Property city accessed
