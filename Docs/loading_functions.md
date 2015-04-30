# Loading functions
The global `Expose` function is to be used to load functions into a specified scope, which is `window` by default.

## Syntax
```
Expose(fn, scope);
```

### Parameters
* `fn` (_string_ or _array_): The name or names of functions to load, via a string or array, respectively.
* `scope` (_object_): The scope to load the function(s) in. This is `window` by default.

### Returns
* _Boolean_

## Example
```javascript
// To load one function
Expose('Range'); // loads in the window scope by default

// To load multiple functions
var scope = {}; // this is optional
Expose(['Range', 'inArray'], scope);
