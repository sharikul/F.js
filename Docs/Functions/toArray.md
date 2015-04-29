# `toArray` 
To convert array-like objects to an array. _Defined on line [21](../../blob/master/F.js#L21)_.

## Use
```
toArray(nonArray)
```

### Parameters
* `nonArray` (_object_): The array-like object to convert.

### Returns
* _Array_ or _Error_

## Example
```javascript
Expose('toArray');

var divs = document.querySelectorAll('div'),
    arrayDivs = toArray(divs);
```
