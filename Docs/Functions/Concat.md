# `Concat`
To merge several arrays into one array. _Defined on line [231](../../F.js#L231)_.

## Use
```
Concat(array1, array2...);
```

### Parameters
* `array` (_array_): The array to merge.

### Returns
* `Array`
* `Error`

## Example
```javascript
Expose('Concat');

var array1 = ['Sharikul', 'Islam'],
    array2 = [18, 19];

Concat(array1, array2); // ['Sharikul', 'Islam', 18, 19];
```
