# F.js
F.js is a function-only JavaScript library that offers a variety of functions for your use. With the exception of the `Expose` function, you are required to 'pull' functions into the specified scope to use. In total, there are **55** functions for your use.

## Loading functions
You use the global `Expose` function to load the specified function into the desired scope.

### Usage
```javascript
Expose(fn, scope);
```

#### Parameters
`fn`: Function to load. You can supply a string to load one function, or an array to load multiple functions at once.

`scope`: The scope that the functions should be available from. This is `window` by default.

#### Returns
Boolean

### Example
```javascript
Expose('inArray');

// Or

var scope = {};
Expose(['inArray', 'toArray', 'Format'], scope);
```

## Functions

### `toArray`
You can use `toArray` to convert array-like objects, such as a nodelist, to an array.

#### Usage
```javascript
toArray(nonArray);
```

#### Parameters
`nonArray`: The array-like object to convert.

#### Returns
Array or Error

#### Example
```javascript
Expose('toArray');

var divs = document.querySelectorAll('div'),
    arr_div = toArray(divs);
```