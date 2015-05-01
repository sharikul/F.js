# `Filter`
To return a filtered array. _Defined on line [702](../../F.js#L702)_.

## Use
```
Filter(array, callback);
```

### Parameters
* `array` (_array_): The array to filter through.
* `callback` (_function_): A function that processes each array item and returns a boolean, allowing filtering.

### Returns
* `Array`
* `TypeError`

## Example
```javascript
Expose(['Range', 'Filter']);

var one_to_five = Range(1,5);

Filter(one_to_five, function(num) {
	return num % 2 === 0;
});

// returns [2, 4]
```