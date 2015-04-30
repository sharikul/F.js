# `functionExists`
To check the existence of a function in the specified scope. _Defined on line [469](../../F.js#L469)_.

## Use
```
functionExists(fn, scope);
```

### Parameters
* `fn` (_string_): The name of the function to check for.
* `scope` (_object_): The scope to search in. This is `window` by default.

### Returns
* `Boolean`
* `TypeError`

## Example
```javascript
Expose('functionExists');

function fn() {
  return 'nothing here!';
}

var scope = {};
functionExists('fn'); // true
functionExists('fn', scope); // false
```
