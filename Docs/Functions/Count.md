# `Count`
To return the length of the object provided, including arrays. _Defined on line [140](../../F.js#L140)_.

## Use
```
Count(objOrArray);
```

### Parameters
* `objOrArray` (_object_ or _array_): The object or array to count.

### Returns
* `Integer`
* `Error`

## Example
```javascript
Expose('Count');

var obj = {name: 'Sharikul', age: 19},
    arr = ['name', 'Sharikul', 'age', 19];

Count(obj); // 2
Count(arr); // 4
```
